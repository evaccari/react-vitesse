import { useRouterState } from '@tanstack/react-router'
import NProgress from 'nprogress'
import { useEffect } from 'react'

export default function RouteProgress() {
  const isLoading = useRouterState({ select: state => state.isLoading })

  useEffect(() => {
    if (isLoading) {
      NProgress.start()
    }
    else {
      NProgress.done()
    }
  }, [isLoading])

  return null
}
