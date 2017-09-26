import React from 'react';
import { Table as BTable, Glyphicon } from 'react-bootstrap';
import './style.css';

const Table = ({ content }) =>
	(<BTable bordered className="p-table">
		{ content.map((row, i) =>
			(<tbody key={`tbody_${i}`}>
			{ i===0 && <tr>
				<th />
				{ Object.keys(row.data).map((key, i) =>
					(<th key={`th_${i}`}>{ key }</th>)) }
			</tr> }
			<tr>
				{(row.kids && Object.keys(row.kids).length > 0)
				? <td>
					<Glyphicon glyph="triangle-bottom"/>
				</td> : <td /> }
				
				{ Object.values(row.data).map((value, i) =>
					(<td key={`td_${i}`}>{ value }</td>)) }
			</tr>
			
			{(row.kids && Object.keys(row.kids).length > 0)
			&& <tr>
				<td colSpan={Object.keys(row.data).length+1}>
					table ....
				</td>
			</tr>}
			</tbody>))
		}
	</BTable>);

Table.defaultProps = {
	content: []
};

export default Table;