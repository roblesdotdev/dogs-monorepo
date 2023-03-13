import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { WelcomeScreen, NotFoundScreen } from '@/screens'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route index element={<WelcomeScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  )
}
