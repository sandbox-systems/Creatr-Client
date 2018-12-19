import React, { Component } from "react";
import { EditorState } from "draft-js";
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ContentEditor = ({ onChange, editorState }) => (
  // onChange = (editorState) => this.setState({editorState, content:editorState.getCurrentContent()});
  <Editor
    editorState={editorState}
    wrapperClassName="editor-container"
    editorClassName="editor-body"
    toolbarClassName="editor-toolbar"
    onEditorStateChange={onChange}
    toolbar={{
      inline: { inDropdown: true },
      list: { inDropdown: true },
      textAlign: { inDropdown: true },
      link: { inDropdown: true },
      history: { inDropdown: true }
    }}
  />
);

export default subscribe(ContentEditor, { adminStore: AdminContainer });
