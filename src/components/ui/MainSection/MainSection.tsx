import image from '../../../assets/images/main-section-image.png'
import './MainSection.less'

const MainSection = () => {
	return (
		<main className='main'>
			<div className='main__photo'>
				<img className='main__photo__img' src={image} alt='Zdjęcie pary młodej' />
			</div>
			<div className='main__text'>
				<p>Pobraliśmy się!</p>
				<p>24 | 08 | 2024</p>
			</div>
		</main>
	)
}

export default MainSection
