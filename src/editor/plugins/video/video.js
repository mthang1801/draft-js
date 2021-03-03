import React, {useState} from 'react'
import {EditorState} from "draft-js"
import createVideoPlugin from "@draft-js-plugins/video"
import AddVideoUrl from "./AddVideoUrl"
import Editor from "@draft-js-plugins/editor"
const Video = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const videoPlugin = createVideoPlugin();

  return (
    <div className="wrapper">
      <h2 style={{color: "#3949ab"}}>Draftjs Video</h2>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        plugins={[videoPlugin]}        
      />
      <AddVideoUrl
        editorState={editorState}
        onChange={setEditorState}
        modifier={videoPlugin.addVideo}
      />
    </div>
  )
}

export default Video
