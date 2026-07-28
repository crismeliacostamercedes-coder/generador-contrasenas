interface PasswordDisplayProps {
  password: string;
}

export function PasswordDisplay({ password }: PasswordDisplayProps) {
  function handleCopy() {
    if (!password) return;
    navigator.clipboard.writeText(password);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1e1e2e",
        border: "1px solid #313244",
        borderRadius: "8px",
        padding: "16px 20px",
        marginBottom: "20px",
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          fontSize: "1.2rem",
          color: "#cdd6f4",
          wordBreak: "break-all",
        }}
      >
        {password || "Genera una contraseña"}
      </span>
      <button
        onClick={handleCopy}
        style={{
          backgroundColor: "#313244",
          color: "#cdd6f4",
          border: "none",
          borderRadius: "6px",
          padding: "8px 14px",
          cursor: "pointer",
          marginLeft: "12px",
        }}
      >
        Copiar
      </button>
    </div>
  );
}