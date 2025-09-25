import React, { useState } from "react";

export default function ImageUploader() {

  // preview guarda la URL de la imagen para vista previa, error guarda mensajes de error de validación. Al comienzo la imagen es nula porq no se cargo nada 
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  // se ejecuta cada vez que el usuario selecciona un archivo.

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validar que sea una imagen con File API
    if (!file.type.startsWith("image/")) {
      setError("El archivo seleccionado no es una imagen.");
      setPreview(null);
      return;
    }

    setError("");
    setPreview(URL.createObjectURL(file));
  };


  // renderizado del componente en pantalla

  return (
    <div style={{
      background: "white",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 8px 15px rgba(216, 191, 191, 0.83)",
      margin: "20px 0",
      maxWidth: "500px"
    }}>
      <h2 style={{
        color: "#3252e1ff",
        marginBottom: "20px",
        fontSize: "24px"
      }}>📷 Subir Imagen</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{
          padding: "5px",
          border: "2px solid #adb8ecff",
          borderRadius: "10px",
          background: "#f8f9ff",
          width: "100%",
          marginBottom: "15px",
          cursor: "pointer"
        }}
      />

      {error && (
        <p style={{
          color: "#e74c3c",
          background: "#ffeaea",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #e74c3c"
        }}>{error}</p>
      )}

      {preview && (
        <div style={{
          marginTop: "20px",
          textAlign: "center"
        }}>
          <h3 style={{
            color: "#2ecc71",
            marginBottom: "15px"
          }}>✅ Vista previa:</h3>
          <img
            src={preview}
            alt="preview"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
            }}
          />
        </div>
      )}
    </div>
  );
}
