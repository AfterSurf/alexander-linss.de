import {createContext, useState } from 'react';

// schauen was hier nötig ist
// export const NavContext = createContext({activeNavLinkId: "", setActiveNavLinkId: ""});
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
