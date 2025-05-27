/** @type {import('tailwindcss').Config} */

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  
};
export const plugins = [require('@tailwindcss/typography'), require('daisyui')];
export const daisyui = {
  themes: ['winter', 'dracula'],
};
