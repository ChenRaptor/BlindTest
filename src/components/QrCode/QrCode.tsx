import QRCode from 'react-qr-code';

function SocketQRCode() {
  // Générez les données que vous souhaitez encoder dans le QR code (par exemple, l'URL du socket)
  const socketURL = "https://www.amazon.fr/8559";

  return (
    <div>
      {/* Utilisez le composant QRCode pour générer le QR code */}
      <QRCode value={socketURL} />
    </div>
  );
}

export default SocketQRCode;