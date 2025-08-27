import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import ahmed from '../public/ahmed.png';

const App = () => {
	const [isDark, setIsDark] = useState(true);
	const [isArabic, setIsArabic] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	// Language translations
	const translations = {
		en: {
			nav: {
				home: 'Home',
				projects: 'Projects',
				services: 'Services',
				contact: 'Contact',
			},
			hero: {
				greeting: "Hi, I'm",
				name: 'Ahmed Design',
				title: 'Graphic Designer & Mobile Developer',
				subtitle:
					'Logo Designer | Video Editor | React Native Developer | Sketchware Pro',
				viewProjects: 'View Projects',
				contactMe: 'Contact Me',
			},
			projects: {
				title: 'My Projects',
				logoDesign: 'Logo Design',
				logoDesc: 'Professional logo designs for brands and businesses',
				videoEditing: 'Video Editing',
				videoDesc: 'Long & short form videos, reels and professional editing',
				mobileApps: 'Mobile Apps',
				mobileDesc: 'React Native and Sketchware Pro applications',
			},
			services: {
				title: 'Services',
				logoDesign: 'Logo Design',
				logoDesc: 'Creating unique and memorable logos for your brand',
				videoEditing: 'Video Editing',
				videoDesc: 'Professional video editing for all formats and platforms',
				mobileApps: 'Mobile Development',
				mobileDesc: 'Building cross-platform mobile applications',
			},
		},
		ar: {
			nav: {
				home: 'الرئيسية',
				projects: 'المشاريع',
				services: 'الخدمات',
				contact: 'تواصل',
			},
			hero: {
				greeting: 'مرحباً، أنا',
				name: 'محمد ناصر',
				title: 'مصمم جرافيك ومطور تطبيقات',
				subtitle:
					'مصمم لوجوهات | مونتير فيديو | مطور React Native | Sketchware Pro',
				viewProjects: 'عرض المشاريع',
				contactMe: 'تواصل معي',
			},
			projects: {
				title: 'مشاريعي',
				logoDesign: 'تصميم اللوجوهات',
				logoDesc: 'تصاميم لوجوهات احترافية للعلامات التجارية والشركات',
				videoEditing: 'مونتاج الفيديو',
				videoDesc: 'مقاطع فيديو طويلة وقصيرة، ريلز ومونتاج احترافي',
				mobileApps: 'تطبيقات الموبايل',
				mobileDesc: 'تطبيقات React Native و Sketchware Pro',
			},
			services: {
				title: 'الخدمات',
				logoDesign: 'تصميم اللوجوهات',
				logoDesc: 'إنشاء لوجوهات فريدة ولا تُنسى لعلامتك التجارية',
				videoEditing: 'مونتاج الفيديو',
				videoDesc: 'مونتاج فيديو احترافي لجميع الصيغ والمنصات',
				mobileApps: 'تطوير التطبيقات',
				mobileDesc: 'بناء تطبيقات موبايل متعددة المنصات',
			},
		},
	};

	const t = (key) => {
		const keys = key.split('.');
		let value = translations[isArabic ? 'ar' : 'en'];
		for (const k of keys) {
			value = value[k];
		}
		return value || key;
	};

	useEffect(() => {
		document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
		document.documentElement.lang = isArabic ? 'ar' : 'en';
	}, [isArabic]);

	// Theme toggle
	const toggleTheme = () => setIsDark(!isDark);

	// Language toggle
	const toggleLanguage = () => setIsArabic(!isArabic);

	const themeClasses = isDark
		? 'bg-gray-900 text-white'
		: 'bg-white text-gray-900';

	return (
		<div
			className={`${themeClasses} font-sans min-h-screen relative overflow-x-hidden`}
		>
			<AnimatedBackground isDark={isDark} />

			{/* Navbar */}
			<nav
				className={`fixed top-0 w-full z-50 transition-all duration-300 p-5 ${
					isDark ? 'bg-gray-900/80' : 'bg-white/80'
				} backdrop-blur-md border-b ${
					isDark ? 'border-gray-700' : 'border-gray-200'
				}`}
			>
				<div className='  mx-auto px-6 py-4'>
					<div className='flex justify-between items-center p-5'>
						<div
							className={`text-2xl font-bold ${
								isDark ? 'text-cyan-400' : 'text-blue-600'
							} cursor-pointer hover:scale-105 transition-transform`}
						>
							{t('hero.name')}
						</div>

						<div className='hidden md:flex items-center space-x-8'>
							{['home', 'projects', 'services', 'contact'].map((item) => (
								<a
									key={item}
									href={`#${item}`}
									className={`relative transition-colors duration-300 ${
										activeSection === item
											? isDark
												? 'text-cyan-400'
												: 'text-blue-600'
											: isDark
											? 'text-gray-300 hover:text-cyan-400'
											: 'text-gray-600 hover:text-blue-600'
									}`}
									onClick={() => setActiveSection(item)}
								>
									{t(`nav.${item}`)}
									{activeSection === item && (
										<div
											className={`absolute -bottom-1 left-0 w-full h-0.5 ${
												isDark ? 'bg-cyan-400' : 'bg-blue-600'
											} rounded-full`}
										></div>
									)}
								</a>
							))}
						</div>

						<div className='flex items-center space-x-4'>
							{/* Language Toggle */}
							<button
								onClick={toggleLanguage}
								className={`w-12 h-6 rounded-full transition-colors duration-300 ${
									isDark ? 'bg-gray-700' : 'bg-gray-300'
								} relative`}
							>
								<div
									className={`w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center text-xs font-bold ${
										isDark
											? 'bg-cyan-400 text-gray-900'
											: 'bg-blue-600 text-white'
									} ${isArabic ? 'translate-x-6' : 'translate-x-0.5'}`}
								>
									{isArabic ? 'ع' : 'EN'}
								</div>
							</button>

							{/* Theme Toggle */}
							<button
								onClick={toggleTheme}
								className={`w-12 h-6 rounded-full transition-colors duration-300 ${
									isDark ? 'bg-cyan-600' : 'bg-blue-600'
								} relative`}
							>
								<div
									className={`w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center text-xs ${
										isDark
											? 'bg-gray-900 translate-x-0.5'
											: 'bg-white translate-x-6'
									}`}
								>
									{isDark ? '🌙' : '☀️'}
								</div>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section
				id='home'
				className='relative z-10 min-h-screen flex items-center justify-center px-6 pt-20'
			>
				<div className='max-w-4xl mx-auto text-center'>
					{/* Profile Image */}
					<div className='relative mb-8 inline-block'>
						<div
							className={`absolute inset-0 rounded-full blur-2xl ${
								isDark ? 'bg-cyan-400/20' : 'bg-blue-600/20'
							} animate-pulse`}
						></div>
						<div
							className={`relative w-48 h-48 mx-auto rounded-full border-4 ${
								isDark ? 'border-cyan-400' : 'border-blue-600'
							} overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300`}
						>
							<img
								src={ahmed}
								alt='Ahmed Design - Profile'
								className='w-full h-full object-cover'
								onLoad={() =>
									console.log('✅ Profile image loaded successfully!')
								}
							/>
						</div>
					</div>

					{/* Text Content */}
					<div className='space-y-6'>
						<h1 className='text-5xl md:text-7xl font-bold leading-tight'>
							{t('hero.greeting')}{' '}
							<span
								className={`${
									isDark ? 'text-cyan-400' : 'text-blue-600'
								} inline-block hover:scale-105 transition-transform duration-300`}
							>
								{t('hero.name')}
							</span>
						</h1>

						<h2
							className={`text-2xl md:text-3xl font-semibold ${
								isDark ? 'text-gray-300' : 'text-gray-700'
							}`}
						>
							{t('hero.title')}
						</h2>

						<p
							className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
								isDark ? 'text-gray-400' : 'text-gray-600'
							}`}
						>
							{t('hero.subtitle')}
						</p>

						{/* CTA Buttons */}
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
							<a
								href='#projects'
								className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
									isDark
										? 'bg-cyan-400 text-gray-900 hover:bg-cyan-300'
										: 'bg-blue-600 text-white hover:bg-blue-700'
								} shadow-lg`}
							>
								{t('hero.viewProjects')}
							</a>
							<a
								href='#contact'
								className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 ${
									isDark
										? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
										: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
								}`}
							>
								{t('hero.contactMe')}
							</a>
						</div>
					</div>

					{/* Scroll Indicator */}
					<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
						<div
							className={`w-6 h-10 border-2 rounded-full ${
								isDark ? 'border-cyan-400' : 'border-blue-600'
							} flex justify-center`}
						>
							<div
								className={`w-1 h-3 ${
									isDark ? 'bg-cyan-400' : 'bg-blue-600'
								} rounded-full mt-2 animate-pulse`}
							></div>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section
				id='projects'
				className={`relative z-10 py-20 px-6 mt-10 ${
					isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'
				} backdrop-blur-sm`}
			>
				<div className='  mx-auto'>
					<div className='text-center mb-16'>
						<h3
							className={`text-4xl md:text-5xl font-bold mb-4 ${
								isDark ? 'text-cyan-400' : 'text-blue-600'
							}`}
						>
							{t('projects.title')}
						</h3>
						<div
							className={`w-24 h-1 mx-auto rounded-full ${
								isDark ? 'bg-cyan-400' : 'bg-blue-600'
							}`}
						></div>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* Logo Design Project */}
						<div
							className={`group relative overflow-hidden rounded-2xl ${
								isDark ? 'bg-gray-700/80' : 'bg-white/80'
							} backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
								isDark ? 'border-gray-600' : 'border-gray-200'
							}`}
						>
							<div
								className={`absolute inset-0 ${
									isDark
										? 'bg-gradient-to-br from-cyan-400/10 to-blue-600/10'
										: 'bg-gradient-to-br from-blue-600/10 to-purple-600/10'
								} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
							></div>

							<div className='relative z-10'>
								<div
									className={`w-16 h-16 rounded-2xl ${
										isDark ? 'bg-cyan-400' : 'bg-blue-600'
									} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									<span className='text-3xl'>🎨</span>
								</div>

								<h4 className='text-2xl font-bold mb-4'>
									{t('projects.logoDesign')}
								</h4>
								<p
									className={`${
										isDark ? 'text-gray-300' : 'text-gray-600'
									} mb-6 leading-relaxed`}
								>
									{t('projects.logoDesc')}
								</p>

								<div className='flex gap-4'>
									<a
										href='#'
										className={`${
											isDark
												? 'text-cyan-400 hover:text-cyan-300'
												: 'text-blue-600 hover:text-blue-500'
										} font-semibold hover:underline transition-colors`}
									>
										Portfolio
									</a>
									<a
										href='#'
										className={`${
											isDark
												? 'text-gray-400 hover:text-gray-300'
												: 'text-gray-500 hover:text-gray-400'
										} font-semibold hover:underline transition-colors`}
									>
										Behance
									</a>
								</div>
							</div>
						</div>

						{/* Video Editing Project */}
						<div
							className={`group relative overflow-hidden rounded-2xl ${
								isDark ? 'bg-gray-700/80' : 'bg-white/80'
							} backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
								isDark ? 'border-gray-600' : 'border-gray-200'
							}`}
						>
							<div
								className={`absolute inset-0 ${
									isDark
										? 'bg-gradient-to-br from-purple-400/10 to-pink-600/10'
										: 'bg-gradient-to-br from-purple-600/10 to-pink-600/10'
								} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
							></div>

							<div className='relative z-10'>
								<div
									className={`w-16 h-16 rounded-2xl ${
										isDark ? 'bg-purple-500' : 'bg-purple-600'
									} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									<span className='text-3xl'>🎬</span>
								</div>

								<h4 className='text-2xl font-bold mb-4'>
									{t('projects.videoEditing')}
								</h4>
								<p
									className={`${
										isDark ? 'text-gray-300' : 'text-gray-600'
									} mb-6 leading-relaxed`}
								>
									{t('projects.videoDesc')}
								</p>

								<div className='flex gap-4'>
									<a
										href='#'
										className={`${
											isDark
												? 'text-purple-400 hover:text-purple-300'
												: 'text-purple-600 hover:text-purple-500'
										} font-semibold hover:underline transition-colors`}
									>
										YouTube
									</a>
									<a
										href='#'
										className={`${
											isDark
												? 'text-gray-400 hover:text-gray-300'
												: 'text-gray-500 hover:text-gray-400'
										} font-semibold hover:underline transition-colors`}
									>
										Instagram
									</a>
								</div>
							</div>
						</div>

						{/* Mobile Apps Project */}
						<div
							className={`group relative overflow-hidden rounded-2xl ${
								isDark ? 'bg-gray-700/80' : 'bg-white/80'
							} backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
								isDark ? 'border-gray-600' : 'border-gray-200'
							}`}
						>
							<div
								className={`absolute inset-0 ${
									isDark
										? 'bg-gradient-to-br from-green-400/10 to-emerald-600/10'
										: 'bg-gradient-to-br from-green-600/10 to-emerald-600/10'
								} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
							></div>

							<div className='relative z-10'>
								<div
									className={`w-16 h-16 rounded-2xl ${
										isDark ? 'bg-green-500' : 'bg-green-600'
									} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									<span className='text-3xl'>📱</span>
								</div>

								<h4 className='text-2xl font-bold mb-4'>
									{t('projects.mobileApps')}
								</h4>
								<p
									className={`${
										isDark ? 'text-gray-300' : 'text-gray-600'
									} mb-6 leading-relaxed`}
								>
									{t('projects.mobileDesc')}
								</p>

								<div className='flex gap-4'>
									<a
										href='#'
										className={`${
											isDark
												? 'text-green-400 hover:text-green-300'
												: 'text-green-600 hover:text-green-500'
										} font-semibold hover:underline transition-colors`}
									>
										Play Store
									</a>
									<a
										href='#'
										className={`${
											isDark
												? 'text-gray-400 hover:text-gray-300'
												: 'text-gray-500 hover:text-gray-400'
										} font-semibold hover:underline transition-colors`}
									>
										GitHub
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id='services' className='relative z-10 py-20 px-6'>
				<div className='  mx-auto'>
					<div className='text-center mb-16'>
						<h3
							className={`text-4xl md:text-5xl font-bold mb-4 ${
								isDark ? 'text-cyan-400' : 'text-blue-600'
							}`}
						>
							{t('services.title')}
						</h3>
						<div
							className={`w-24 h-1 mx-auto rounded-full ${
								isDark ? 'bg-cyan-400' : 'bg-blue-600'
							}`}
						></div>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{/* Logo Design Service */}
						<div
							className={`group text-center p-8 rounded-2xl ${
								isDark ? 'bg-gray-800/50' : 'bg-white/50'
							} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
								isDark ? 'border-gray-700' : 'border-gray-200'
							}`}
						>
							<div
								className={`w-20 h-20 mx-auto rounded-full ${
									isDark
										? 'bg-gradient-to-br from-cyan-400 to-blue-500'
										: 'bg-gradient-to-br from-blue-500 to-purple-600'
								} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
							>
								<span className='text-4xl'>🎨</span>
							</div>
							<h4 className='text-2xl font-bold mb-4'>
								{t('services.logoDesign')}
							</h4>
							<p
								className={`${
									isDark ? 'text-gray-300' : 'text-gray-600'
								} leading-relaxed`}
							>
								{t('services.logoDesc')}
							</p>
						</div>

						{/* Video Editing Service */}
						<div
							className={`group text-center p-8 rounded-2xl ${
								isDark ? 'bg-gray-800/50' : 'bg-white/50'
							} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
								isDark ? 'border-gray-700' : 'border-gray-200'
							}`}
						>
							<div
								className={`w-20 h-20 mx-auto rounded-full ${
									isDark
										? 'bg-gradient-to-br from-purple-400 to-pink-500'
										: 'bg-gradient-to-br from-purple-500 to-pink-600'
								} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
							>
								<span className='text-4xl'>🎬</span>
							</div>
							<h4 className='text-2xl font-bold mb-4'>
								{t('services.videoEditing')}
							</h4>
							<p
								className={`${
									isDark ? 'text-gray-300' : 'text-gray-600'
								} leading-relaxed`}
							>
								{t('services.videoDesc')}
							</p>
						</div>

						{/* Mobile Development Service */}
						<div
							className={`group text-center p-8 rounded-2xl ${
								isDark ? 'bg-gray-800/50' : 'bg-white/50'
							} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
								isDark ? 'border-gray-700' : 'border-gray-200'
							}`}
						>
							<div
								className={`w-20 h-20 mx-auto rounded-full ${
									isDark
										? 'bg-gradient-to-br from-green-400 to-emerald-500'
										: 'bg-gradient-to-br from-green-500 to-emerald-600'
								} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
							>
								<span className='text-4xl'>📱</span>
							</div>
							<h4 className='text-2xl font-bold mb-4'>
								{t('services.mobileApps')}
							</h4>
							<p
								className={`${
									isDark ? 'text-gray-300' : 'text-gray-600'
								} leading-relaxed`}
							>
								{t('services.mobileDesc')}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id='contact'
				className={`relative z-10 py-20 px-6 ${
					isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'
				} backdrop-blur-sm`}
			>
				<div className='max-w-4xl mx-auto text-center'>
					<h3
						className={`text-4xl md:text-5xl font-bold mb-8 ${
							isDark ? 'text-cyan-400' : 'text-blue-600'
						}`}
					>
						{t('hero.contactMe')}
					</h3>

					<p
						className={`text-xl mb-12 ${
							isDark ? 'text-gray-300' : 'text-gray-600'
						}`}
					>
						{isArabic
							? 'هل لديك مشروع في ذهنك؟ دعنا نتحدث ونحوله إلى واقع!'
							: "Have a project in mind? Let's talk and bring it to life!"}
					</p>

					<div className='flex flex-wrap justify-center gap-6'>
						{[
							{ name: 'LinkedIn', icon: '💼', color: 'blue' },
							{ name: 'GitHub', icon: '💻', color: 'gray' },
							{ name: 'Instagram', icon: '📸', color: 'pink' },
							{ name: 'Behance', icon: '🎨', color: 'purple' },
							{ name: 'WhatsApp', icon: '💬', color: 'green' },
						].map((social) => (
							<a
								key={social.name}
								href='#'
								className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
									isDark
										? 'bg-gray-700 hover:bg-gray-600 text-white'
										: 'bg-white hover:bg-gray-50 text-gray-900'
								} shadow-lg hover:shadow-xl border ${
									isDark ? 'border-gray-600' : 'border-gray-200'
								}`}
							>
								<span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
									{social.icon}
								</span>
								<span className='font-semibold'>{social.name}</span>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer
				className={`relative z-10 text-center py-8 border-t ${
					isDark
						? 'border-gray-700 bg-gray-900/50'
						: 'border-gray-200 bg-white/50'
				} backdrop-blur-sm`}
			>
				<p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
					&copy; 2025 {t('hero.name')}.{' '}
					{isArabic ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}.
				</p>
				<p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
					{isArabic
						? 'صُنع بـ ❤️ باستخدام React و Tailwind CSS'
						: 'Made with ❤️ using React & Tailwind CSS'}
				</p>
			</footer>
		</div>
	);
};

export default App;
