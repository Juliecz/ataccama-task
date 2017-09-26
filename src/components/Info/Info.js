import React, { Component } from 'react';

import Table from '../../partials/Tables/Table';
import './style.css';

class Info extends Component {
	render() {
		return (<div className="c-info">
			<Table data={this.props.data}/>
		</div>);
	}
}

export default Info;