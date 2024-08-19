'use client';

import useSWR, { Fetcher } from 'swr';

import Link from 'next/link';
import Card from 'react-bootstrap/Card';

const fetcher: Fetcher<IBlog> = (url: string) =>
  fetch(url).then((res) => res.json());

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="mt-3">
      <Link href={'/blogs'}>Go Back</Link>
      <Card className="text-center my-4 ">
        <Card.Header>
          <h3>{data?.title}</h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>{data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Author: {data?.author}</Card.Footer>
      </Card>
    </div>
  );
};

export default ViewDetailBlog;
