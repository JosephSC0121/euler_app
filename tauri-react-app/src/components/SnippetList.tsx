import { useEffect } from "react";
import { readDir } from "@tauri-apps/api/fs";
import { desktopDir } from "@tauri-apps/api/path";
import { useSnippetStore } from "../store/snippetsStore";
import Snippetitem from "./SnippetItem";

function snippetList() {
  const setSnippetsNames = useSnippetStore((state) => state.setSnippetsNames);
  const snippetNames = useSnippetStore((state) => state.snippetsNames);

  useEffect(() => {
    async function loadFiles() {
      const desktopPath = await desktopDir();
      const result = await readDir(`${desktopPath}/taurifiles`);
      const filenames = result.map((file) => file.name!.split('.')[0]);
      setSnippetsNames(filenames);
    }
    loadFiles();
  }, []);

  return (
    <div>
      {snippetNames.map((snippetName) => (
        <Snippetitem snippetName={snippetName} key={snippetName}/>
      ))}
    </div>
  );
}

export default snippetList;
