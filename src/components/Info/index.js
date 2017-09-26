import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import InfoComponent from './Info';

const mapStateToProps = (state) => ({
	data: state.data
});

const mapDispatchToProps = (dispatch) => ({
	removeRecord: (data) => dispatch(actions.removeRecord(data))
});

const Info = connect(mapStateToProps, mapDispatchToProps)(InfoComponent);
export default Info;