import { useState } from "react";
import type { PasswordOptions } from "../types/password";

const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBER_CHARS = "0123456789";
const SYMBOL_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export function usePasswordGenerator() {
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState<PasswordOptions>({
    length: 12,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  function generatePassword() {
    let characterPool = LOWERCASE_CHARS;

    if (options.includeUppercase) characterPool += UPPERCASE_CHARS;
    if (options.includeNumbers) characterPool += NUMBER_CHARS;
    if (options.includeSymbols) characterPool += SYMBOL_CHARS;

    let newPassword = "";
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      newPassword += characterPool[randomIndex];
    }

    setPassword(newPassword);
  }

  function updateOptions(newOptions: Partial<PasswordOptions>) {
    setOptions((prev) => ({ ...prev, ...newOptions }));
  }

  return {
    password,
    options,
    generatePassword,
    updateOptions,
  };
}