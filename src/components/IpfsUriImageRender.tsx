import * as React from 'react';
import classNames from 'classnames';

interface IpfsUriImageRenderProps {
  className?: string;
  uri: string;
  alt?: string;
}

export const IpfsUriImageRender = ({
  className,
  uri,
  alt = '',
}: IpfsUriImageRenderProps) => {
  const classes = classNames(className, 'IpfsUriImageRender');

  const [imgSrc, setImageSrc] = React.useState<any>('');
  React.useEffect(() => {
    if (uri) {
      setImageSrc(uri.replace('ipfs://', 'https://ipfs.io/ipfs/'));
    }
  }, [uri]);
  return <img className={classes} src={imgSrc} alt={alt} />;
};

export default IpfsUriImageRender;
