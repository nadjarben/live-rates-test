import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLiveRates,
  updateLiveRates,
} from "../../store/actions/liveRates.action";
import LiveRateInformations from "./LiveRateInformations";
import Loader from "../../components/Loader";
import Nofication from "../../components/Notification";
import { Wrapper } from "./style";

const LiveRates = () => {
  const dispatch = useDispatch();
  const liveRates = useSelector((state) => state.liveRates);

  React.useEffect(() => {
    dispatch(fetchLiveRates());
  }, [dispatch]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateLiveRates());
      return () => clearInterval(interval);
    }, 10000);
  }, [dispatch]);

  const { liveRatesList, isLoading, errorMessage } = liveRates;

  const renderTableHeader = React.useCallback(() => {
    let header = Object.keys(liveRatesList[0]);
    return header.map((key, index) => (
      <th key={index}>
        {key !== "timestamp" ? key.toUpperCase() : "LAST UPDATED"}
      </th>
    ));
  }, [liveRatesList]);

  return (
    <Wrapper>
      <h1>Live Rates</h1>
      {errorMessage && <Nofication isError message={errorMessage} />}
      {isLoading ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>{liveRatesList[0] && renderTableHeader()}</tr>
          </thead>
          <tbody>
            {liveRatesList.map((liveRate, index) => (
              <LiveRateInformations key={index} liveRate={liveRate} />
            ))}
          </tbody>
        </table>
      )}
    </Wrapper>
  );
};

export default LiveRates;
