import { fetchTemperamentsIfNeeded } from '@/redux/temperaments/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DogForm() {
  const temperaments = useSelector(state => state.temperaments.items)
  const isLoading = useSelector(state => state.request.isFetching)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTemperamentsIfNeeded())
  }, [])

  return (
    <div>
      <h1>Create new dog</h1>
      <form>
        <select name="temperament">
          {isLoading ? (
            <option disabled>Loading...</option>
          ) : (
            temperaments.map(temp => (
              <option key={temp.id} value={temp.id}>
                {temp.name}
              </option>
            ))
          )}
        </select>
      </form>
    </div>
  )
}
