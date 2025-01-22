React - Tailwind Theme Changer


## Setup

- First install vite project:
  <code>npm install vite@latest --template react-ts</code>

- Install dependencies:
  <code>npm i</code>

- Add tailwindcss:
  <code>npm install -D tailwindcss</code>

- Initialize tailwind.config.js:
  <code>npx tailwindcss init</code>

- Enter the following inside tailwind.config.css: 
  
    <pre>
    /** @type {import('tailwindcss').Config} */
    export default {
      👉content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {},
        plugins: [],
      }
    };
</pre>

- In `./vite.config.ts` add:
  
  <pre>
  import tailwindcss from 'tailwindcss'
  export default defineConfig({
  plugins: [react()],
  👉css: {
    postcss: {
      plugins: [tailwindcss()],
      },
    }
  })

  </pre>

- Insert in `./src/index.css`:
  
  <pre>
  👉@tailwind base;
  👉@tailwind components;
  👉@tailwind utilities;
  </pre>

> Be sure to check in `./src/main.tsx` that `index.css` is imported


## Set Color theme

- In `./src/index.css` setup css variables on the `:root` element

- In `./tailwind.config.js` fetch that variables (so you can use it on the className attr) in  `theme` 👉 `extend` 👉 `colors`:
  
  <pre>
  theme:{
    colors: {
        propertyName: 'var(--cssVariable)',
        ...
      },
    backgroundImage: {//for bg images, linear-gradients, etc},
    ////....///
    }
  </pre>

## Use Color Theme

- Set initialy on the `root [html]` in `./src/main.tsx`:
  
  <pre>
  const html = document.querySelector('html');
  html?.setAttribute('data-theme', 'light');
  ///////////////or
  html?.classList.add('theme', 'light');
  </pre>

- Configure element and handler that will control theme change.
  
- Use defined properties for different themes from tailwind.config.js as:

    ```
    <div className='text-textColor bg-bgColor'>
      /////....../////////
    </div>
    ```