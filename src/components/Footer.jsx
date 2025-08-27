import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer({ text }) {
	return (
		<footer className='border-t border-slate-200 dark:border-slate-800 mt-8'>
			<div className='  mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
				<p className='text-sm text-slate-600 dark:text-slate-300'>{text}</p>
				<div className='flex items-center gap-3'>
					<a
						href='#'
						className='inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition'
						aria-label='GitHub'
						title='GitHub'
					>
						<Github size={18} />
					</a>
					<a
						href='#'
						className='inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition'
						aria-label='LinkedIn'
						title='LinkedIn'
					>
						<Linkedin size={18} />
					</a>
					<a
						href='#contact'
						className='inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition'
						aria-label='Email'
						title='Email'
					>
						<Mail size={18} />
					</a>
				</div>
			</div>
		</footer>
	);
}
