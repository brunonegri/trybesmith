import jwt from 'jsonwebtoken';
import 'dotenv/config';
import User from '../interfaces/user';

const secret = process.env.JWT_SECRET;

const generateToken = (user: User) => { 
  const payload = {
    id: user.id,
    username: user.username,
  };
  const token = jwt.sign(payload, secret!, { expiresIn: '10d' });
  return token;
};

const authenticateToken = async (token: string) => {
  try {
    const authentication = await jwt.verify(token, secret!);
    return authentication;
  } catch (err) {
    return false;
  }
};

const decodeToken = (token: string) => jwt.decode(token);

export {
  generateToken,
  authenticateToken,
  decodeToken,
};