/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './preview/**/*.{html,js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx,svelte,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // Logo-calibrated Cobalt & Azure Universe
        cobalt: {
          50: '#edf2ff',
          100: '#c2d2fc',
          200: '#7a9cf5',
          300: '#426fe4',
          400: '#2b55c4',
          500: '#22439c', // Core Brand Cobalt
          600: '#1b2d5c',
          700: '#162347',
          800: '#101a36',
          850: '#0c1328',
          900: '#070b19', // Primary Base Canvas
          950: '#040711',
        },
        azure: {
          50: '#f3f8ff',
          100: '#e0eeff',
          200: '#b5d5ff',
          300: '#85b8ff',
          400: '#599eff',
          500: '#3287ff', // Electric Azure Wing
          600: '#1d65d9',
          700: '#14499e',
          900: '#0c2b5e',
        },
        // Semantic token bindings
        brand: {
          primary: 'var(--color-brand-primary)',
          accent: 'var(--color-brand-accent)',
          highlight: 'var(--color-brand-highlight)',
          glow: 'var(--color-brand-glow)',
        },
        canvas: {
          base: 'var(--color-bg-base)',
          surface: 'var(--color-bg-surface)',
          raised: 'var(--color-bg-raised)',
          overlay: 'var(--color-bg-overlay)',
        },
        hairline: 'var(--color-border-hairline)',
        // Formance Design System Dynamic Semantic Tokens
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'muted-foreground': 'var(--muted-foreground)',
        'card-background': 'var(--card-background)',
        'card-foreground': 'var(--card-foreground)',
        'card-muted-foreground': 'var(--card-muted-foreground)',
        'card-element-background': 'var(--card-element-background)',
        'card-element-foreground': 'var(--card-element-foreground)',
        'eyebrow-background': 'var(--eyebrow-background)',
        'eyebrow-foreground': 'var(--eyebrow-foreground)',
        'icon-background': 'var(--icon-background)',
        'icon-foreground': 'var(--icon-foreground)',
        'button-background': 'var(--button-background)',
        'button-foreground': 'var(--button-foreground)',
        'button-hover-background': 'var(--button-hover-background)',
        'grid-line': 'var(--grid-line-color)',
      },
      spacing: {
        'gu-0.25': 'calc(var(--grid-unit) * 0.25)',
        'gu-0.5': 'calc(var(--grid-unit) * 0.5)',
        'gu-0.75': 'calc(var(--grid-unit) * 0.75)',
        '1gu': 'var(--grid-unit)',
        '1.5gu': 'calc(var(--grid-unit) * 1.5)',
        '2gu': 'calc(var(--grid-unit) * 2)',
        '2.5gu': 'calc(var(--grid-unit) * 2.5)',
        '3gu': 'calc(var(--grid-unit) * 3)',
        '4gu': 'calc(var(--grid-unit) * 4)',
        '5gu': 'calc(var(--grid-unit) * 5)',
        '6gu': 'calc(var(--grid-unit) * 6)',
        '8gu': 'calc(var(--grid-unit) * 8)',
        '12gu': 'calc(var(--grid-unit) * 12)',
        '16gu': 'calc(var(--grid-unit) * 16)',
        '30gu': 'calc(var(--grid-unit) * 30)',
        '40gu': 'calc(var(--grid-unit) * 40)',
        '50gu': 'calc(var(--grid-unit) * 50)',
      },
      fontFamily: {
        sans: ['Geist Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Geist Mono', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: {
        '30gu': 'calc(var(--grid-unit) * 30)',
        '40gu': 'calc(var(--grid-unit) * 40)',
        '50gu': 'calc(var(--grid-unit) * 50)',
        '60gu': 'calc(var(--grid-unit) * 60)',
      },
      height: {
        'header': 'var(--header-h)',
        'banner': 'var(--banner-h)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
