import { welcomePage } from './components/welcome.js';

function App() {
	return (
		<div className="App">
			<div>
				<h1>Hello world</h1>
				{welcomePage}
			</div>
		</div>
	);
}

export default App;
