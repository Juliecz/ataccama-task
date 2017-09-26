import { connect } from 'react-redux';
import InfoComponent from './Info';

const mapStateToProps = (state) => ({
	data: state.data
});

const mapDispatchToProps = (dispatch) => ({});

const Info = connect(mapStateToProps, mapDispatchToProps)(InfoComponent);
export default Info;