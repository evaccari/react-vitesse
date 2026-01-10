import NProgress from 'nprogress'
import { useEffect, useRef } from 'react'
import { useLocation, useNavigation } from 'react-router-dom'

export default function RouteProgress() {
  const location = useLocation()
  const navigation = useNavigation()
  const previousPath = useRef(location.pathname)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    const isNewRoute = previousPath.current !== location.pathname
    previousPath.current = location.pathname

    if (isNewRoute || navigation.state === 'loading') {
      NProgress.start()

      if (navigation.state === 'idle') {
        timer.current = window.setTimeout(() => NProgress.done(), 150)
      }
    }

    if (navigation.state === 'idle') {
      timer.current = window.setTimeout(() => NProgress.done(), 100)
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [location.pathname, navigation.state])

  return null
}
