import * as React from 'react';
import classNames from 'clsx';
import { useEnsName } from 'wagmi';
import Address from './Address';

interface EnsNameProps {
  className?: string;
  address: `0x${string}`;
  truncate: boolean;
}

export const EnsName = ({
  className,
  address,
  truncate = false,
}: EnsNameProps) => {
  const classes = classNames(className, 'EnsName');
  const { data, isSuccess } = useEnsName({
    address: address,
  });
  if (!isSuccess) return null;
  if (!data) {
    return (
      <Address truncate={truncate} address={address} className={classes} />
    );
  }
  return <span className={classes}>{data}</span>;
};

export default EnsName;
