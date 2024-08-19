'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (val: boolean) => void;
}

function CreateModal(props: IProps) {
  const { showModalCreate, setShowModalCreate } = props;

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = () => {
    const payload = {
      title,
      author,
      content,
    };

    if (!payload.title) {
      toast.error('Not empty title !');
      return;
    }

    if (!payload.author) {
      toast.error('Not empty author !');
      return;
    }

    if (!payload.content) {
      toast.error('Not empty content !');
      return;
    }

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success('Create succeed !...~');
          handleCloseModal();
          mutate('http://localhost:8000/blogs');
        }
      });
  };

  const handleCloseModal = () => {
    setTitle('');
    setAuthor('');
    setContent('');
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
          <Modal.Title>Add new a blog</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Create
          </Button>
          <Button variant="danger" onClick={() => handleCloseModal()}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
