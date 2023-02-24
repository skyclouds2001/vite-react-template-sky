import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from '@/views/home'

describe('basic tests', () => {
  it('basic test', () => {
    render(<Home />)
    screen.getByText('Home')
  })
})
