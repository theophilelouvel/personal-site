import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	return (
		<button
			aria-label="Toggle Dark Mode"
			type="button"
			className="bg-gradient-to-br from-orange-500 to-orange-600 rounded p-3 h-10 w-10 focus:outline-none flex items-center justify-center text-center"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{mounted && theme === 'dark' ? <FiSun size="22" className="text-bluegray-50" /> : <FiMoon size="22" className="text-bluegray-50" />}
		</button>
	);
}