import { create } from "zustand";
import type { Transaction, TransactionState } from "./stateTypes";

const useTransactionState = create<TransactionState>()((set) => ({
  transactions: [],
  addTransaction: (transaction: Transaction) =>
    set((state) => ({ transactions: [...state.transactions, transaction] })),
  removeTransaction: (id: string) =>
    set((state) => ({
      transactions: state.transactions.filter(
        (transaction) => transaction.id !== id
      ),
    })),
  isLoading: false,
  setIsLoading: (label: boolean) => set({ isLoading: label }),
}));

export default useTransactionState;
