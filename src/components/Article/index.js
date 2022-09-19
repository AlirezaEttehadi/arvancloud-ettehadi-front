import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createArticle } from "../../redux/articles/action";

function Article({ _createArticle }) {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      _createArticle({
        title,
        description,
        body,
        tags,
      });
    }
    setValidated(true);
  };
  return (
    <div className="d-flex flex-column pt-3 px-3 w-100 vh-100">
      <h1 className="mb-4">New Article</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="d-flex flex-column flex-md-row">
          <div className="col-12 col-md-9 pl-0">
            <Form.Group
              controlId="formBasicTitle"
              onChange={(event) => setTitle(event.target.value)}
            >
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group
              controlId="formBasicDescription"
              onChange={(event) => setDescription(event.target.value)}
            >
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" />
            </Form.Group>
            <Form.Group
              controlId="formBasicBody"
              onChange={(event) => setBody(event.target.value)}
            >
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" rows="8" name="Body" />
            </Form.Group>
          </div>
          <div className="col-12 col-md-3 pl-0">
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Tags</Form.Label>
              <Form.Control type="text" placeholder="New tag" />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
              <Form.Control as="select" htmlSize={10} custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.article.articles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    _createArticle: (data) => dispatch(createArticle(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
