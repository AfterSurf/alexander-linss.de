import {useState} from 'react';

import { Nav } from './nav';
import { Main } from './pages';
import Footer from './footer/Footer';
import NavProvider from './context/NavContext';
import './App.css';


function App() {

	const [showImpressum, setShowImpressum] = useState(false);

return (
		<div className='appContainer'>
			<NavProvider>
					<Nav setShowImpressum={setShowImpressum}/>
					<Main  showImpressum={showImpressum} setShowImpressum={setShowImpressum}/>
					<Footer showImpressum={showImpressum} setShowImpressum={setShowImpressum}/>
			</NavProvider>
		</div>
	);
}

export default App;
