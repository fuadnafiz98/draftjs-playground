import React from "react";
import {
  Editor,
  EditorState,
  CompositeDecorator,
  DraftDecorator,
} from "draft-js";
import "draft-js/dist/Draft.css";
import "./draft.css";

function UltimateEditor() {
  const handleStrategy: DraftDecorator["strategy"] = (
    contetBlock,
    callback,
    contentState,
  ) => {};

  const handleComponent: DraftDecorator["component"] = () => {};

  const compositeDecorator = new CompositeDecorator([
    {
      strategy: handleStrategy,
      component: handleComponent,
    },
  ]);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty(),
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

function App() {
  return (
    <div>
      <h2>Learning Draftjs</h2>
      <div className="border-2 border-gray-200 h-64">
        <UltimateEditor />
      </div>
    </div>
  );
}

export default App;
