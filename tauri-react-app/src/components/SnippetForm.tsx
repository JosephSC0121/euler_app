import {writeTextFile} from '@tauri-apps/api/fs'
import {desktopDir} from '@tauri-apps/api/path'
import { useState } from 'react'
function SnippetForm() {
  const [ snippetName, setSnippetName] = useState('')
  return (
    //if(snippetName)
    <form onSubmit={async(e) => {
        e.preventDefault()
        const desktopPath = await desktopDir()
        console.log(desktopPath)
        await writeTextFile(`${desktopPath}/taurifiles/${snippetName}.json`,`{}`)
    }}>
        <input type="text"
        placeholder="Escribe tu codigo!"
        className="bg-zinc-900 w-full border-none outline-none p-4"
        onChange={(e) => setSnippetName(e.target.value)}
        />
        <button className="hidden">
            Save
        </button>
    </form>

  )
}

export default SnippetForm