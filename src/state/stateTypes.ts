export interface SignUpData {
  email: string;
  password: string;
}

export interface VerifyEmailData {
  email: string;
  token: string;
}
export interface CompleteSignUpData {
  email: string;
  phoneNumber: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  state: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface ResetPasswordData {
  email: string;
  newPassword: string;
  token: string;
}

export interface UpdateAccountData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  balance: number;
  dateOfBirth: string;
  photo: string;
  address: string;
  state: string;
  isAdmin: boolean;
  blockedUntil: string;
}
export interface User {
  _id: string;
  accountNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  balance: number;
  dateOfBirth: string;
  photo: string;
  address: string;
  state: string;
  isAdmin: boolean;
  isOwner: boolean;
  signedIn: Array<string>;
  lastLoginAt: string;
  lastLogoutAt: string;
  createdAt: string;
  updatedAt: string;
  password: string;
  blockedUntil: number;
}

export interface UserState {
  user: User;
  users: Array<User>;
  isLoading: boolean;
  getUsers: (users: Array<User>) => void;
  signUp: (user: User) => void;
  signIn: (user: User) => void;
  signOut: () => void;
  updateAccount: (user: User) => void;
  deleteAccount: (id: string) => void;
  setIsLoading: (label: boolean) => void;
}

export interface Transaction {
  _id: string;
  senderAccount: string;
  senderFirstName: string;
  senderLastName: string;
  amount: number;
  fee: number;
  receiverAccount: string;
  receiverFirstName: string;
  receiverLastName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionState {
  transactions: Array<Transaction>;
  isLoading: boolean;
  addTransaction: (transaction: Transaction) => void;
  removeTransaction: (id: string) => void;
  updateTransaction: (transaction: Transaction) => void;
  setIsLoading: (label: boolean) => void;
}

