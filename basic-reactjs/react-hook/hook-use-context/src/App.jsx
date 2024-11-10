import { useContext } from 'react';
import Content from './components/Content';
import { ThemeContext } from './contexts/ThemeContext';
import './App.css';

/**
 * ComponentA -> ComponentB -> ComponentC
 * Problem:
 *  ComponentA -> ComponentC ???
 *  ComponentB đóng vai trò trung gian.
 *  Nếu bỏ ComponentB thì sao?
 *  -> Cần phải sửa logic.
 *
 * useContext() cung cấp một cách để truyền dữ liệu qua cây
 * component mà không cần phải truyền prop qua từng cấp của cây.
 *
 * Sử dụng useContext():
 *  1. Create Context.
 *  2. Provider - Cung cấp dữ liệu.
 *  3. Consumer - Nhận dữ liệu.
 */
function App() {
  const context = useContext(ThemeContext);

  return (
    <div>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}

export default App;
