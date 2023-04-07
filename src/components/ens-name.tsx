import * as React from 'react';
import classNames from 'clsx';
import { useEnsName } from 'wagmi';
import { Address } from './address';

interface EnsNameProps {
  className?: string;
  address: `0x${string}`;
  truncate: boolean;
  chainId?: number;
}

export const EnsName = ({
  className,
  address,
  truncate = false,
  chainId = 1,
}: EnsNameProps) => {
  const classes = classNames(className, 'EnsName');
  const { data, isSuccess } = useEnsName({
    address: address,
    chainId: chainId,
  });
  if (!isSuccess) return null;
  if (!data) {
    return (
      <Address truncate={truncate} address={address} className={classes} />
    );
  }
  return <span className={classes}>{data}</span>;
};
