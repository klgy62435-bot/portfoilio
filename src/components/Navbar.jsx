import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ items, lang, setLang, theme, setTheme }) {
	const [open, setOpen] = useState(false);

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-5'>
			<div className='  mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center p-5 h-16'>
					{/* Logo */}
					<a href='#home' className='font-bold text-lg'>
						MN Portfolio
					</a>

					{/* Desktop Menu */}
					<nav className='hidden md:flex items-center gap-6 p-5'>
						{items.map((item) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								className='hover:text-blue-600 transition'
							>
								{item.label}
							</a>
						))}
					</nav>

					{/* Controls */}
					<div className='flex items-center gap-2'>
						{/* Lang */}
						<button
							onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
							className='px-2 py-1 rounded text-sm border border-slate-300 dark:border-slate-700'
						>
							{lang === 'ar' ? 'EN' : 'AR'}
						</button>

						{/* Theme */}
						<button
							onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
							className='px-2 py-1 rounded text-sm border border-slate-300 dark:border-slate-700'
						>
							{theme === 'light' ? '🌙' : '☀️'}
						</button>

						{/* Mobile Menu Button */}
						<button onClick={() => setOpen(!open)} className='md:hidden p-2'>
							{open ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{open && (
				<nav className='md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-4 py-3 space-y-3'>
					{items.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							onClick={() => setOpen(false)}
							className='block hover:text-blue-600 transition'
						>
							{item.label}
						</a>
					))}
				</nav>
			)}
		</header>
	);
}
