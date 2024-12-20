/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Any custom theme extensions
    },
  },
  daisyui: {
    themes: [
      {
        dark: { // Make sure dark theme is the first in the array to make it default
          primary: '#2563eb',
          secondary: '#64748b',
          accent: '#1f2937',
          neutral: '#1f2937',
          'base-100': '#1f2937', // Background color for dark mode
          'base-content': '#f3f4f6', // Text color for dark mode
          info: '#3b82f6',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          '--slug-yellow': '#FFD700',
        },
        mytheme: {
          primary: '#2563eb',
          secondary: '#64748b',
          accent: '#1f2937',
          neutral: '#f3f4f6',
          'base-100': '#ffffff', // Background color for light mode
          'base-content': '#1f2937', // Text color for light mode
          info: '#3b82f6',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          '--slug-yellow': '#FFD700',
        },
      }
    ],
  },
  plugins: [require('daisyui')],
};
