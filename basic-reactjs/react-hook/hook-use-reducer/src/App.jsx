import { useReducer, useState } from 'react';

/**
 * useReducer() được sử dụng khi state của bạn phụ thuộc vào các logic cập nhật
 * phức tạp hoặc khi state được cập nhật bởi nhiều hành động khác nhau.
 */
const reducer = (state, action) => {
  switch (action) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch('ADD')}>Add</button>
      <button onClick={() => dispatch('MINUS')}>Minux</button>
      <button onClick={() => dispatch('RESET')}>Reset</button>
    </>
  );
}

export default App;
