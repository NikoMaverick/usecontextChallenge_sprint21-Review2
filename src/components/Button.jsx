import { useTheme } from '../themes/ThemeContext'
const Button = () => {
  const { toggleTheme, theme } = useTheme()
  return(
    <button onClick={toggleTheme}>Change {theme === 'light' ? 'dark' : 'light'} </button>
  )
}

export default Button