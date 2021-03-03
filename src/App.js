import React from 'react'
import EmojiEditor from "./editor/plugins/emoji/emoji"
import BasicMentionEditor from "./editor/plugins/mentions/mention.basic"
import RemoteDataMentionsEditor from "./editor/plugins/mentions/mentions.remotedata"
import LinkifyEditor from "./editor/plugins/linkify/linkify"
import "./App.css";
import '@draft-js-plugins/mention/lib/plugin.css';

const App = () => {  
  return (
    <>
    <h1 style={{textAlign:"center"}}>Draftjs Demo Example</h1>
    <EmojiEditor/>
    <BasicMentionEditor/>
    <RemoteDataMentionsEditor/>
   <LinkifyEditor/> 
    </>
  )
}

export default App
