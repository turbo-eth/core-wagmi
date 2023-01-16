import * as React from 'react';
import classNames from 'clsx';
import { useBalance } from 'wagmi';

interface BalanceProps {
  className?: string;
  address: `0x${string}`;
  styled?: boolean;
}

export const Balance = ({ className, styled, address }: BalanceProps) => {
  const classes = classNames('Balance', {styled}, className);
  const { data, isLoading, isError } = useBalance({
    address: address,
  });

  if (!data?.value || isLoading || isError) return null;
  return (
    <span className={classes}>
      {data?.value.div(1e4).toString()} {data?.symbol}
    </span>
  );
};

export default Balance;
