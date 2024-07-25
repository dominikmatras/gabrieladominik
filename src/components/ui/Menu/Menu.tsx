import { menuItems } from './menuItems'

const Menu = () => {
	return (
		<section className='menu'>
			<h2 className='menu__header'>Menu Weselne</h2>
			<div className='menu__content'>
				{menuItems.map(item => (
					<div className='menu__content__section' key={item.id}>
						<p className='menu__content__section__title'>{item.title}</p>
						<p className='menu__content__section__time'>{item.time}</p>
						{item.menu.map(menuItem => (
							<ul className='menu__content__section__time__list'>
								{menuItem == 'Zupa' || menuItem == 'Danie główne' ? (
									<li className='menu__content__section__time__list__item label'>{menuItem}</li>
								) : (
									<li className='menu__content__section__time__list__item'>{menuItem}</li>
								)}
							</ul>
						))}
					</div>
				))}
			</div>
		</section>
	)
}

export default Menu
