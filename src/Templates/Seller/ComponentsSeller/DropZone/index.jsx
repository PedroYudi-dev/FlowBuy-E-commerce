// import
import { Download } from "lucide-react";
import "./style.css"
import { useDropzone } from "react-dropzone";


export default function DropzoneBox({ onDrop }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      <Download className="upload-icon" />
      <p>{isDragActive ? "Solte aqui..." : "Adicionar"}</p>
    </div>
  );
}