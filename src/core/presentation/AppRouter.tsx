import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { useUpdatePwaThemeColor } from './theme/useUpdatePwaThemeColor'

const Home = lazy(() => import('@/task_tracker/home/Home'))
const Settings = lazy(() => import('@/task_tracker/Settings'))
const AppPage = lazy(() => import('@/task_tracker/App'))

export default function AppRouter(): JSX.Element {
  useUpdatePwaThemeColor()

  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/app" element={<AppPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
