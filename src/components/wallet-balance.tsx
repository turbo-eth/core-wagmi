import * as React from 'react';
import classNames from 'clsx';
import { useAccount, useBalance } from 'wagmi';
import { trimFormattedBalance } from '../utils/trimFormattedBalance';

interface WalletBalanceProps {
  className?: string;
  decimals?: number;
  tokenAddress?: `0x${string}`;
}

export const WalletBalance = ({
  className,
  decimals = 4,
  tokenAddress,
}: WalletBalanceProps) => {
  const classes = classNames('WalletBalance', className);

  const { address, isConnected } = useAccount();
  const { data, isSuccess } = useBalance({
    address: address,
    token: tokenAddress,
  });

  if (!isConnected || !isSuccess) return null;
  return (
    <span className={classes}>
      {trimFormattedBalance(data?.formatted, decimals)}
    </span>
  );
};
