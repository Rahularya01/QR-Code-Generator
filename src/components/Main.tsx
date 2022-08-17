import React, { useState } from "react";
import qrCode from "../assets/qr-code.svg";
import Button from "./Button";
import QrCode from "./QrCode";
import Select from "./Select";
import TextField from "./TextField";

const Main = () => {
  const [url, setUrl] = useState("");
  const [select, setSelect] = useState("300");
  const [showQR, setShowQR] = useState(false);

  const generateUrl = () => {
    setShowQR(true);
  };

  return (
    <main>
      <div className="flex flex-col-reverse align-center justify-center p-10 m-auto md:max-w-4xl md:flex-row">
        <div className="w-full md:w-2/3 mr-24">
          <h1 className="text-3xl font-bold mb-5 md:text-4xl">
            QR Code Generator
          </h1>
          <p className="mb-4 text-gray-600">
            QR Codes allows smartphone users to access your website simply and
            quicky.
          </p>
          <p className="text-gray-600">
            Enter your URL below to generate a QR code and download the image.
          </p>

          <div className="mt-4">
            <TextField
              placeholder="Enter your URL"
              value={url}
              type="url"
              onChange={(e) => setUrl(e.target.value)}
            />
            <Select
              value={select}
              onSelect={(e) => setSelect(e.target.value)}
            />
            <Button
              styles="w-full bg-gray-600 hover:bg-black mt-5"
              text="Generate QR Code"
              onClick={generateUrl}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 self-center">
          <img
            src={qrCode}
            alt="QR Code Logo"
            className="w-1/2 m-auto mb-10 md:w-full"
          />
        </div>
      </div>
      {showQR ? <QrCode value={url} size={+select} /> : ''}
    </main>
  );
};

export default Main;
