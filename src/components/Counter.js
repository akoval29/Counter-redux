import { inc, dec, rdm, rst } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <section className="counter">
      <article className="counter__app">
        <div className="counter__title">Redux</div>
        <div className="counter__flag">{counter}</div>
        <div className="counter__controls">
          <button className="counter__btn" onClick={() => dispatch(inc())}>
            +1
          </button>
          <button className="counter__btn" onClick={() => dispatch(dec())}>
            -1
          </button>
          <button className="counter__btn" onClick={() => dispatch(rdm())}>
            Random
          </button>
          <button className="counter__btn" onClick={() => dispatch(rst())}>
            Reset
          </button>
        </div>
      </article>
    </section>
  );
};
export default Counter;
