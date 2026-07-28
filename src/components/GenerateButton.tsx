interface GenerateButtonProps {
  onGenerate: () => void;
}

export function GenerateButton({ onGenerate }: GenerateButtonProps) {
  return (
    <button
      onClick={onGenerate}
      style={{
        width: "100%",
        backgroundColor: "#89b4fa",
        color: "#1e1e2e",
        border: "none",
        borderRadius: "8px",
        padding: "14px",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Generar contraseña
    </button>
  );
}