import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from './themecontext'


export function ThemeButton() {
  const {theme, changeTheme} = useTheme();
  function toggler() {
    changeTheme();
  }
  return(
    <button onClick={toggler}>
        <FontAwesomeIcon icon={theme == 'light' ? faSun : faMoon} className='border border-borderColor  rounded-md py-4 px-8 text-fgColor' />
      </button>
  )
}