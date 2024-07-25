import './App.less'
import Header from './components/ui/Header/Header'
import Navigation from './components/ui/Navigation/Navigation'
import MainSection from './components/ui/MainSection/MainSection'
import Tables from './components/ui/Tables/Tables'
import Menu from './components/ui/Menu/Menu'
import AboutUs from './components/ui/AboutUs/AboutUs'

function App() {
	return (
		<>
			<div className='app-layout'>
				<Header />
				<Navigation />
				<MainSection />
				<hr className='app-layout__hr' />
				<Tables />
				<hr className='app-layout__hr' />
				<Menu />
				<hr className='app-layout__hr' />
				<AboutUs />
			</div>
		</>
	)
}

export default App
