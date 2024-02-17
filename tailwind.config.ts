import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
      height:{
        "window":'calc(100vh - 120px)'
      },
      container:{
        center:true,
      
      },
      colors:{
        'app-beige':'#FFF1D8',
        primary:{
          'DEFAULT':"#F2555A",
        }
      },

      fontFamily: {
        'syne': ['var(--font-syne)']
      }

    },
  },
  plugins: [

  ],
};
export default config;
