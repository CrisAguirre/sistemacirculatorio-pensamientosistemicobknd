const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');

function generateToken(user) {
  return jwt.sign(
    { id: user._id, documento: user.documento, role: user.role },
    config.jwtSecret,
    { expiresIn: config.jwtExpiresIn }
  );
}

function publicUser(user) {
  return {
    id: user._id,
    documento: user.documento,
    full_name: user.full_name,
    edad: user.edad,
    grado: user.grado,
    telefono: user.telefono,
    role: user.role,
  };
}

async function register(req, res) {
  try {
    const { documento, full_name, edad, grado, telefono, password, accessCode } = req.body;

    if (!documento || !full_name || !password || !accessCode) {
      return res.status(400).json({ error: 'Documento, nombre completo, contraseña y código de acceso son obligatorios' });
    }

    let role = 'student';
    if (accessCode === config.accessCodes.teacher) {
      role = 'teacher';
    } else if (accessCode === config.accessCodes.student) {
      role = 'student';
    } else {
      return res.status(400).json({ error: 'Código de acceso inválido' });
    }

    const existing = await User.findOne({ documento });
    if (existing) {
      return res.status(409).json({ error: 'El documento ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      documento,
      full_name,
      edad: edad || undefined,
      grado: grado || undefined,
      telefono: telefono || undefined,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token: generateToken(user),
      user: publicUser(user),
    });
  } catch (error) {
    console.error('Error en registro:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function login(req, res) {
  try {
    const { documento, password } = req.body;

    if (!documento || !password) {
      return res.status(400).json({ error: 'Documento y contraseña son obligatorios' });
    }

    const user = await User.findOne({ documento: String(documento).trim() });

    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    res.json({
      message: 'Inicio de sesión exitoso',
      token: generateToken(user),
      user: publicUser(user),
    });
  } catch (error) {
    console.error('Error en login:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function profile(req, res) {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(publicUser(user));
  } catch (error) {
    console.error('Error al obtener perfil:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { register, login, profile };
