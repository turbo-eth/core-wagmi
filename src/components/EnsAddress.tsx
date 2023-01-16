import * as React from 'react';
import classNames from 'clsx';
import { useEnsAddress } from 'wagmi';

interface EnsAddressProps {
  className?: string;
  name?: string;
  styled?: boolean;
}

export const EnsAddress = ({ className, name, styled }: EnsAddressProps) => {
  const classes = classNames('EnsAddress', { styled }, className);
  const { data, isSuccess } = useEnsAddress({
    name: name,
  });

  if (!data || !isSuccess) return null;
  return <span className={classes}>{data}</span>;
};

export default EnsAddress;
