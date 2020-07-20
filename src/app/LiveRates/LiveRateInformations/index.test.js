import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../store";
import LiveRateInformations from "./";


const ShallowLiveRateInformations = (
  <Provider store={store}>
    <LiveRateInformations />
  </Provider>
);

describe("LiveRateInformations", () => {
  test("Does match snapshots", () => {
    expect(ShallowLiveRateInformations).toMatchSnapshot();
  });

  test("Does LiveRateInformations be defined", () => {
    expect(ShallowLiveRateInformations).toBeDefined();
  });
});
