import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<button
			aria-label="Toggle Dark Mode"
			type="button"
			className="click-bounce bg-gradient-to-br from-orange-500 to-orange-600 rounded p-3 h-10 w-10 focus:outline-none flex items-center justify-center text-center"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? <FiSun className="text-bluegray-50" /> : <FiMoon className="text-bluegray-50" />}
		</button>
	);
}