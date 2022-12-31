import * as React from 'react';
import classNames from 'classnames';
import { useAccount, useBalance } from 'wagmi';

interface WalletBalanceProps {
  className?: string;
  msg?: string;
  msgActive: boolean;
}

export const WalletBalance = ({
  className,
  msg,
  msgActive,
}: WalletBalanceProps) => {
  const classes = classNames(className, 'WalletBalance');

  const { address, isConnected } = useAccount();
  const { data } = useBalance({
    address: address,
  });
  if (!isConnected && !msgActive) return null;
  if (!isConnected && msgActive)
    return <span className={className}>{msg}</span>;
  return (
    <span className={classes}>
      {data?.formatted} {data?.symbol}
    </span>
  );
};

WalletBalance.defaultProps = {
  msg: 'Connect Wallet',
  msgActive: false,
  truncate: false,
};

export default WalletBalance;
