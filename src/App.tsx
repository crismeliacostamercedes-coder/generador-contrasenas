import { usePasswordGenerator } from "./hooks/usePasswordGenerator";
import { PasswordDisplay } from "./components/PasswordDisplay";
import { PasswordOptions } from "./components/PasswordOptions";
import { GenerateButton } from "./components/GenerateButton";

function App() {
  const { password, options, generatePassword, updateOptions } =
    usePasswordGenerator();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#11111b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <h1
          style={{
            color: "#cdd6f4",
            textAlign: "center",
            marginBottom: "24px",
            fontSize: "1.6rem",
          }}
        >
          Generador de Contraseñas
        </h1>

        <PasswordDisplay password={password} />
        <PasswordOptions options={options} onChange={updateOptions} />
        <GenerateButton onGenerate={generatePassword} />
      </div>
    </div>
  );
}

export default App;