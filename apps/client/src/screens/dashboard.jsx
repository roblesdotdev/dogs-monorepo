import { Link, Outlet } from 'react-router-dom'

export default function Home() {
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
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        width: '100%',
      }}
    >
      <Link to="/">
        <h1 style={{ fontSize: '1.4em' }}>Dogs.</h1>
      </Link>
      <form>
        <input type="search" placeholder="Search..." />
      </form>
    </div>
  )
}
