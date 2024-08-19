'use client';

import { useState } from 'react';

import Link from 'next/link';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

import CreateModal from './create.modal';
import UpdateModal from './update.modal';
import DeleteModal from './delete.modal';

interface IProps {
  blogs: IBlog[] | undefined;
}

function AppTable(props: IProps) {
  const { blogs } = props;

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  return (
    <>
      <div
        className="my-3"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <h2>Table Blogs</h2>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add new
        </Button>
      </div>

      <Table bordered hover size="md">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{++index}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-1"
                    href={`/blogs/${item.id}`}
                  >
                    View
                  </Link>
                  <Button
                    variant="warning"
                    className="mx-1"
                    onClick={() => {
                      setBlog(item);
                      setShowModalUpdate(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-1"
                    onClick={() => {
                      setBlog(item);
                      setShowModalDelete(true);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />

      <UpdateModal
        showModalCreate={showModalUpdate}
        setShowModalCreate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      />

      <DeleteModal
        showModalCreate={showModalDelete}
        setShowModalCreate={setShowModalDelete}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
}

export default AppTable;
