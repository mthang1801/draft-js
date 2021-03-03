import React, {useState} from 'react'
import Editor from "@draft-js-plugins/editor";
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import {EditorState} from "draft-js"
// When used in combination with the linkify plugin make sure the hashtag plugin is listed
// afterwards in the plugins list to avoid URL hashes being styled as hashtags
// e.g. [linkifyPlugin, hashtagPlugin]
const Hashtag = () => {
  const hashtagPlugin = createHashtagPlugin();
  const [editorState, setEditorState] = useState(()=> EditorState.createEmpty());
  const onChange = value => {
    console.log(value)
    setEditorState(value)
  }
  return (
    <div className="wrapper">
      <h2>Draftjs HashTag</h2>
      <Editor 
        editorState={editorState}
        onChange={onChange}
        plugins={[hashtagPlugin]}
      />
    </div>
  )
}

export default Hashtag
