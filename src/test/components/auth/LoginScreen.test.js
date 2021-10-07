import "@testing-library/jest-dom";
import thunk from "redux-thunk";
import configureStore from "mock-store";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { LoginScreen } from "../../../components/auth/LoginScreen";

const middlewares = [thunk];

const mockStore = configureStore(middlewares); //aca hago un store falso
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
  test("Debe renderizarse correctamente", () => {});
});
