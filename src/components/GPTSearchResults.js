import { useSelector } from "react-redux"

const GPTSearchResults = () => {
  const gpt = useSelector((store) => store.gpt);
  
  return (
    <div>GPTSearchResults</div>
  )
}

export default GPTSearchResults