import Example from './components/Example';

/**
 * useEffect được sử dụng khi ta muốn xử lý các side effect trong 1 functional component.
 * Ví dụ:
 * - Call API.
 * - Thêm/xóa các event listeners ('click', 'scroll', ...).
 * - Thao tác DOM trực tiếp.
 * - Gọi Web APIs (setTimeout, setInterval, ...).
 * - ...
 */
const App = () => {
  return (
    <>
      <Example />
    </>
  );
};

export default App;
