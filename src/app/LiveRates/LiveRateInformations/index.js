import React from "react";
import { convertFormatDate } from "../../../helpers";

const LiveRateInformations = ({
  liveRate: { 
    currency, 
    rate, 
    bid, 
    ask, 
    low, 
    high, 
    open, 
    close, 
    timestamp 
  },
}) => {
  const relativeDate = React.useCallback(() => {
    return convertFormatDate(timestamp)
  }, [timestamp])

  return (
    <tr>
      <td>{currency}</td>
      <td>{rate}</td>
      <td>{bid}</td>
      <td>{ask}</td>
      <td>{high}</td>
      <td>{low}</td>
      <td>{open}</td>
      <td>{close}</td>
      <td>{relativeDate()}</td>
    </tr>
  );
};

export default LiveRateInformations;
