import './App.css'
import Header from './components/ui/Header/Header'
import Navigation from './components/ui/Navigation/Navigation'
import MainSection from './components/ui/MainSection/MainSection'
import Tables from './components/ui/Tables/Tables'

function App() {
	return (
		<>
			<div className='app-layout'>
				<Header />
				<Navigation />
				<MainSection />
				<Tables />
			</div>
		</>
	)
}

export default App
