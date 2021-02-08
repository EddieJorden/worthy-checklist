import { welcomePage } from './components/welcomePage.js';

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
			}}
		>
			<div>
				<div>{welcomePage}</div>
			</div>
		</div>
	);
}

export default App;
