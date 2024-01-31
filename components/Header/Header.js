"use client"
import Image from 'next/image';
// import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

// const THEMES = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

export default function Header() {
	// const [theme, setTheme] = useState('light');

	// useEffect(() => {
	// 	document.documentElement.setAttribute('data-theme', theme)
	// }, [theme])

	// const handleThemeChange = (e) => {
	// 	const val = e.target.getAttribute('data-set-theme');
	// 	setTheme(val)
	// }
	return (
		<header className='bg-base-100 sticky top-0 z-50'>
			<div className='container mx-auto'>
				<div className="navbar px-0">
					<div className="navbar-start">
						<div className="dropdown">
							<label tabIndex={0} className="btn btn-circle lg:hidden mr-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
							</label>
							<ul tabIndex={0} className="dropdown-content mt-1 w-52 menu menu-compact p-2 bg-base-200 shadow rounded-box">
								<li>
									<LinkScroll
										to="main"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Главная
									</LinkScroll>
								</li>
								<li>
								<LinkScroll
									to="step"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Этапы
								</LinkScroll>
								</li>

								<li>
								<LinkScroll
									to="price"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Цены
								</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="contacts"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Контакты
									</LinkScroll>
								</li>
							</ul>
						</div>
						<Image src='/logo/logo.webp' alt='логотип' className='sd:block xz:hidden' width={200} height={60} />
						<Image src='/logo/logo2.webp' className='sd:hidden xz:hidden xy:block ml-3' alt='логотип' width={100} height={60} />
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0 font-light">
							<li>
								<LinkScroll
									to="main"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Главная
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="step"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Этапы
								</LinkScroll>
							</li>

							<li>
								<LinkScroll
									to="price"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Цены
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="contacts"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Контакты
								</LinkScroll>
							</li>
						</ul>
					</div>
					<div className="navbar-end">
						{/* <div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn">
							{THEMES.length} Themes
							</label>
							<ul tabIndex={0} className="dropdown-content mt-1 w-80 max-h-96 overflow-y-auto menu menu-compact p-2  bg-base-200 shadow rounded-box">
								{
									THEMES.map((theme, i) => <li key={theme + i}><button data-set-theme={theme} onClick={handleThemeChange} className="font-medium capitalize">{i + 1 + '. ' + theme}</button></li>)
								}
							</ul>
						</div> */}

						<a href='tel:80296097085' className='btn btn-primary text-white sd:text-xl xz:text-base'>
							8 029 609-70-85
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}