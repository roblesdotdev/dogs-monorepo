import AppRoutes from '@/routes'
import { Provider } from 'react-redux'
import { configureStore } from './store'

const store = configureStore()

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  )
}

export default App
