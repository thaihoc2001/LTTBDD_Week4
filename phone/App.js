import Screen from './components/Screen';
import { ScreenContextProvider } from './context';

export default function App() {
	return (
		<ScreenContextProvider>
			<Screen />
		</ScreenContextProvider>
	);
}
