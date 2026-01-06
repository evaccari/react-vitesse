// import { useLocation } from 'react-router-dom'
import NProgress from 'nprogress'
import { useEffect } from 'react'

export default function RouteProgress() {
//  const location = useLocation()

  useEffect(() => {
    NProgress.start()
    return () => {
      NProgress.done()
    }
  }, [location.pathname])

  return null
}
