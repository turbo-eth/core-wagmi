import * as React from 'react';
import classNames from 'classnames';
import { useAccount } from 'wagmi';
import Address from './Address';

interface WalletAddressProps {
  className?: string;
  msg?: string;
  msgActive: boolean;
  truncate: boolean;
}

export const WalletAddress = ({
  className,
  truncate,
  msg,
  msgActive,
}: WalletAddressProps) => {
  const classes = classNames(className, 'WalletAddress');
  const { address, isConnected } = useAccount();
  if (!isConnected && !msgActive) return null;
  if (!isConnected && msgActive)
    return <span className={className}>{msg}</span>;
  return (
    <div className={classes}>
      <Address address={address} truncate={truncate} />{' '}
    </div>
  );
};

WalletAddress.defaultProps = {
  msg: 'Connect Wallet',
  msgActive: false,
  truncate: false,
};

export default WalletAddress;
