import { ThemeProvider } from './Context/themecontext';
import { ThemeButton } from './Context/themeHandler';

export default function App() {

  return (
    <ThemeProvider>
    <div className='text-3xl text-fgColor flex flex-col gap-4 justify-center items-center h-screen'>
      <h1 className='text-center py-4 px-8 rounded bg-orangeBg'>Theme React + Tailwind</h1>
      <p className='text-fgColor'>Sample text</p>
      <ThemeButton />
    </div>
    </ThemeProvider>
  )
}

