/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                       // основной html-файл
    "./src/**/*.{js,jsx,ts,tsx}",         // все js/jsx/ts/tsx файлы внутри src
    // если будут другие места с классами — добавляй сюда
    // например: "./public/**/*.html"
  ],
  theme: {
    extend: {
      // здесь можно расширять тему: цвета, шрифты, отступы и т.д.
      // пример:
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    // сюда можно подключать плагины, например typography
    // require('@tailwindcss/typography'),
  ],
}