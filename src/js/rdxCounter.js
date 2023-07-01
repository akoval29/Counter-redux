import { configureStore } from "@reduxjs/toolkit";

export const CounterScript = () => {
  const reducer = (state = 10, action) => {
    switch (action.type) {
      case "INC":
        return state + 1;
      case "DEC":
        return state - 1;
      case "RST":
        return action.payload;
      case "RDM":
        return action.payload;
      default:
        return state;
    }
  };
  const store = configureStore({ reducer });

  // підписка
  const update = () => {
    document.querySelector(".counter__flag").textContent = store.getState();
  };
  store.subscribe(update);

  // action creators
  const inc = () => ({ type: "INC" });
  const dec = () => ({ type: "DEC" });
  const rdm = (tmp) => ({ type: "RDM", payload: tmp });
  const rst = () => ({ type: "RST", payload: 10 });

  // обробка кліків - вносим зміни в стор
  function incrValue() {
    store.dispatch(inc());
  }
  function decrValue() {
    store.dispatch(dec());
  }
  function randomValue() {
    const tmp = Math.floor(Math.random() * 99);
    store.dispatch(rdm(tmp));
  }
  function resetValue() {
    store.dispatch(rst());
  }

  // передаємо об'єкт з функціями !!!
  return {
    incrValue,
    decrValue,
    randomValue,
    resetValue,
  };
};
