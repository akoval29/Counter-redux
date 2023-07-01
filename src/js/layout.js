import { CounterScript } from "./rdxCounter.js";

// рендер верстки
export const Layout = () => {
  // приймаємо об'єкт з функціями з викликом CounterScript()
  const { incrValue, decrValue, randomValue, resetValue } = CounterScript();

  return (
    <section className="counter">
      <article className="counter__app">
        <div className="counter__title">Redux</div>
        <div className="counter__flag">10</div>
        <div className="counter__controls">
          <button className="counter__btn" onClick={incrValue}>
            +1
          </button>
          <button className="counter__btn" onClick={decrValue}>
            -1
          </button>
          <button className="counter__btn" onClick={randomValue}>
            Random
          </button>
          <button className="counter__btn" onClick={resetValue}>
            Reset
          </button>
        </div>
      </article>
    </section>
  );
};
