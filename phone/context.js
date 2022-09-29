import { createContext, useState } from 'react';

const ScreenContext = createContext();

function ScreenContextProvider({ children }) {
	const phones = [
		{
			color: '#C5F1FB',
			img: require('./assets/dtbac.png'),
		},
		{
			color: '#F30D0D',
			img: require('./assets/dtdo.png'),
		},
		{
			color: '#000000',
			img: require('./assets/dtden.png'),
		},
		{
			color: '#234896',
			img: require('./assets/dtxanh.png'),
		},
	];

	const [screen, setScreen] = useState(0);
	const [currentPhone, setCurrentPhone] = useState({
		color: '#C5F1FB',
		img: require('./assets/dtbac.png'),
	});
	const contextValue = { screen, setScreen, phones, currentPhone, setCurrentPhone };

	return <ScreenContext.Provider value={contextValue}>{children}</ScreenContext.Provider>;
}

export { ScreenContext, ScreenContextProvider };
