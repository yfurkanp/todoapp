import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";


const NoteForm = ({ createNote }) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitle = (e) => { 
    setTitle(e.target.value);

  }

  const handleDesc = (e) => { 
    setDesc(e.target.value);
  }

  return (

    <>
      <Form.Group className="mb-3">
        <Form.Label>Başlık</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitle} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Açıklama</Form.Label>
        <Form.Control as="textarea" rows={3} value={desc} onChange={handleDesc} />
      </Form.Group>

      <Button
        variant="warning"
        onClick={() =>
          createNote({
            title: title,
            body: desc,
            userId: 1,
          })
        }
      >
        Ekle
      </Button>
    </>

  );
};

export default NoteForm;