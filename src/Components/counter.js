import React from 'react';
// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as actions from '../actions';


const Counter = ({counter, inc, dec,rnd}) => {
    return (
      <div className="jumbotron">
        <h2>{counter}</h2>
        <button 
          onClick={dec} id="dec" 
          className="btn btn-primary btn-lg">
              DEC
        </button>
        <button onClick={inc} id="inc" className="btn btn-primary btn-lg">INC</button>
        <button onClick={rnd} id="rnd" className="btn btn-primary btn-lg">RND</button>
      </div>
    )
}


const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

export default connect(mapStateToProps, /*mapDispatchToProps*/ actions)(Counter);