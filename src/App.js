import { WelcomePage } from './components/welcomePage.js';

function App() {
	return (
		<div
			style={{
				backgroundImage: `url(${
					process.env.PUBLIC_URL + '/ioslakewallpaper.jpg'
				})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				position: 'absolute',
				height: '100%',
				width: '100%'
			}}
		>
			<div>
				<WelcomePage />
			</div>
		</div>
	);
}

export default App;
