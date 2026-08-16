const bcrypt = require('bcryptjs');
const User = require('./models/User');

// Migra la base de datos del esquema anterior (username/email) al nuevo (documento).
async function migrateUsers() {
  // 1) Eliminar índices únicos obsoletos (username_1, email_1) que quedaron del esquema viejo.
  try {
    const indexes = await User.collection.indexes();
    for (const idx of indexes) {
      const keys = Object.keys(idx.key || {});
      if (keys.includes('username') || keys.includes('email')) {
        await User.collection.dropIndex(idx.name);
        console.log(`🗑️  Índice obsoleto ${idx.name} eliminado`);
      }
    }
  } catch (e) {
    console.log(`⚠️  No se pudo limpiar índices: ${e.message}`);
  }

  // 2) Migrar documentos legados (sin `documento`) a `documento = username | email`.
  try {
    const legacy = await User.collection.find({ documento: { $exists: false } }).toArray();
    for (const doc of legacy) {
      const documento = String(doc.username || doc.email || `legado_${doc._id}`);
      const clash = await User.collection.findOne({ documento, _id: { $ne: doc._id } });
      if (clash) {
        await User.collection.deleteOne({ _id: doc._id });
        console.log(`🗑️  Usuario legado duplicado eliminado: ${documento}`);
      } else {
        await User.collection.updateOne(
          { _id: doc._id },
          { $set: { documento }, $unset: { username: '', email: '' } }
        );
        console.log(`🔄 Usuario legado migrado a documento: ${documento}`);
      }
    }
  } catch (e) {
    console.log(`⚠️  No se pudo migrar usuarios legados: ${e.message}`);
  }
}

async function createUser(data, password, log) {
  const existing = await User.findOne({ documento: data.documento });
  if (existing) {
    console.log(`👤 ${log} ya existe`);
    return;
  }
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ ...data, password: hashed });
  console.log(`👤 ${log} creado (${data.documento} / ${password})`);
}

async function seedUsers() {
  await migrateUsers();

  await createUser(
    { documento: 'admin', full_name: 'Administrador', role: 'admin' },
    'SiCi@2026',
    'Usuario admin'
  );

  await createUser(
    { documento: 'profesor', full_name: 'Docente de Ciencias', role: 'teacher', grado: '8°' },
    'SiCi@2026',
    'Usuario profesor'
  );

  await createUser(
    { documento: '1000000001', full_name: 'Estudiante Demo', role: 'student', edad: 13, grado: '8°' },
    'Estudiante2026',
    'Estudiante demo'
  );
}

module.exports = { seedAdmin: seedUsers, seedUsers };
