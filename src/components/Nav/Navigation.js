import React from 'react';
import './Navigation.scss'
import { Outlet, Link } from 'react-router-dom'


function Navigation() {
	const catIcon = <h1>CAT</h1> 
		//bohužel jsem nebyl schopen rozchodit font awesome icony,
		//hází mi to chybu, že to nemůže najít při instalaci zdroj (404)
		//jinak bych to vložil podle návodu na jejich stránkách

	return (
		<nav>
			<div className='container'>
				<ul>
					<li>
						<Link to="/">{catIcon}</Link>
					</li>
					<li>
						<Link to="/">Recent Articles</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>

				<Link className='logIn' to="/login">Log In</Link>

				<Outlet />
			</div>
		</nav>
	)
}

export default Navigation;


