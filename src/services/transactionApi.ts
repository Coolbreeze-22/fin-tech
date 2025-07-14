import { PRIVATEAPI } from "./api";

export const getTransactions = () => PRIVATEAPI.get("/transaction");
export const getUserTransactions = () => PRIVATEAPI.get("/transaction/user");
export const createTransaction = (formData: any) =>
  PRIVATEAPI.post("/transaction/create", formData);
export const updateTransaction = (updatedPost: any) =>
  PRIVATEAPI.patch("/transaction/update", updatedPost);
export const deleteTransaction = (id: string) =>
  PRIVATEAPI.delete(`/transaction/delete/${id}`);
