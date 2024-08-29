import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import styles
import { withdrawToken } from '@/services/token.service';
import { TxStatus } from './TxStatus';
import { useWallet } from '@alephium/web3-react';
import { node } from '@alephium/web3';
import { TokenFaucetConfig } from '@/services/utils';

export const TokenDapp: React.FC<{ config: TokenFaucetConfig }> = ({ config }) => {
  const { signer, account } = useWallet();
  const addressGroup = config.groupIndex;
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [ongoingTxId, setOngoingTxId] = useState<string>();
  const [cryptoPrice, setCryptoPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchCryptoPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=alephium,bitcoin,ethereum&vs_currencies=usd'
        );
        setCryptoPrice(response.data.alephium.usd);
      } catch (error) {
        console.error('Error fetching crypto price:', error);
      }
    };

    fetchCryptoPrice();
    const interval = setInterval(fetchCryptoPrice, 60000); // Fetch price every 60 seconds

    return () => clearInterval(interval);
  }, []);

  const handleWithdrawSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signer) {
      try {
        const result = await withdrawToken(signer, withdrawAmount, config.faucetTokenId);
        setOngoingTxId(result.txId);
        toast.success('Withdrawal successful!'); // Notify on success
      } catch (error) {
        toast.error('Error during withdrawal.'); // Notify on error
      }
    }
  };

  const txStatusCallback = useCallback(
    async (status: node.TxStatus, numberOfChecks: number): Promise<any> => {
      if (
        (status.type === 'Confirmed' && numberOfChecks > 2) ||
        (status.type === 'TxNotFound' && numberOfChecks > 3)
      ) {
        setOngoingTxId(undefined);
        if (status.type === 'Confirmed') {
          toast.success('Transaction confirmed!');
        } else {
          toast.error('Transaction not found.');
        }
      }
      return Promise.resolve();
    },
    [setOngoingTxId]
  );

  return (
    <div>
      <div>
        <div>
          <h2>AZNET Alephium Fund</h2>
          <p>Network: {config.network}</p>

          <div>
            <p><strong>Public Key:</strong> {account?.publicKey ?? '???'}</p>
            <p><strong>Group Index:</strong> {addressGroup}</p>
            <p><strong>Token ID:</strong> {config.faucetTokenId}</p>
          </div>

          {cryptoPrice !== null && (
            <div>
              <p><strong>Alephium Price:</strong> ${cryptoPrice}</p>
            </div>
          )}

          <form onSubmit={handleWithdrawSubmit}>
            <div>
              <input
                type="number"
                id="withdraw-amount"
                name="amount"
                max="20"
                min="1"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              
                placeholder="Amount"
              />
            </div>
            <button type="submit" disabled={!!ongoingTxId}>
              Confirm The Transaction 
            </button>
          </form>

          {ongoingTxId && <TxStatus txId={ongoingTxId} txStatusCallback={txStatusCallback} />}
        </div>
      </div>

      

      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
};

export default TokenDapp;