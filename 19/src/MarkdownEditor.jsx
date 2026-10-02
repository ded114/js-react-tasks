import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default function MarkdownEditor({ onContentChange }) {
  const editorRef = React.useRef(null);

  const handleChange = () => {
    const content = editorRef.current.getInstance().getMarkdown();
    onContentChange(content);
  };

  return (
    <Editor
      ref={editorRef}
      previewStyle="vertical"
      height="400px"
      initialEditType="markdown"
      useCommandShortcut={true}
      hideModeSwitch={true}
      onChange={handleChange}
    />
  );
}
// END
