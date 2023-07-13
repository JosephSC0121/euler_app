import { useSnippetStore } from "../store/snippetsStore";
import {twMerge} from 'tailwind-merge'
import {readTextFile,removeFile} from '@tauri-apps/api/fs'
import {desktopDir, join} from '@tauri-apps/api/path'
interface Props {
  snippetName: string;
}

function Snippetitem({ snippetName }: Props) {
  const setSelectedSnippet= useSnippetStore(state => state.setSelectedSnippet);
  const SelectedSnippet = useSnippetStore(state => state.selectedSnippet);
  const removeSnippetName = useSnippetStore(state => state.removeSnippetName)
  const handleDelete = async (snippetName: string) => {
    const accept =  await window.confirm('Seguro?')
    if (!accept) return
    const desktopPath = await desktopDir()
    const filePath = await join(desktopPath, 'taurifiles', `${snippetName}.js`)
    await removeFile(filePath)
    removeSnippetName(snippetName)
  }
  return (
    <div className={twMerge("py-2 px-4 hover:bg-neutral-900 hover:cursor-pointer flex justify-between", SelectedSnippet?.name === snippetName ? "bg-sky-500": "")}
      onClick={async() => {
        const desktopPath = await desktopDir()
        const filePath = await join(desktopPath, 'taurifiles', `${snippetName}.js`)
        const snippet = await readTextFile(filePath)
        setSelectedSnippet({name: snippetName, code:snippet});
      }}
      >
      <h1>{snippetName}</h1>
      <div className="flex gap-2">
        <button  onClick={(e) => {
          e.stopPropagation()
          handleDelete(snippetName)
          }}>
          delete</button>
        <button>cancel</button>
      </div>
    </div>
  );
}

export default Snippetitem;
