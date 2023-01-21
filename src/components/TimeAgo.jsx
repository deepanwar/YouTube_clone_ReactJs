import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";

const TimeAgo = ({ timestamp }) => {
  let timeago = "";
  if (timestamp) {
    const time = parseISO(timestamp);
    timeago = formatDistanceToNow(time);
  } else {
    timeago = "1 month";
  }
  return <span className="text-neutral-400 text-xs">{timeago} ago</span>;
};

export default TimeAgo;
