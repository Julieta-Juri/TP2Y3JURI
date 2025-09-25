import FileUploader from "../FileUploader";

function Home() {
  return (
    <div style={{
      padding: "20px",
      minHeight: "80vh"
    }}>
      <div style={{
        textAlign: "center",
        marginBottom: "30px"
      }}>
        <h1 style={{
          fontSize: "36px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "10px"
        }}>🚀 Página Principal</h1>
        <p style={{
          color: "#666",
          fontSize: "18px"
        }}>Bienvenido a tu aplicación de carga de imágenes</p>
      </div>
      <FileUploader />
    </div>
  );
}

export default Home;