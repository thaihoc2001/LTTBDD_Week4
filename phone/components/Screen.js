import { useContext } from 'react';
import { ScreenContext } from '../context';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

export default function Screen() {
	const screenContext = useContext(ScreenContext);
	const screen = screenContext.screen;

	const getScreen = () => {
		switch (screen) {
			case 0:
				return <Screen1 />;
			case 1:
				return <Screen2 />;

			default:
				return <Screen1 />;
		}
	};

	return <>{getScreen()}</>;
}
