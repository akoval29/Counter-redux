import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./reducer";
import { inc, dec, rdm, rst } from "./actions";

export const CounterScript = () => {
  const store = configureStore({ reducer });

  // підписка
  const update = () => {
    document.querySelector(".counter__flag").textContent =
      store.getState().value;
  };
  store.subscribe(update);

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
