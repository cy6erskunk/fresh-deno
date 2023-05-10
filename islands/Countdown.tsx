// islands/Countdown.tsx

import { useState } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en-US");

// The target date is passed as a string instead of as a `Date`, because the
// props to island components need to be JSON (de)serializable.
export default function Countdown(props: {target: string}) {
  const target = new Date(props.target);
  const [now] = useState(new Date());

  if (now > target) {
    return (<span>🐼</span>);
  } else {
    return (<span>⏰</span>);
  }
}