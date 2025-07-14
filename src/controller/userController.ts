import * as api from "../services/userApi";
import { useEffect } from "react";
import type { NavigateFunction } from "react-router-dom";
import useUserState from "../state/useUser";
import { toastNotification } from "../components/utils/toastNotification";
import type {
  SignUpData,
  SignInData,
  UpdateAccountData,
  ResetPasswordData,
} from "../state/stateTypes";

interface SignUpProps {
  formData: SignUpData;
  navigate: NavigateFunction;
}
interface SignInProps {
  formData: SignInData;
  navigate: NavigateFunction;
}

interface ForgotPasswordProps {
  email: string;
  navigate: NavigateFunction;
}
interface UpdateAccountProps {
  id: string;
  formData: UpdateAccountData;
}
interface ResetPasswordProps {
  formData: ResetPasswordData;
  navigate: NavigateFunction;
}

export const useGetUsers = async (length: string) => {
  useEffect(() => {
    const getUsers = async () => {
      if (length) {
        return;
      }

      try {
        useUserState.getState().setIsLoading(true);
        const { data } = await api.getUsers();
        useUserState.getState().getUsers(data);
        useUserState.getState().setIsLoading(false);
      } catch (error: any) {
        useUserState.getState().setIsLoading(false);
        toastNotification(error.message, "error");
      }
    };
    getUsers();
  }, []);
};

export const signIn = async (props: SignUpProps) => {
  const { formData, navigate } = props;
  try {
    useUserState.getState().setIsLoading(true);
    const { data } = await api.signIn(formData);
    useUserState.getState().signIn(data);
    useUserState.getState().setIsLoading(false);
    navigate("/");
    return data;
  } catch (error: any) {
    useUserState.getState().setIsLoading(false);
    toastNotification(error.message, "error");
  }
};

export const signUp = async (props: SignInProps) => {
  const { formData, navigate } = props;
  try {
    useUserState.getState().setIsLoading(true);
    const { data } = await api.signUp(formData);
    useUserState.getState().signUp(data);
    useUserState.getState().setIsLoading(false);
    navigate("/");
    return data;
  } catch (error: any) {
    toastNotification(error.message, "error");
    useUserState.getState().setIsLoading(false);
  }
};

export const signOut = async (navigate: NavigateFunction) => {
  try {
    useUserState.getState().setIsLoading(true);
    await api.signOut();
    useUserState.getState().signOut();
    useUserState.getState().setIsLoading(false);
    navigate("/login");
  } catch (error: any) {
    toastNotification(error.message, "error");
    useUserState.getState().setIsLoading(false);
  }
};

export const updateAccount = async (props: UpdateAccountProps) => {
  const { id, formData } = props;
  try {
    useUserState.getState().setIsLoading(true);
    const { data } = await api.updateAccount(id, formData);
    useUserState.getState().updateAccount(data);
    useUserState.getState().setIsLoading(false);
    toastNotification("Account updated successfully", "success");
    return data;
  } catch (error: any) {
    useUserState.getState().setIsLoading(false);
    toastNotification(error.message, "error");
  }
};

export const deleteAccount = async (id: string) => {
  try {
    useUserState.getState().setIsLoading(true);
    const { data } = await api.deleteAccount(id);
    useUserState.getState().deleteAccount(id);
    useUserState.getState().setIsLoading(false);
    toastNotification(data.message, "success");
  } catch (error: any) {
    useUserState.getState().setIsLoading(false);
    toastNotification(error.message, "error");
  }
};

export const forgotPassword = async (props: ForgotPasswordProps) => {
  const { email, navigate } = props;
  try {
    useUserState.getState().setIsLoading(true);
    const { data } = await api.forgotPassword(email);
    useUserState.getState().setIsLoading(false);
    toastNotification(data.message, "success");
    navigate("/auth/reset-password");
  } catch (error: any) {
    useUserState.getState().setIsLoading(false);
    toastNotification(error.message, "error");
  }
};

export const resetPassword = async (props: ResetPasswordProps) => {
  const { formData, navigate } = props;
  try {
    useUserState.getState().setIsLoading(true);
    const { data } = await api.resetPassword(formData);
    useUserState.getState().setIsLoading(false);
    toastNotification(data.message, "success");
    navigate("/login");
  } catch (error: any) {
    useUserState.getState().setIsLoading(false);
    toastNotification(error.message, "error");
  }
};
