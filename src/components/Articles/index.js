import React, { useState, useEffect } from "react";
import TableComponent from "./TableComponent";
import TablePagination from "./TablePagination";
import DeleteModal from "./DeleteModal";
import { connect } from "react-redux";
import { getArticles } from "../../redux/articles/action";

function Articles({ _getArticles, articles }) {
  const [deleleModalState, setDeleteModalState] = useState({
    isOpen: false,
    slug: null,
  });
  useEffect(() => {
    _getArticles();
  }, []);

  return (
    <div className="d-flex flex-column pt-3 px-3 w-100 vh-100">
      <h1 className="mb-4">All Posts</h1>
      <TableComponent
        articles={articles}
        setDeleteModalState={setDeleteModalState}
      />
      <TablePagination />
      <DeleteModal
        show={deleleModalState.isOpen}
        id={deleleModalState.id}
        setDeleteModalState={setDeleteModalState}
        onHide={() => setDeleteModalState({ isOpen: false, slug: null })}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return { articles: state.article.articles };
}

function mapDispatchToProps(dispatch) {
  return {
    _getArticles: (data) => dispatch(getArticles(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
