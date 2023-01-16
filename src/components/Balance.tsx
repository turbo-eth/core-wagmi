import * as React from 'react';
import classNames from 'clsx';
import { useBalance } from 'wagmi';
import { trimFormattedBalance } from '../utils/trimFormattedBalance';

interface BalanceProps {
  className?: string;
  address: `0x${string}`;
  decimals?: number;
  styled?: boolean;
}

export const Balance = ({ className, styled, address, decimals }: BalanceProps) => {
  const classes = classNames('Balance', { styled }, className);
  const { data, isSuccess } = useBalance({
    address: address,
  });

  if (!data?.value || !isSuccess) return null;
  return (
    <span className={classes}>
      {trimFormattedBalance(data?.formatted, decimals)}
    </span>
  );
};

export default Balance;
