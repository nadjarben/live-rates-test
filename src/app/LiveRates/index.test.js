import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store";
import LiveRates from "./";


const ShallowLiveRates = (
  <Provider store={store}>
    <LiveRates />
  </Provider>
);

describe("LiveRates", () => {
  test("Does match snapshots", () => {
    expect(ShallowLiveRates).toMatchSnapshot();
  });

  test("Does LiveRates be defined", () => {
    expect(ShallowLiveRates).toBeDefined();
  });
});
