import * as React from 'react';
import classNames from 'clsx';
import truncateAddress from '../utils/truncateAddress';
import { useNetwork } from 'wagmi';

interface AddressProps {
  className?: string;
  address?: `0x${string}`;
  truncate?: boolean;
  isLink?: boolean;
  styled?: boolean;
}

export const Address = ({
  className,
  truncate,
  address,
  isLink,
  styled
}: AddressProps) => {
  const classes = classNames('Address', {styled, isLink}, className);
  const { chain } = useNetwork();
  const newAddress = truncate ? truncateAddress(address) : address;
  const url = chain?.blockExplorers?.default.url + '/address/' + address;
  if (isLink) {
    return (
      <a
        className={classes}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {newAddress}
      </a>
    );
  }
  return <span className={classes}>{address}</span>;
};

export default Address;
