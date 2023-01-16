import * as React from 'react';
import classNames from 'clsx';
import { useAccount } from 'wagmi';
import Address from './Address';

interface WalletAddressProps {
  className?: string;
  classNameAddress?: string;
  truncate: boolean;
  isLink?: boolean;
  styled?: boolean;
}

export const WalletAddress = ({
  className,
  classNameAddress,
  truncate,
  isLink,
  styled,
}: WalletAddressProps) => {
  const classes = classNames('WalletAddress', className, {styled});
  const { address, isConnected } = useAccount();
  if (!isConnected) return null;
  return (
    <span className={classes}>
      <Address className={classNameAddress} address={address} truncate={truncate} isLink={isLink} />
    </span>
  );
};

WalletAddress.defaultProps = {
  truncate: false,
};

export default WalletAddress;
