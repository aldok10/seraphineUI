/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      fontFamily: {
        'os': ['"Space Grotesk"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        os: {
          bg: '#E5E5E5',
          window: '#FFFFFF',
          border: '#000000',
          titlebar: '#C0C0C0',
          accent: '#FF3366',
        }
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
