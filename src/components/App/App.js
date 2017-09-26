import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions/actions';

import './style.css';

class AppComponent extends Component {
	
	componentDidMount() {
		this.props.getData();
	}
	
	render() {
		return (
			<div className="app">
				<div className="app-header">
					<h2>Ataccama - Task</h2>
				</div>
				<div className="app-content">

				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const App = connect(
	mapStateToProps,
	{
		getData
	}
)(AppComponent);

export default App;
