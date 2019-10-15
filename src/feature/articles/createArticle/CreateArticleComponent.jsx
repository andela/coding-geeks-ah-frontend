/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import createArticle from './createArticleAction';
import editorConfigs from '../../../app/helpers/ckeditorConfig';
import 'react-toastify/dist/ReactToastify.css';
import './createArticle.scss';

export class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      tags: '',
      category: '',
      body: ''
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const {
      title, description, tags, category, body
    } = this.state;

    const { createArticle } = this.props;
    event.preventDefault();
    createArticle({
      title,
      description,
      tags,
      category,
      body
    });
  };

  render() {
    const {
      title, description, tags, category, body
    } = this.state;
    return (
      <div className="mainDiv">
        <div className="input input--form">
          <input
            className="input input__title"
            type="text"
            name="title"
            value={title}
            onChange={this.onChange}
            placeholder="Enter title ...."
          />
        </div>
        <div className="input input--form">
          <input
            className="input input__description"
            type="text"
            name="description"
            value={description}
            onChange={this.onChange}
            placeholder="Give a descriptive summary"
          />
        </div>
        <div className=" input input--form">
          <input
            className="input input__tags"
            type="text"
            name="tags"
            value={tags}
            onChange={this.onChange}
            placeholder="Enter tags for your Article"
          />
        </div>
        <div className="input input--form">
          <input
            className="input input__category"
            type="text"
            name="category"
            value={category}
            onChange={this.onChange}
            placeholder="Give a Category"
          />
        </div>
        <div className="input input--form">
          <CKEditor
            className="input input__body"
            editor={ClassicEditor}
            data={body}
            onChange={(event, editor) => {
              const data = editor.getData();
              this.setState({ body: data });
            }}
            config={editorConfigs}
          />
          <div className="btn btn--submit">
            <button className="btn btn__create" type="submit" onClick={this.handleSubmit}>
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artcile: state.article
});

export default connect(
  mapStateToProps,
  { createArticle }
)(CreateArticle);
