import * as React from 'react';
import classNames from 'clsx';
import { useSigner } from 'wagmi';

interface WalletNonceProps {
  className?: string;
  styled?: boolean;
}

export const WalletNonce = ({ className, styled }: WalletNonceProps) => {
  const classes = classNames(className, 'WalletNonce', { styled });
  const { data: signer, isSuccess } = useSigner();
  const [nonce, setNonce] = React.useState<number>(0);
  React.useEffect(() => {
    (async () => {
      if (signer) {
        const nonce = await signer.getTransactionCount();
        setNonce(nonce);
      }
    })();
  }, [isSuccess, signer]);
  return <span className={classes}>{nonce}</span>;
};
