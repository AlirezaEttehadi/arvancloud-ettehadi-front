import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import {
  clearArticle,
  createArticle,
  editArticle,
  getArticle,
  getTags,
} from "../../redux/articles/action";

function Article({
  _createArticle,
  _getTags,
  tags,
  loading,
  _editArticle,
  _getArticle,
  article,
  _clearArticle,
}) {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [validated, setValidated] = useState(false);
  const [tag, setTag] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
    tags: [],
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const requestBody = {
      article: {
        title: formData.title,
        description: formData.description,
        body: formData.body,
        tagList: formData.tags,
      },
    };
    if (form.checkValidity() === true) {
      slug
        ? _editArticle(requestBody, navigate, slug)
        : _createArticle(requestBody, navigate);
    }
    setValidated(true);
  };
  useEffect(() => {
    _getTags();
  }, []);
  useEffect(() => {
    setFormData({
      ...formData,
      tags,
    });
  }, [tags]);
  useEffect(() => {
    if (slug) {
      _getArticle(slug);
    } else {
      _clearArticle();
    }
  }, [slug]);
  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title,
        description: article.description,
        body: article.body,
        tags: article.tags,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        body: "",
        tags: "",
      });
    }
  }, [article]);

  return (
    <div className="d-flex flex-column pt-3 px-3 w-100 vh-100">
      <h1 className="mb-4">New Article</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="d-flex flex-column flex-md-row">
          <div className="col-12 col-md-9 pl-0">
            <Form.Group
              controlId="formBasicTitle"
              onChange={(event) =>
                setFormData({ ...formData, title: event.target.value })
              }
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={formData.title}
              />
            </Form.Group>

            <Form.Group
              controlId="formBasicDescription"
              onChange={(event) =>
                setFormData({ ...formData, description: event.target.value })
              }
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={formData.description}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicBody"
              onChange={(event) =>
                setFormData({ ...formData, body: event.target.value })
              }
            >
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows="8"
                name="Body"
                value={formData.body}
              />
            </Form.Group>
          </div>
          <div className="col-12 col-md-3 pl-0">
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Tags</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="New tag"
                  onChange={(event) => setTag(event.target.value)}
                />
                <Button
                  type="button"
                  size="md"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      tags: [...formData.tags, tag],
                    });
                    setTag("");
                  }}
                >
                  Add
                </Button>
              </div>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
              <Form.Control as="select" htmlSize={10} custom>
                {formData?.tags?.map?.((tag, index) => {
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
    article: state.article.article,
    tags: state.article.tags,
    loading: state.global.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    _createArticle: (data, callback) => dispatch(createArticle(data, callback)),
    _editArticle: (data, callback, slug) =>
      dispatch(editArticle(data, callback, slug)),
    _getArticle: (data) => dispatch(getArticle(data)),
    _clearArticle: () => dispatch(clearArticle()),
    _getTags: () => dispatch(getTags()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);

Article.propTypes = {
  _createArticle: PropTypes.func,
  _getTags: PropTypes.func,
  tags: PropTypes.array,
  loading: PropTypes.bool,
  _editArticle: PropTypes.func,
  _getArticle: PropTypes.func,
  article: PropTypes.object,
  _clearArticle: PropTypes.func,
};
