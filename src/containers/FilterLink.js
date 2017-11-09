import { connect } from 'react-redux';
import Link from 'components/Link';
import {setVisibilityFilter} from 'actions/Actions';



const mapStateToProps = (state,ownProps)=>({
    active:state.visibilityFilter===ownProps.filter
})


const mapDispatchToProps = (dispatch,ownProps)=>({
    onClick:()=>{
        dispatch(setVisibilityFilter(ownProps.filter))
    }
})


const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link);


export default FilterLink;


























