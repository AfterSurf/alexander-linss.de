import { useRef, useContext, useEffect } from 'react';
import { useOnScreen } from './useOnScreen';
import { NavContext } from '../context/NavContext';

export const useNav = navLinkId => {
	const ref = useRef(null);
	console.log("useNave")

	const { setActiveNavLinkId } = useContext(NavContext);

	const isOnScreen = useOnScreen(ref);

// bei jedem Effect setzt die aktive Seite den Context

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId);
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId]);

	return ref;
};
