import * as React from 'react';
import classNames from 'clsx';
import { useAccount, useBalance } from 'wagmi';
import { trimFormattedBalance } from '../utils/trimFormattedBalance';

interface WalletBalanceProps {
  className?: string;
  decimals?: number;
  styled?: boolean;
}

export const WalletBalance = ({
  className,
  decimals,
  styled,
}: WalletBalanceProps) => {
  const classes = classNames('WalletBalance', { styled }, className);

  const { address, isConnected } = useAccount();
  const { data, isSuccess } = useBalance({
    address: address,
  });

  if (!isConnected || !isSuccess) return null;
  return (
    <span className={classes}>
      {trimFormattedBalance(data?.formatted, decimals)}
    </span>
  );
};

WalletBalance.defaultProps = {
  decimals: 4,
  truncate: false,
};

export default WalletBalance;
