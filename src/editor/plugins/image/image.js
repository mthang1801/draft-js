import React,{useState} from 'react'
import Editor from "@draft-js-plugins/editor"
import {EditorState} from "draft-js"
import createImagePlugin from "@draft-js-plugins/image"
import AddImage from "./AddImage"
const Image = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const imagePlugin = createImagePlugin()
  return (
    <div className="wrapper">
      <h2 style={{color:"indigo"}}>Draftjs Image</h2>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        plugins={[imagePlugin]}
      />
      <AddImage
        editorState={editorState}
        onChange={setEditorState}
        modifier={imagePlugin.addImage}
      />
    </div>
  )
}

export default Image
