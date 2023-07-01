import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, rdm, rst }) => {
  return (
    <section className="counter">
      <article className="counter__app">
        <div className="counter__title">Redux</div>
        <div className="counter__flag">{counter}</div>
        <div className="counter__controls">
          <button className="counter__btn" onClick={inc}>
            +1
          </button>
          <button className="counter__btn" onClick={dec}>
            -1
          </button>
          <button className="counter__btn" onClick={rdm}>
            Random
          </button>
          <button className="counter__btn" onClick={rst}>
            Reset
          </button>
        </div>
      </article>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.value,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

export default connect(mapStateToProps, actions)(Counter);
