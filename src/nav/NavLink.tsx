import { useContext } from 'react';
import { NavContext } from '../context/NavContext';

type NavLinkInputProps = {
	navLinkId: any, 
	scrollToId: any,
	setIsOpen: any,
	setShowImpressum: any
}

const NavLink = ({ navLinkId, scrollToId , setIsOpen, setShowImpressum} : NavLinkInputProps) => {
	const { activeNavLinkId, setActiveNavLinkId }:any = useContext(NavContext); // #todo ts
	const setShowImpressumIntern = setShowImpressum;
	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		if(document.getElementById(scrollToId) !== null) {
			if(window.innerWidth > 601) {
				document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' }); // auf  mobile will ich auto
			} else {
				document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'auto' }); // auf  mobile will ich auto
			}
			setIsOpen(false)
		} else {
			throw Error(`element with ID ${scrollToId} is null!`)
		}
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
