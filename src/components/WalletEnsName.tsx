import * as React from 'react';
import classNames from 'clsx';
import { useAccount, useEnsName } from 'wagmi';

interface WalletEnsNameProps {
  className?: string;
  styled?: boolean;
}

export const WalletEnsName = ({ className, styled }: WalletEnsNameProps) => {
  const classes = classNames('WalletEnsName', { styled }, className);
  const { address, isConnected } = useAccount();
  const { data, isSuccess } = useEnsName({
    address: address,
  });

  if (!isConnected || !data || !isSuccess) return null;
  return <span className={classes}>{data}</span>;
};

export default WalletEnsName;
