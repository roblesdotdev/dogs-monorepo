import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom'
import {
  WelcomeScreen,
  NotFoundScreen,
  DashboardScreen,
  DogsScreen,
  DogScreen,
  DogFormScreen,
} from '@/screens'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route index element={<WelcomeScreen />} />
        <Route path="dashboard" element={<DashboardScreen />}>
          <Route index element={<Navigate to="dogs" />} />
          <Route path="dogs">
            <Route index element={<DogsScreen />} />
            <Route path=":dogId" element={<DogScreen />} />
            <Route path="new" element={<DogFormScreen />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  )
}
