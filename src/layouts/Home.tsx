import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer'

export default function HomeLayout() {
  return (
    <main className='px-4 py-10 text-center text-gray-700 dark:text-gray-200'>
      <Outlet />
      <Footer />
      <div className='mx-auto mt-5 text-center text-sm opacity-50'>
        [Home Layout]
      </div>
    </main>
  )
}
