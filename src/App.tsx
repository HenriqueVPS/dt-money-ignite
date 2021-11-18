import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { TransactionsProvider } from './hooks/useTransactions'

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionsModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransactionsModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionsModalOpen(false)
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
     
    </TransactionsProvider>
  );
}
