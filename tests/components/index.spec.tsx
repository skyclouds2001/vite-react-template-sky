import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import store from '@/stores'
import Home from '@/views/home'

describe('basic tests', () => {
  it('basic test', () => {
    render(<Home />, {
      wrapper: ({ children }) => (
        <>
          <Provider store={store}>{children}</Provider>
        </>
      ),
    })
    expect(screen.getByText('Home')).not.toBeNull()
  })
})
