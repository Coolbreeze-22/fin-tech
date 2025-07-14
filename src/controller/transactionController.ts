import * as api from "../services/transactionApi";

// Action Creators
export const getTransactions = async () => {
  try {
    const { data } = await api.getTransactions();
  } catch (error) {}
};
export const getUserTransactions = async () => {
  try {
    const { data } = await api.getUserTransactions();
  } catch (error) {}
};
