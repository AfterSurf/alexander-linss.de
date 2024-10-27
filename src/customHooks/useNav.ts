import { useRef, useContext, useEffect, MutableRefObject } from 'react';
import { useOnScreen } from './useOnScreen';
import { NavContext } from '../context/NavContext';

export const useNav = (navLinkId:any) => { // #todo
	const ref:MutableRefObject<HTMLElement> | any = useRef<HTMLElement>(null);
	const { setActiveNavLinkId }:any = useContext(NavContext); // #todo
	const isOnScreen = useOnScreen(ref);
	

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId);
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId]);

	return ref;
};
