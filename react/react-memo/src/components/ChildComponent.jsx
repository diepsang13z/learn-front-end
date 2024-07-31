import React from 'react';

const ChildComponent = ({ name, getUsers }) => {
  console.log('Render ChildComponent...');
  return <div>ChildComponent for {name}</div>;
};

export default React.memo(ChildComponent, (prevProps, nextProps) => {
  // Custom comparison - Default shallow comparison
  // Nếu false component sẽ rerender
  return prevProps.name === nextProps.name;
});
