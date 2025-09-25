import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contacto() {

  // form es el estado que guarda los valores del formulario, setForm es la función para actualizarlo. Usestate esta diciendo que mi estado actual es un objeto con los campos vacios
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  // STATUS guarda mensajes de validación o de éxito/error al enviar el formulario.usestate indica que el estado incial de mi fomrulario es vacio
  const [status, setStatus] = useState("");


  // explicacion: handleChange es una función que se ejecuta cada vez que el usuario escribe en un campo del formulario. Actualiza el estado form con el nuevo valor del campo modificado. e.target.name es el nombre del campo (nombre, email, mensaje) y e.target.name actualiza solo el campo que cambió el user , sin perder los demás.. El operador ...form copia los valores actuales del estado form para no perderlos al actualizar solo un campo.
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
// handleSubmit es una función que se ejecuta cuando el usuario envía el formulario. Primero previene el comportamiento por defecto del formulario (recargar la página). Luego valida que todos los campos estén completos; si no, muestra un mensaje de advertencia. Si todo está bien, usa emailjs para enviar el formulario. Si el envío es exitoso, muestra un mensaje de éxito y limpia el formulario; si hay un error, muestra un mensaje de error.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.mensaje) {
      setStatus("⚠️ Todos los campos son obligatorios");
      return;
    }

    emailjs.send(
        "service_p3xat2f",
  
        "template_aeeu04h",
    form,
    // "YOUR_PUBLIC_KEY"
        "yGthoCh6oDPKXPBEg"
    
    )
    // Si el envío es exitoso, ejecuta la primera función (mensaje de éxito y limpieza del formulario). Si hay un error, ejecuta la segunda función (mensaje de error y log del error en consola).
    .then(
        () => {
          setStatus("✅ Correo enviado correctamente");
          setForm({ nombre: "", email: "", mensaje: "" });
        },
        (err) => {
          console.error(err);
          setStatus("❌ Error al enviar el correo");
        }
      );
  };

  // Esto es lo que se renderiza en pantalla

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "20px" }}>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Dirección de Correo:</label>
          <input
            type="email"
            name="email"
            placeholder="ju@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" id="enviar">Enviar</button>
      </form>

{/* Si status tiene algún valor (no es vacío), se muestra un <p> con el texto del estado. */}
      {status && <p>{status}</p>}
    </div>
  );
}

export default Contacto;
