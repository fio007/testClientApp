import React from 'react';
import 'react-hot-loader/patch';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Menu from "../component/Menu.js";
import FaBars from 'react-icons/lib/fa/bars';


import './header.css';
import logo from "./src/logo.png";


class Header  extends React.Component{
	state = {
		openMenu: false
	};

	toggleMenu = () => {
		this.setState({openMenu: !this.state.openMenu});
	}

	render() {
		const {openMenu} = this.state;
		return (
			<div>
				<div className="logo inline-block">
					<Link to="/"> 
						<img id="logo" src={logo} />
					</Link>
				</div>
				
				<div id="menuIcon" className="inline-block" style={openMenu ? {backgroundColor:"#2ac1c7e0"} : null} onClick={this.toggleMenu}>
					<FaBars size="25"/>
				</div>
				{ openMenu ? <Menu onClick={this.toggleMenu}/> : null }
			</div>
		);
	}
}

export default Header;