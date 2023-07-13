import { Editor } from "@monaco-editor/react";
import { useSnippetStore } from "../store/snippetsStore";
import { useEffect, useState } from "react";
import { writeTextFile } from "@tauri-apps/api/fs"
import { desktopDir } from "@tauri-apps/api/path"

function SnippetEditor() {
  const SelectedSnippet = useSnippetStore((state) => state.selectedSnippet);
  const [text, setText] = useState<string|undefined>('')
  useEffect(()=>{
    if(!SelectedSnippet) return;
    const saveText = setTimeout(async()=>{
      console.log("saving")
      const desktopPath = await desktopDir()
      await writeTextFile(`${desktopPath}/taurifiles/${SelectedSnippet.name}.js`, text ?? "")
    }, 1000)

    return() => {
      clearTimeout(saveText)
    }
  },[text])
  return (
    <>
      {SelectedSnippet ? (
        <Editor
          theme="vs-dark"
          defaultLanguage="javascript"
          options={{
            fontSize: 20,
          }}
          onChange={(value) => setText(value)}
          value={SelectedSnippet?.code?? ""}
        />
      ) : (
        <h1>No snippet selected</h1>
      )}
    </>
  );
}

export default SnippetEditor;
