'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

const FacebookCompnt = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push('/');
  };

  return (
    <>
      <h1>Facebook page</h1>
      <div>
        <Button variant="primary" onClick={() => handleBtn()}>
          Back Home
        </Button>
      </div>
    </>
  );
};

export default FacebookCompnt;
