import React from 'react';
import WalletHeader from './components/WalletHeader';
import WalletTable from './components/WalletTable';
import WalletForm from './components/WalletForm';

function Wallet() {
  return (
    <div>
      <WalletHeader />
      <WalletTable />
      <WalletForm />
    </div>
  );
}

export default Wallet;
