import * as React from 'react';
import classNames from 'clsx';
import { useAccount, usePublicClient } from 'wagmi';

interface WalletNonceProps {
  className?: string;
  styled?: boolean;
}

export const WalletNonce = ({ className, styled }: WalletNonceProps) => {
  const classes = classNames(className, 'WalletNonce', { styled });
  const publicClient = usePublicClient();
  const { address } = useAccount();
  const [nonce, setNonce] = React.useState<number>(0);
  React.useEffect(() => {
    (async () => {
      if (publicClient && address) {
        const nonce = await publicClient.getTransactionCount({
          address,
        });
        setNonce(nonce);
      }
    })();
  }, [publicClient, address]);
  return <span className={classes}>{nonce}</span>;
};
