'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

const YoutubeCompnt = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push('/');
  };

  return (
    <>
      <h1>Youtube page</h1>
      <div>
        <Button variant="primary" onClick={() => handleBtn()}>
          Back Home
        </Button>
      </div>
    </>
  );
};

export default YoutubeCompnt;
