import { fetchDogDetailIfNeeded } from '@/redux/dogs/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function Dog() {
  const { dogId } = useParams()
  const dog = useSelector(state => state.dogs.current)
  const isLoading = useSelector(state => state.request.isFetching)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDogDetailIfNeeded(dogId))
  }, [dogId])

  return (
    <div>
      {isLoading ? <p>Loading...</p> : dog ? <DogDetail dog={dog} /> : null}
    </div>
  )
}

function DogDetail({ dog }) {
  return (
    <div>
      {dog.image ? (
        <img style={{ width: '300px' }} src={dog.image} alt={dog.name} />
      ) : (
        <span>No image found</span>
      )}
      <h3>{dog.name}</h3>
      <h4>Height: {dog.height}</h4>
      <h4>Weight: {dog.weight}</h4>
      <h4>Life span: {dog.life_span}</h4>
      <ul>
        {dog.temperaments?.map((temp, idx) => (
          <li key={idx}>{temp}</li>
        ))}
      </ul>
    </div>
  )
}
