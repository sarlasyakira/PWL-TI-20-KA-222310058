const db = require('../models');
const User = db.User;

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username, password } });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res.json({
    message: 'Login success',
    user: {
      id: user.id,
      username: user.username,
      email: user.email
    }
  });
};

module.exports = { login };
