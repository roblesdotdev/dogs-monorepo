import Button from '@/componets/ui/button'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '124px 0',
      }}
    >
      <h1>Vite JSX Starter</h1>
      <Button text="Get Started" onClick={() => navigate('/home')} />
    </div>
  )
}