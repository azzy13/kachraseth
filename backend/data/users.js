import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kanki',
    email: 'kanki@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ousen',
    email: 'ousen@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
