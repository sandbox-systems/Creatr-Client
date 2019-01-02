import React, { Component } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ContentView = ({ data }) => (
  <ReactQuill 
  readOnly
    toolbar="false"
    className="editor" 
    value={data} 
  />
);

export default subscribe(ContentView, { adminStore: AdminContainer });
