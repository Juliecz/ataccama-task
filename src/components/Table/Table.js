import React, { Component } from 'react';
import { Table as BTable, Glyphicon } from 'react-bootstrap';
import './style.css';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: props.content.map((row) => ({ ...row, showKids: false })),
			name: props.name
		}
	}
	
	showKids = (i) => {
		const arr = [...this.state.content];
		arr[i].showKids = !arr[i].showKids;
		this.setState({ content: arr });
	};
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			content: nextProps.content.map((row) => ({ ...row, showKids: false }))
		});
	}
	
	render() {
		const { content, name } = this.state;
		const { removeRecord } = this.props;

		return (<BTable bordered className="p-table">
			{ content.map((row, i) =>
				(<tbody key={`tbody_${i}`}>
				
				{name && i===0 && <tr className="p-table-name">
					<td colSpan={Object.keys(row.data).length+2}>{ name }</td>
				</tr>}
				
				{ i===0 && <tr>
					<th />
					
					{ Object.keys(row.data).map((key, i) =>
						(<th key={`th_${i}`}>{ key }</th>)) }
					
					<th />
				</tr> }
				<tr>
					{(row.kids && Object.keys(row.kids).length > 0)
						? <td onClick={() => this.showKids(i)}>
							<Glyphicon glyph={ row.showKids ? 'triangle-bottom' : 'triangle-right'}/>
						</td> : <td /> }
					
					{ Object.values(row.data).map((value, i) =>
						(<td key={`td_${i}`}>{ value }</td>)) }
						
					<td onClick={() => {
						const arr = [...content];
						arr.splice(i, 1);
						// this.setState({ content: arr });
						removeRecord(arr);
					}}>
						<Glyphicon glyph="remove"/>
					</td>
				</tr>
				
				{(row.kids && row.showKids && Object.keys(row.kids).length > 0)
				&& <tr>
					<td colSpan={Object.keys(row.data).length+2}>
						<Table
							content={row.kids[Object.keys(row.kids)[0]].records}
							name={Object.keys(row.kids)[0]}
							removeRecord={(data) => {
								const arr = [...content];
								(data.length > 0)
									? arr[i].kids[Object.keys(row.kids)[0]].records = data
									: arr[i].kids = {};
								removeRecord(arr);
							}}
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