import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import GamePage from './Components/Gamepage/GamePage';
import Game from './Components/Gamepage/Game';
import mountain from './assets/M1.jpg';
import Home from './Components/Homepage/Home';
import LoginFinal from './Components/Loginpage/LoginFinal';

function App() {
	const [common, setCommon] = useState(mountain);
	// const user = useSelector((state) => state.user.user);
	return (
		<Router>
			<Routes>
				<Route
					path="/game"
					element={<Home common={common} setCommon={setCommon} />}
				/>
				<Route path="/land" element={<LoginFinal />} />
				<Route path="/" element={<GamePage />} />
				<Route path="/gamel" element={<Game common={common} />} />
			</Routes>
		</Router>
	);
}

export default App;
