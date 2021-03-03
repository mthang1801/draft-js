import React,{useState} from 'react'
import Editor, {createEditorStateWithText} from "@draft-js-plugins/editor"
import createEmojiPlugin from "@draft-js-plugins/emoji"
import "../../../../node_modules/@draft-js-plugins/emoji/lib/plugin.css";

const emojiPlugin = createEmojiPlugin({
  useNativeArt: false,
  onSearchChange : searchKey => {
    console.log(searchKey)
  }
});
const {EmojiSelect, EmojiSuggestions} = emojiPlugin
const Emoji = () => {
  const text = `Cool, we can have all sorts of Emojis here. 🙌
  🌿☃️🎉🙈 aaaand maybe a few more here 🐲☀️🗻 Quite fun!`;
  const initEditorState = createEditorStateWithText(text);
  const [editorState, setEditorState] = useState(initEditorState);
  const onChangeEmoji = newState => {
    setEditorState(newState)
  }
  return (
    <div className="wrapper">
      <h2>Draft.js Emoji</h2>
      <Editor
        editorState={editorState}
        plugins={[emojiPlugin]}
        onChange={onChangeEmoji}
      />
      <EmojiSuggestions/>
      <EmojiSelect/>
    </div>
  )
}

export default Emoji
