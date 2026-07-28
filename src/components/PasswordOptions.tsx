import type { PasswordOptions as PasswordOptionsType } from "../types/password";

interface PasswordOptionsProps {
  options: PasswordOptionsType;
  onChange: (newOptions: Partial<PasswordOptionsType>) => void;
}

export function PasswordOptions({ options, onChange }: PasswordOptionsProps) {
  return (
    <div
      style={{
        backgroundColor: "#1e1e2e",
        border: "1px solid #313244",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <label style={{ color: "#cdd6f4", display: "block", marginBottom: "8px" }}>
          Longitud: {options.length}
        </label>
        <input
          type="range"
          min={4}
          max={32}
          value={options.length}
          onChange={(e) => onChange({ length: Number(e.target.value) })}
          style={{ width: "100%" }}
        />
      </div>

      <label style={{ display: "flex", alignItems: "center", color: "#cdd6f4", marginBottom: "10px" }}>
        <input
          type="checkbox"
          checked={options.includeUppercase}
          onChange={(e) => onChange({ includeUppercase: e.target.checked })}
          style={{ marginRight: "10px" }}
        />
        Incluir mayúsculas
      </label>

      <label style={{ display: "flex", alignItems: "center", color: "#cdd6f4", marginBottom: "10px" }}>
        <input
          type="checkbox"
          checked={options.includeNumbers}
          onChange={(e) => onChange({ includeNumbers: e.target.checked })}
          style={{ marginRight: "10px" }}
        />
        Incluir números
      </label>

      <label style={{ display: "flex", alignItems: "center", color: "#cdd6f4" }}>
        <input
          type="checkbox"
          checked={options.includeSymbols}
          onChange={(e) => onChange({ includeSymbols: e.target.checked })}
          style={{ marginRight: "10px" }}
        />
        Incluir símbolos
      </label>
    </div>
  );
}