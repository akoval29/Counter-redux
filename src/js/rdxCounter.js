import { configureStore, bindActionCreators } from "@reduxjs/toolkit";

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

  const { incDispatch, decDispatch, rdmDispatch, rstDispatch } =
    bindActionCreators(
      {
        incDispatch: inc,
        decDispatch: dec,
        rdmDispatch: rdm,
        rstDispatch: rst,
      },
      dispatch
    );

  // обробка кліків - вносим зміни в стор
  function incrValue() {
    incDispatch();
  }
  function decrValue() {
    decDispatch();
  }
  function randomValue() {
    const value = Math.floor(Math.random() * 99);
    rdmDispatch(value);
  }
  function resetValue() {
    rstDispatch();
  }

  // передаємо об'єкт з функціями !!!
  return {
    incrValue,
    decrValue,
    randomValue,
    resetValue,
  };
};
