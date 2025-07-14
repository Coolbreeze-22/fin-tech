import { PRIVATEAPI, PUBLICAPI } from "./api";
import type { SignInData, SignUpData, VerifyEmailData, CompleteSignUpData, UpdateAccountData, ResetPasswordData } from "../state/stateTypes";

export const getUsers = () => PRIVATEAPI.get("/user");
export const signUp = (formData: SignUpData) =>  PUBLICAPI.post("/user/signup", formData);
export const sendVerificationToken = (email: string) =>  PUBLICAPI.post("/user/send-token", {email});
export const verifyEmail = (formData: VerifyEmailData) =>  PUBLICAPI.patch("/user/verify-email", formData);
export const completeSignUp = (formData: CompleteSignUpData) =>  PUBLICAPI.patch("/user/complete-signUp", formData);
export const signIn = (formData: SignInData) =>  PUBLICAPI.patch("/user/signin", formData);
export const signOut = () => PUBLICAPI.patch("/user/signout");
export const forgotPassword = async (email: string) =>  PUBLICAPI.patch("user/forgot-password", { email });
export const resetPassword = async (formData: ResetPasswordData) =>  PUBLICAPI.patch('user/reset-password/', formData);
export const updateAccount = (id: string, formData: UpdateAccountData) =>  PRIVATEAPI.patch(`/user/update-account/${id}`, formData);
export const deleteAccount = (id: string) =>  PRIVATEAPI.delete(`/user/delete-account/${id}`);
