const bcrypt = require('bcryptjs');
const User = require('./models/User');

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
