import * as React from 'react';
import classNames from 'classnames';
import { useEnsAddress } from 'wagmi';

interface WalletEnsAddressProps {
  className?: string;
  name: string;
  msg?: string;
  msgActive: boolean;
}

export const WalletEnsAddress = ({
  className,
  name,
  msg,
  msgActive,
}: WalletEnsAddressProps) => {
  const classes = classNames(className, 'WalletEnsAddress');
  const {
    data: dataEnsAddress,
    isError,
    isLoading,
  } = useEnsAddress({
    name: name,
  });

  if (isLoading) return null;
  if ((isError || (!isError && !dataEnsAddress)) && !msgActive) return null;
  if ((isError || (!isError && !dataEnsAddress)) && msgActive)
    return <span className={className}>{msg}</span>;
  return <span className={classes}>{dataEnsAddress}</span>;
};

WalletEnsAddress.defaultProps = {
  msg: 'Connect Wallet',
  msgActive: false,
  truncate: false,
};

export default WalletEnsAddress;
