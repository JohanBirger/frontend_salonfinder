declare module 'dotenv' {
    export const config: () => { parsed: Record<string, string> };
  }