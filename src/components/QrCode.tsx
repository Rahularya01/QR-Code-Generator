import React from "react";
import Button from "./Button";
import Spinner from "./Spinner";
import QRCode from "react-qr-code";

interface qrProps {
  size: number;
  value: string;
}

const QrCode = ({ size, value }: qrProps) => {
  return (
    <div className="max-w-5xl mb-20 m-auto flex flex-col text-center align-center justify-center mt-20">
      {/* <Spinner /> */}
      <QRCode className="m-auto" value={value} size={size} />
    </div>
  );
};

export default QrCode;
