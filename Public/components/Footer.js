import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
// import { logout } from '../actions/auth';

class Footer extends React.Component{
	componentDidMount(){
		render(){
			return(
				<footer>
					<p>© 2018 Gilbert Moving & Storage, All Rights Reserrved.</p> 
				</footer>
				);
		};
	};
}; 