// islands/Countdown.tsx

import { useEffect, useState } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en-US");

// The target date is passed as a string instead of as a `Date`, because the
// props to island components need to be JSON (de)serializable.
export default function Countdown(props: {target: string}) {
  const target = new Date(props.target);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow((now) => {
        if (now >= target) {
          clearInterval(timer);
        }
        return new Date();
      });
      return () => clearInterval(timer);
    }, 500)
  }, [props.target])

  if (now >= target) {
    return (<span>🐼</span>);
  } else {
    return (<span>{Math.floor((target.getTime() - now.getTime())/1000)}</span>);
  }
}