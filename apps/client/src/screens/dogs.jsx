import { fetchDogsIfNeeded } from '@/redux/dogs/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Dogs() {
  const dogs = useSelector(state => state.dogs.items)
  const isLoading = useSelector(state => state.request.isFetching)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDogsIfNeeded())
  }, [])

  return <div>{isLoading ? <p>Loading...</p> : <DogListing dogs={dogs} />}</div>
}

function DogListing({ dogs }) {
  return (
    <ul>
      {dogs.map(dog => (
        <li key={dog.id}>
          <div>
            <img
              src={dog.image}
              alt={dog.name}
              style={{
                width: '300px',
              }}
            />
            <Link to={`${dog.id}`}>
              <h3>{dog.name}</h3>
            </Link>
            <p>{dog.weight}</p>

            <ul>
              {dog.temperaments?.map((temp, idx) => (
                <li key={idx}>{temp}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}
