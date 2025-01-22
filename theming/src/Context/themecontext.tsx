import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({theme: 'light', changeTheme: () => {}});


export function ThemeProvider({children}:{children:React.ReactNode}) {
  const [theme, setTheme] = useState('light');

  useEffect(()=> {
      document.querySelector('html')?.setAttribute('data-theme', theme);
  },[theme])

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}


export function useTheme() {
  const {theme, changeTheme} = useContext(ThemeContext);
  return {theme, changeTheme}
}

