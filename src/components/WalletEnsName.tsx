import * as React from 'react';
import classNames from 'classnames';
import { useAccount, useEnsName } from 'wagmi';

interface WalletEnsNameProps {
  className?: string;
  msg?: string;
  msgActive: boolean;
}

export const WalletEnsName = ({
  className,
  msg,
  msgActive,
}: WalletEnsNameProps) => {
  const classes = classNames(className, 'WalletEnsName');
  const { address, isConnected } = useAccount();
  const { data: dataEnsName } = useEnsName({
    address: address,
  });
  if (!isConnected && !msgActive) return null;
  if (!isConnected && msgActive)
    return <span className={className}>{msg}</span>;
  return <span className={classes}>{dataEnsName}</span>;
};

WalletEnsName.defaultProps = {
  msg: 'Connect Wallet',
  msgActive: false,
  truncate: false,
};

export default WalletEnsName;
