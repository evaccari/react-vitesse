import { createFileRoute, Outlet } from '@tanstack/react-router'
import Footer from '~/components/Footer'

export const Route = createFileRoute('/_default')({
  component: DefaultLayout,
})

function DefaultLayout() {
  return (
    <main p="x-4 y-10" text="center gray-700 dark:gray-200">
      <Outlet />
      <Footer />
      <div m="x-auto t-5" text="center sm" un-opacity="50">
        [Default Layout]
      </div>
    </main>
  )
}
