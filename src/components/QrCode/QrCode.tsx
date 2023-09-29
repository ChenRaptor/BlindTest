import QRCode from 'react-qr-code';
// import { v4 as uuidv4 } from 'uuid';


function SocketQRCode({url}: {url: string}) {
  // Générez les données que vous souhaitez encoder dans le QR code (par exemple, l'URL du socket)
  // const socketURL = `${process.env.NEXT_PUBLIC_SITE_URL}/room/${uuidv4()}`;

  return (
    <div>
      {/* Utilisez le composant QRCode pour générer le QR code */}
      <QRCode value={url} />
    </div>
  );
}

export default SocketQRCode;