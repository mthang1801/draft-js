import React, { useCallback, useMemo, useState } from "react";
import { EditorState } from "draft-js";
import createMentionPlugin from "@draft-js-plugins/mention";
import Editor from "@draft-js-plugins/editor";

const MentionsRemoteData = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [open, setOpen] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const { plugins, MentionSuggestions } = useMemo(() => {    
    const mentionsPlugin = createMentionPlugin({
      mentionComponent(mentionProps){
        return <span className={mentionProps.className} onClick={() => alert("Clicked")}>
          {mentionProps.children}
        </span>
      }
    });
    const { MentionSuggestions } = mentionsPlugin;
    const plugins = [mentionsPlugin];
    return { MentionSuggestions, plugins };
  }, []);

  const onOpenChange = useCallback((_open) => setOpen(_open), []);
  const onSearchChange = useCallback(({ value }) => {
    fetch("https://www.draft-js-plugins.com/data/mentionsA.json")
      .then((response) => response.json())
      .then((json) => setSuggestions(json));
  });
  console.log(open);
  return (
    <div className="wrapper">
      <h2>DraftJS mention data remote</h2>
      <Editor
        editorState={editorState}
        editorKey={"editor"}
        onChange={setEditorState}
        plugins={plugins}
      />
      <MentionSuggestions
        open={open}
        onOpenChange={onOpenChange}
        onSearchChange={onSearchChange}
        suggestions={suggestions}
      />
    </div>
  );
};

export default MentionsRemoteData;
