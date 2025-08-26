/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAINTENANCE: string; // "true" | "false"
  // agrega aquí otros VITE_* si usás (e.g., VITE_API_URL)
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

