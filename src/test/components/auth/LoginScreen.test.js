import React from "react";
import "@testing-library/jest-dom";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";
import { LoginScreen } from "../../../components/auth/LoginScreen";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);
const initialState = {};

const store = mockStore(initialState);
store.dispatch = jest.fn(); //funcion o de simulacion

const wrapper = mount(
  //mock fake en el que mandare el store
  <Provider store={store}>
    <LoginScreen />
  </Provider>
);

describe("Pruebas en el Login Screan", () => {
  test("Debe renderizarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
