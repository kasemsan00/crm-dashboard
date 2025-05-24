declare module 'daisyui' {
  import { PluginCreator } from 'tailwindcss/types/config';
  const daisyui: PluginCreator & { themes?: any[] };
  export default daisyui;
}
