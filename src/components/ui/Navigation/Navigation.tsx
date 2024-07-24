import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { navItems } from './navItems'

const Navigation = () => {
	return (
		<nav className='navigation'>
			<div className='navigation__close'>
				<FontAwesomeIcon icon={faXmark} />
			</div>
			<h2 className='navigation__header'>Menu strony</h2>
			<ul className='navigation__list'>
				{navItems.map(item => (
					<li className='navigation__list__item'>
						<a href={item.path}>{item.name}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
