// Representa las opciones que el usuario puede configurar
// para generar la contraseña
export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}