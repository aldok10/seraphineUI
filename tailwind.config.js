/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-inset': 'inset 2px 2px 0px 0px rgba(0,0,0,1)',
      },
      fontFamily: {
        'os': ['"Space Grotesk"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        os: {
          bg: '#C0C0C0', // Classic Windows 95 Grey
          window: '#FFFFFF',
          border: '#000000',
          titlebar: '#000080', // Classic Blue Titlebar
          accent: '#FF3366', // Modern Neo-brutalist pop
        }
      },
      borderWidth: {
        '3': '3px',
      },
      cursor: {
        'os-default': 'url(/cursors/default.png), default',
        'os-pointer': 'url(/cursors/pointer.png), pointer',
      }
    },
  },
  plugins: [],
}
