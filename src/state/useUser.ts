import { create } from "zustand";
import type { User, UserState } from "./stateTypes";
import { initialState } from "../constants/user";

const useUserState = create<UserState>()((set) => ({
  user: initialState,
  users: [],
  isLoading: false,
  getUsers: (users: Array<User>) => set({ users }),
  signUp: (user: User) => set({ user }),
  signIn: (user: User) => set({ user }),
  signOut: () => set({ user: initialState }),
  updateAccount: (userData: User) =>
    set((state) => ({ user: { ...state.user, ...userData } })),
  deleteAccount: (id: string) =>
    set((state) => ({ users: state.users.filter((user) => user._id !== id) })),
  setIsLoading: (label: boolean) => set({ isLoading: label }),
}));

export default useUserState;
