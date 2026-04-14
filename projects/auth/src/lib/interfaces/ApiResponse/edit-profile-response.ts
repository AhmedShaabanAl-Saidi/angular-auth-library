export interface EditProfileResponse {
  message: string;
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
  password: string;
  isVerified: boolean;
  createdAt: string;
  passwordChangedAt: string;
}
