import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';

const NavLink = ({ navLinkId, scrollToId , setIsOpen, setShowImpressum}) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
	const setShowImpressumIntern = setShowImpressum;
	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
			if(window.innerWidth > 601) {
				document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' }); // auf  mobile will ich auto
			} else {
				document.getElementById(scrollToId).scrollIntoView({ behavior: 'auto' }); // auf  mobile will ich auto
			}
			setIsOpen(false)
	};

	return (
		<span
			id={navLinkId}
			className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
			onClick={() => {
				handleClick(); 
				setShowImpressumIntern(false)
			}}
		>
			{navLinkId}
		</span>
	);
};

export default NavLink;
