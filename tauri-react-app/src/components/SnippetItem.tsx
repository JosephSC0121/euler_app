import { useSnippetStore } from "../store/snippetsStore";
import {twMerge} from 'tailwind-merge'
interface Props {
  snippetName: string;
}

function Snippetitem({ snippetName }: Props) {
  const setSelectedSnippet= useSnippetStore(state => state.setSelectedSnippet);
  const SelectedSnippet = useSnippetStore(state => state.selectedSnippet)
  return (
    <div className={twMerge("py-2 px-4 hover:bg-neutral-900 hover:cursor-pointer", SelectedSnippet === snippetName ? "bg-sky-500": "")}
      onClick={() => {
        setSelectedSnippet(snippetName);
      }}
      >
      <h1>{snippetName}</h1>
    </div>
  );
}

export default Snippetitem;
