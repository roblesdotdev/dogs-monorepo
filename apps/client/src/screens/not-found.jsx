import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '124px 0' }}>
      <h1>Not found screen</h1>
      <Link to="/">Back to home</Link>
    </div>
  )
}
