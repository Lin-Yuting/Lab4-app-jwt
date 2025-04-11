import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      alert("Inicio de sesión exitoso");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f3f4f6",
      padding: "1rem",
      boxSizing: "border-box",
      overflowX: "hidden",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        boxSizing: "border-box",
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center" }}>
          Inicia Sesión
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", color: "#374151", fontWeight: "500" }}>
              Email <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                borderRadius: "9999px",
                border: "1px solid #e5e7eb",
                backgroundColor: "#f9fafb",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", color: "#374151", fontWeight: "500" }}>
              Contraseña <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                borderRadius: "9999px",
                border: "1px solid #e5e7eb",
                backgroundColor: "#f9fafb",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "#8b5cf6",
              color: "#fff",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              marginTop: "1rem",
              boxSizing: "border-box",
            }}
          >
            Iniciar Sesión
          </button>

          {error && (
            <p style={{
              textAlign: "center",
              color: "#ef4444",
              fontWeight: "bold",
              marginTop: "1rem"
            }}>
              {error}
            </p>
          )}
        </form>

        <p style={{
          marginTop: "1.5rem",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#6b7280"
        }}>
          ¿No tienes una cuenta?{" "}
          <span style={{
            color: "#8b5cf6",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;