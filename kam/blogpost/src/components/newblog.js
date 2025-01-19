import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Newblog = () => {
  return (
    <div className="newblog-container">
    <Form className="newblog-form">
      <h2>Create a New Blog</h2>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter the title" />
      </Form.Group>
      <Form.Group controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter the author's name" />
      </Form.Group>
      <Form.Group controlId="formBody">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Write your blog content" />
      </Form.Group>
      <Button type="button" className="submit-btn">
        Publish Blog
      </Button>
    </Form>
  </div>
  );
};
export default Newblog;
