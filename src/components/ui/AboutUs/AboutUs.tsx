import { story } from './story'

const OurHistory = () => {
	return (
		<section className='aboutUs'>
			<h2 className='aboutUs__header'>Nasza historia</h2>
			<p className='aboutUs__content'>{story}</p>
		</section>
	)
}

export default OurHistory
