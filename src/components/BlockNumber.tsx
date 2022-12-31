import * as React from 'react';
import classNames from 'classnames';
import { useBlockNumber } from 'wagmi';

interface BlockNumberProps {
  className?: string;
}

export const BlockNumber = ({ className }: BlockNumberProps) => {
  const classes = classNames(className, 'BlockNumber');
  const { data, isError, isLoading } = useBlockNumber();

  if (isLoading || isError) return null;
  return <span className={classes}>{data}</span>;
};

export default BlockNumber;
