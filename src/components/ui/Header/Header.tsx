import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.less'

const Header = () => {
	return (
		<header className='header'>
			<div className='header__hamburger'>
				<FontAwesomeIcon icon={faBars} />
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
