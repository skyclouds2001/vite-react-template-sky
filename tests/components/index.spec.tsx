import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Main from '@/views/main'

describe('basic tests', () => {
  it('basic test', () => {
    render(<Main />)
    screen.getByText('Main')
  })
})
