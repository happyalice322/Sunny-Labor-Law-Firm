/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_FORM_ID?: string;
  readonly VITE_FORMSPREE_ENDPOINT?: string;
  readonly GEMINI_API_KEY?: string;
  readonly APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
