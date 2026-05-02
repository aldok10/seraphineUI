/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        ph: {
          bg: '#ffffff',
          'bg-alt': '#f3f4ef',
          surface: '#eeefe9',
          'bg-dark': '#1d1f27',
          'surface-dark': '#2c2e36',
          text: '#000000',
          'text-muted': '#5f5e5b',
          'text-dim': '#8a8980',
          border: '#d0d1c9',
          'border-strong': '#b6b6ad',
          accent: '#1d4aff',
          'accent-hover': '#1639cc',
          warning: '#f9bd2b',
          success: '#29dbbb',
          danger: '#db3707',
          'chart-1': '#1d4aff',
          'chart-2': '#f9bd2b',
          'chart-3': '#29dbbb',
          'chart-4': '#db3707',
          'chart-5': '#621da6',
          'chart-6': '#ff9d3a',
          'chart-7': '#36a2eb',
          'chart-8': '#6a3700',
        }
      },
      fontFamily: {
        sans: ['Matter', 'Inter', 'sans-serif'],
        mono: ['Matter Mono', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'ph': '6px',
      },
      boxShadow: {
        'ph-modal': '0 8px 24px rgba(0,0,0,0.12)',
      },
      letterSpacing: {
        'ph-tight': '-0.015em',
      }
    },
  },
  plugins: [],
}
