'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (val: boolean) => void;
  blog: IBlog | null;
  setBlog: (blog: IBlog | null) => void;
}

function DeleteModal(props: IProps) {
  const { showModalCreate, setShowModalCreate, blog, setBlog } = props;

  const [id, setId] = useState<number>();

  useEffect(() => {
    if (blog && blog.id) {
      setId(blog.id);
    }
  }, [blog]);

  const handleSubmit = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.error(`Blog ${id} has deleted!`);
          handleCloseModal();
          mutate('http://localhost:8000/blogs');
        }
      });
  };

  const handleCloseModal = () => {
    setBlog(null);
    setShowModalCreate(false);
  };

  return (
    <>
      <Modal
        show={showModalCreate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete blog</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                Do you want to delete this blog (ID = {id}) ?
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => handleSubmit()}>
            OK
          </Button>
          <Button variant="danger" onClick={() => handleCloseModal()}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
