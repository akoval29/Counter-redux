import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./reducer";
import { inc, dec, rdm, rst } from "./actions";

export const CounterScript = () => {
  const store = configureStore({ reducer });

  // витягнули з store сущності. тепер викристання без store.dispatch ...
  const { dispatch, subscribe, getState } = store;

  // підписка
  const update = () => {
    document.querySelector(".counter__flag").textContent = getState().value;
  };
  subscribe(update);

  // обробка кліків - вносим зміни в стор
  function incrValue() {
    dispatch(inc());
  }
  function decrValue() {
    dispatch(dec());
  }
  function randomValue() {
    const tmp = Math.floor(Math.random() * 99);
    dispatch(rdm(tmp));
  }
  function resetValue() {
    dispatch(rst());
  }

  // передаємо об'єкт з функціями !!!
  return {
    incrValue,
    decrValue,
    randomValue,
    resetValue,
  };
};
