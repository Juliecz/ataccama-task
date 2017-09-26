import React, { Component } from 'react';

import Table from '../Table/Table';
import './style.css';

class Info extends Component {
	render() {
		const { data, removeRecord } = this.props;
		
		return (<div className="c-info">
			{ data && data.length > 0
			&& <Table
				content={this.props.data}
				removeRecord={removeRecord}
			/>}
		</div>);
	}
}

export default Info;