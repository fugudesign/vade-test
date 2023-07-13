import { describe, expect, it } from 'vitest'

import BrandLogo from '../BrandLogo.vue'
import { mount } from '@vue/test-utils'

describe('Component: BrandLogo', () => {
  it('renders properly', () => {
    const wrapper = mount(BrandLogo)
    expect(wrapper.text()).toContain('Cocktail Genius')
  })
})
