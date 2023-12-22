export default function Image({src,...rest}) {

    src = src && src.includes('http://')
      ? src
      : 'http://localhost:4000/'+src;
    return (
      <img {...rest} src={src} alt={'image'} />
    );
  }