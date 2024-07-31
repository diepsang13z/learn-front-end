import { useState, useEffect } from 'react';

export const ChildComponent = ({ getData }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getData('comments')
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setComments(users);
      });
  }, [getData]);

  return (
    <>
      <p>Comments:</p>
      <p>{JSON.stringify(comments)}</p>
    </>
  );
};
