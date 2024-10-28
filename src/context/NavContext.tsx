import {createContext, useState } from 'react';

export const NavContext = createContext({});

type NavProviderInputProps = {
	children: JSX.Element | JSX.Element[]
}

const NavProvider = ({ children }: NavProviderInputProps) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};

export default NavProvider;
