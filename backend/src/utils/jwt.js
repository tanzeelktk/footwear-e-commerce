const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.KEY, { expiresIn: "1d" });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.KEY);
      req.user = decoded
      next();
    } catch (error) {
      res.status(403).json({ message: "invalid token" });
    }
  } else {
    return res.status(401).json({ message: "token missing" });
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
