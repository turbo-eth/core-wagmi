import * as React from 'react';
import classNames from 'clsx';
import { useBlockNumber } from 'wagmi';

interface BlockNumberProps {
  className?: string;
  styled?: boolean;
}

export const BlockNumber = ({ className, styled }: BlockNumberProps) => {
  const classes = classNames('BlockNumber', {styled}, className);
  const { data, isError, isLoading } = useBlockNumber();

  if (!data || isLoading || isError) return null;
  return <span className={classes}>{data}</span>;
};

export default BlockNumber;
