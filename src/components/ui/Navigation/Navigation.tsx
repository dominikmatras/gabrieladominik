import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { navItems } from './navItems'
import './Navigation.less'

const Navigation = () => {
	document.querySelector('.navigation__close')?.addEventListener('click', () => {
		document.querySelector('.navigation')?.classList.add('hidden')
	})

	document.querySelectorAll('.navigation__list__item')?.forEach(item => {
		item.addEventListener('click', () => {
			document.querySelector('.navigation')?.classList.add('hidden')
		})
	})

	return (
		<nav className='navigation hidden'>
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
