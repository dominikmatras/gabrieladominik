import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../Navigation/Navigation'
import './Header.less'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='header'>
			<div className='header__hamburger' onClick={() => setIsOpen(true)}>
				<FontAwesomeIcon icon={faBars} className='header__hamburger__svg' />
			</div>
			<div className='header__text'>
				<h1>
					<a href='#'>Gabriela & Dominik</a>
				</h1>
			</div>
			<Navigation isOpen={isOpen} setIsOpen={setIsOpen}/>
		</header>
	)
}

export default Header
