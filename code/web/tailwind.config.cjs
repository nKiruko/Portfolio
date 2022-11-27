/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", defaultTheme.fontFamily.sans],
        heading: ["Nunito", defaultTheme.fontFamily.sans],
      },
      colors: {
        "darkbase": "#07050a",
      },
      keyframes: {
        dog: {
          '0%, 100%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(10deg)' },
        },
        dogTail: {
          '0%, 100%': { transform: 'scalex(1)' },
          '50%': { transform: 'scalex(0.9)' },
        },
        dogEar: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'dog 1s ease-in-out infinite',
        wiggle1: 'dogTail 1.5s ease-in-out infinite ',
        wiggle2: 'dogEar 2s ease-in-out infinite ',
      },
      backgroundImage: {
        'stars': "url('/static/stars.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [      
      {
        mytheme: {
            "primary": "#7432fa",    
            "secondary": "#fab632",     
            "accent": "#afe0ff",    
            "neutral": "#f3f0fa",    
            "base-100": "#0a060e", 
            "info": "#1157EE",  
            "success": "#38E5C8",    
            "warning": "#EF963E",     
            "error": "#F3574F",
        },
      },
    ],
  },
}
