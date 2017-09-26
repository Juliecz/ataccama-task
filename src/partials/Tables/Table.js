import React from 'react';
import { Table as BTable, Glyphicon } from 'react-bootstrap';
import Table from '../Table/Table';

const Tables = ({ data }) =>
	(data && data.length > 0
	? (<Table content={data}/>)
	: (<div> Data not found </div>));

Tables.defaultProps = {
	data: []
};

export default Tables;