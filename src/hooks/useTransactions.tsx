import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  removeTransaction: (id: number) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  },[]);

  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', transactionInput);
    const { transaction } = response.data;
    const newTransactions = [
      ...transactions
      , transaction
    ];

    setTransactions(newTransactions);
    saveTransactionsDb(newTransactions);
  }

  async function removeTransaction(id: number){
    await api.delete(`/transactions/${id}`);
    const newTransactions = transactions.filter(el => el.id !== id);

    setTransactions(newTransactions);
    saveTransactionsDb(newTransactions);
  }

  function saveTransactionsDb(transactions: Transaction[]){
    localStorage.setItem('@dtmoney:transactions', JSON.stringify(transactions));
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction, removeTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}