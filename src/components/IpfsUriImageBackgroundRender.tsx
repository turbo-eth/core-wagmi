import * as React from 'react';
import classNames from 'classnames';

interface IpfsUriImageBackgroundRenderProps {
  className?: string;
  uri: string;
}

export const IpfsUriImageBackgroundRender = ({
  className,
  uri,
}: IpfsUriImageBackgroundRenderProps) => {
  const classes = classNames(className, 'IpfsUriImageBackgroundRender');

  const [imgSrc, setImageSrc] = React.useState<any>('');
  React.useEffect(() => {
    if (uri) {
      setImageSrc(uri.replace('ipfs://', 'https://ipfs.io/ipfs/'));
    }
  }, [uri]);
  return (
    <span className={classes} style={{ position: 'relative' }}>
      <div
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%',
        }}
      />
    </span>
  );
};

export default IpfsUriImageBackgroundRender;
