import React from "react";
import RichTextEditor from "./editor/rich-text/richtTextEditorWysiwyg"
import EmojiEditor from "./editor/plugins/emoji/emoji";
import BasicMentionEditor from "./editor/plugins/mentions/mention.basic";
import RemoteDataMentionsEditor from "./editor/plugins/mentions/mentions.remotedata";
import LinkifyEditor from "./editor/plugins/linkify/linkify";
import HashtagEditor from "./editor/plugins/hashtag/hashtag";
import ImageEditor from "./editor/plugins/image/image";
import VideoEditor from "./editor/plugins/video/video";
import "./App.css";
import "@draft-js-plugins/mention/lib/plugin.css";
import "@draft-js-plugins/hashtag/lib/plugin.css";
const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Draftjs Demo Example</h1>
      <RichTextEditor/>
      <EmojiEditor />
      <BasicMentionEditor />
      <RemoteDataMentionsEditor />
      <LinkifyEditor />
      <HashtagEditor />
      <ImageEditor />
      <VideoEditor/>
    </>
  );
};

export default App;
