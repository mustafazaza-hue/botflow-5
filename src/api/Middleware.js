// middleware/auth.js
const jwt = require('jsonwebtoken');

const checkSuperAdmin = (req, res, next) => {
  try {
    // الحصول على التوكن من الـ header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        error: 'No token provided or invalid format',
        code: 'NO_TOKEN'
      });
    }
    
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        error: 'No token provided',
        code: 'NO_TOKEN'
      });
    }
    
    // التحقق من التوكن
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // التحقق من دور المستخدم
    if (decoded.role !== 'super-admin') {
      return res.status(403).json({ 
        error: 'Access denied. Super Admin privileges required',
        code: 'ACCESS_DENIED'
      });
    }
    
    // التحقق من صلاحية التوكن
    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      return res.status(401).json({ 
        error: 'Token has expired',
        code: 'TOKEN_EXPIRED'
      });
    }
    
    // إضافة معلومات المستخدم للـ request
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
      name: decoded.name
    };
    
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        error: 'Invalid token',
        code: 'INVALID_TOKEN'
      });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        error: 'Token has expired',
        code: 'TOKEN_EXPIRED'
      });
    }
    
    return res.status(500).json({ 
      error: 'Authentication failed',
      code: 'AUTH_FAILED'
    });
  }
};

module.exports = { checkSuperAdmin };