import React, { Component } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
// // import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ContentEditor = ({ onChange, editorState }) => (
  <ReactQuill className="editor" value={editorState} onChange={onChange} />
);

export default subscribe(ContentEditor, { adminStore: AdminContainer });
