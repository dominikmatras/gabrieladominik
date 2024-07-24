import { tableItems } from './tableItems'

const Tables = () => {
	return (
		<section className='tables'>
			<h2 className='tables__header'>Plan stołów</h2>
			<div className='tables__content'>
				{tableItems.map(item => (
					<div className='tables__content__table'>
						<h3 className='tables__content__table__header'>{item.table}</h3>
						<ul className='tables__content__table__list'>
							{item.guestList.map(guest => (
								<li className='tables__content__table__list__item'>{guest}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}

export default Tables
