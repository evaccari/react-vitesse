import { createFileRoute, Outlet } from '@tanstack/react-router'
import Footer from '~/components/Footer'

export const Route = createFileRoute('/_home')({
  component: HomeLayout,
})

function HomeLayout() {
  return (
    <main p="x-4 y-10" text="center gray-700 dark:gray-200">
      <Outlet />
      <Footer />
      <div m="x-auto t-5" text="center sm" un-opacity="50">
        [Home Layout]
      </div>
    </main>
  )
}
