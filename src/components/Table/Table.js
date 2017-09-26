import React, { Component } from 'react';
import { Table as BTable, Glyphicon } from 'react-bootstrap';
import './style.css';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: props.content.map((row) => ({ ...row, showKids: false })),
			name: props.name,
			showFirst: props.content.filter((row) => Object.keys(row.kids).length>0).length > 0
		};
		this.showKids = this.showKids.bind(this);
		this.removeRecord = this.removeRecord.bind(this);
	}
	
	showKids = (i) => {
		const arr = [...this.state.content];
		arr[i].showKids = !arr[i].showKids;
		this.setState({ content: arr });
	};
	
	removeRecord = (data, i, row) => {
		const arr = [...this.state.content];
		(data.length > 0)
			? arr[i].kids[Object.keys(row.kids)[0]].records = data
			: arr[i].kids = {};
		this.props.removeRecord(arr);
	};
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			content: nextProps.content.map((row) => ({ ...row })),
			showFirst: nextProps.content.filter((row) => Object.keys(row.kids).length>0).length > 0
		});
	}
	
	render() {
		const { content, name, showFirst } = this.state;
		const { removeRecord } = this.props;

		return (<BTable bordered className="p-table">
			{ content.map((row, i) =>
				(<tbody key={`tbody_${i}`}>
				
				{name && i===0 && <tr className="p-table-name">
					<td colSpan={Object.keys(row.data).length + (showFirst ? 2 : 1)}>{ name }</td>
				</tr>}
				
				{ i===0 && <tr>
					{showFirst && <th />}
					
					{ Object.keys(row.data).map((key, i) =>
						(<th key={`th_${i}`}>{ key }</th>)) }
					<th />
				</tr> }
				<tr>
					{showFirst
					&& (row.kids && Object.keys(row.kids).length > 0
						? <td onClick={() => this.showKids(i)}>
							<Glyphicon glyph={ row.showKids ? 'triangle-bottom' : 'triangle-right'}/>
						</td> : <td />)}
					
					{ Object.values(row.data).map((value, i) =>
						(<td key={`td_${i}`}>{ value }</td>)) }
						
					<td onClick={() => {
						const arr = [...content];
						arr.splice(i, 1);
						removeRecord(arr);
					}}>
						<Glyphicon glyph="remove"/>
					</td>
				</tr>
				
				{(row.kids && row.showKids && Object.keys(row.kids).length > 0)
				&& <tr>
					<td colSpan={Object.keys(row.data).length + (showFirst ? 2 : 1)}>
						<Table
							content={row.kids[Object.keys(row.kids)[0]].records}
							name={Object.keys(row.kids)[0]}
							removeRecord={(data) => this.removeRecord(data, i, row)}
						/>
					</td>
				</tr>}
				</tbody>))
			}
		</BTable>);
	}
}

Table.defaultProps = {
	content: [],
	name: null
};

export default Table;