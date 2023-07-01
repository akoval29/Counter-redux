import { configureStore, bindActionCreators } from "@reduxjs/toolkit";

import { reducer } from "./reducer";
import * as actions from "./actions";

export const CounterScript = () => {
  const store = configureStore({ reducer });

  // витягнули з store сущності. тепер викристання без store.dispatch ...
  const { dispatch, subscribe, getState } = store;

  // підписка
  const update = () => {
    document.querySelector(".counter__flag").textContent = getState().value;
  };
  subscribe(update);

  const { inc, dec, rdm, rst } = bindActionCreators(actions, dispatch);

  // обробка кліків - вносим зміни в стор
  function incrValue() {
    inc();
  }
  function decrValue() {
    dec();
  }
  function randomValue() {
    const value = Math.floor(Math.random() * 99);
    rdm(value);
  }
  function resetValue() {
    rst();
  }

  // передаємо об'єкт з функціями !!!
  return {
    incrValue,
    decrValue,
    randomValue,
    resetValue,
  };
};
