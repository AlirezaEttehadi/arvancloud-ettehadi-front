import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createArticle,
  editArticle,
  getTags,
} from "../../redux/articles/action";

function Article({ _createArticle, _getTags, tags, loading, _editArticle }) {
  const { slug } = useParams();
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [localTags, setLocalTags] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      slug
        ? _editArticle(
            {
              article: {
                title,
                description,
                body,
                tags: localTags,
              },
            },
            navigate,
            slug
          )
        : _createArticle(
            {
              article: {
                title,
                description,
                body,
                tags: localTags,
              },
            },
            navigate
          );
    }
    setValidated(true);
  };
  useEffect(() => {
    _getTags();
  }, []);

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
                {tags?.map((tag, index) => {
                  return <option key={index}>{tag}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="mr-1"
            />
          )}
          Submit
        </Button>
      </Form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.article.articles,
    tags: state.article.tags,
    loading: state.global.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    _createArticle: (data, callback) => dispatch(createArticle(data, callback)),
    _editArticle: (data, callback, slug) =>
      dispatch(editArticle(data, callback, slug)),
    _getTags: () => dispatch(getTags()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
