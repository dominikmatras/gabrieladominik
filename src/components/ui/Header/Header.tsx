import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.less'

const Header = () => {
	document.querySelector('.header__hamburger__svg')?.addEventListener('click', () => {
		document.querySelector('.navigation')?.classList.remove('hidden')
	})

	return (
		<header className='header'>
			<div className='header__hamburger'>
				<FontAwesomeIcon icon={faBars} className='header__hamburger__svg' />
			</div>
			<div className='header__text'>
				<h1>
					<a href='#'>Gabriela & Dominik</a>
				</h1>
			</div>
		</header>
	)
}

export default Header
