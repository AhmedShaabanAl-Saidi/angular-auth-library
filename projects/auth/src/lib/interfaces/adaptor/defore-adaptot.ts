export interface DeforeAdaptot {
  message: string;
  token: string;
  user: User;
}

interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
}
