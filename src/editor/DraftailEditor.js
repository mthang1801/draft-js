import React,{useState, useRef} from 'react'
import Editor, {createEditorStateWithText} from "@draft-js-plugins/editor"
import createEmojiPlugin from "@draft-js-plugins/emoji"
const emojiPlugin = createEmojiPlugin()
const {EmojiSelect, EmojiSuggestions} = emojiPlugin;

const MyEditor = () => {
  const text = `Cool, we can have all sorts of Emojis here. 🙌
🌿☃️🎉🙈 aaaand maybe a few more here 🐲☀️🗻 Quite fun!`;
  const initEditorState = createEditorStateWithText(text)
  const [editorState, setEditorState] = useState(initEditorState);
  const editorRef = useRef(null)
  const onChange=  newState => {
   setEditorState(newState)
  }
  return (
    <div>
      <Editor
        editorState={editorState}
        onChange={onChange}
        plugins={[emojiPlugin]}       
      />
      <EmojiSuggestions/>
      <EmojiSelect/>
    </div>
  )
}

export default MyEditor
