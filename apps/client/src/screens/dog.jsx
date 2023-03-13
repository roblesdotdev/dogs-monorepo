import { useParams } from 'react-router-dom'

export default function Dog() {
  const { dogId } = useParams()
  return (
    <div>
      <h1>Dog detail {dogId} </h1>
    </div>
  )
}
