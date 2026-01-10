import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Counter from '~/components/Counter'

describe('component Counter.tsx', () => {
  it('should render', () => {
    const { container } = render(<Counter initial={10} />)
    expect(screen.getByText('10')).toBeDefined()
    expect(container).toMatchSnapshot()
  })

  it('should be interactive', () => {
    render(<Counter initial={0} />)

    expect(screen.getByText('0')).toBeDefined()

    const inc = screen.getByRole('button', { name: '+' })
    const dec = screen.getByRole('button', { name: '-' })

    expect(inc).toBeDefined()
    expect(dec).toBeDefined()

    fireEvent.click(inc)
    expect(screen.getByText('1')).toBeDefined()

    fireEvent.click(dec)
    expect(screen.getByText('0')).toBeDefined()
  })

  afterEach(cleanup)
})
