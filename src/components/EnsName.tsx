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
  const { data, isError, isLoading } = useEnsName({
    address: address,
  });
  if (isLoading) return null;
  if (!data || isLoading || isError) {
    return (
      <Address truncate={truncate} address={address} className={classes} />
    );
  }
  return <span className={classes}>{data}</span>;
};

export default EnsName;
