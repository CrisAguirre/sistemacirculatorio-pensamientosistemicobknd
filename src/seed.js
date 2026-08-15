const bcrypt = require('bcryptjs');
const User = require('./models/User');

async function seedAdmin() {
  const existing = await User.findOne({ username: 'admin' });
  if (existing) {
    console.log('👤 Usuario admin ya existe');
    return;
  }

  const hashedPassword = await bcrypt.hash('SiCi@2026', 10);
  await User.create({
    username: 'admin',
    email: 'admin@sistemacirculatorio.com',
    password: hashedPassword,
    full_name: 'Administrador',
    role: 'admin',
  });
  console.log('👤 Usuario admin creado (admin / SiCi@2026)');
}

module.exports = { seedAdmin };
