import { useState, useRef, useEffect } from 'react';

/**
 * useRef() và useState() đều có thể giữ lại giá trị của 1 biến
 * giữa những lần rerender components.
 *
 * Tuy nhiên:
 * - useState() gây ra sự rerender components khi giá trị state
 * được cập nhật.
 * - useRef() không gây ra sự rerender.
 */
function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const ref = useRef(null);

  const handleClick = () => {
    setCount((count) => count + 1);
    countRef.current = countRef.current + 1;
  };

  // // Stale Closeure
  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(count + 1);
  //     console.log({ count });
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     countRef.current = countRef.current + 1;
  //     console.log({ countRef: countRef.current });
  //   }, 1000);
  // }, []);

  // // Reference DOM
  // console.log(ref);
  // useEffect(() => {
  //   ref.current.focus();
  // }, []);

  return (
    <>
      <p>Count {count}</p>
      <p>CountRef {countRef.current}</p>
      <button onClick={handleClick}>Add</button>
      <br />
      <input type="text" ref={ref} />
      <button>Click me!</button>
    </>
  );
}

export default App;
