import * as React from 'react';
import classNames from 'clsx';
import { useBlockNumber } from 'wagmi';

interface BlockNumberProps {
  className?: string;
  styled?: boolean;
}

export const BlockNumber = ({ className, styled }: BlockNumberProps) => {
  const classes = classNames('BlockNumber', { styled }, className);
  const { data, isSuccess } = useBlockNumber();

  if (!data || !isSuccess) return <span className={classes}>0</span>;
  return <span className={classes}>{String(data)}</span>;
};
