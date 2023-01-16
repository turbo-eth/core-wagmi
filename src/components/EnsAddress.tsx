import * as React from 'react';
import classNames from 'clsx';
import { useEnsAddress } from 'wagmi';

interface EnsAddressProps {
  className?: string;
  name?: string;
  styled?: boolean;
}

export const EnsAddress = ({
  className,
  name,
  styled
}: EnsAddressProps) => {
  const classes = classNames('EnsAddress', {styled}, className);
  const { data, isError, isLoading } = useEnsAddress({
    name: name,
  });

  if (!data || isLoading || isError) return null;
  return <span className={classes}>{data}</span>;
};

EnsAddress.defaultProps = {
};

export default EnsAddress;
