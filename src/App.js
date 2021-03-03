import React from 'react'
import EmojiEditor from "./editor/plugins/emoji/emoji"
import BasicMentionEditor from "./editor/plugins/mentions/mention.basic"
import RemoteDataMentions from "./editor/plugins/mentions/mentions.remotedata"
import "./App.css";
import '@draft-js-plugins/mention/lib/plugin.css';
const App = () => {
  return (
    <>
    <EmojiEditor/>
    <BasicMentionEditor/>
    <RemoteDataMentions/>
    </>
  )
}

export default App
