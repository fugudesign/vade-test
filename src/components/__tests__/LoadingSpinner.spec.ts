import { describe, expect, it } from 'vitest'

import LoadingSpinner from '../LoadingSpinner.vue'
import { mount } from '@vue/test-utils'

describe('Component: LoadingSpinner', () => {
  it('renders properly', () => {
    const wrapper = mount(LoadingSpinner)
    expect(wrapper.find('.loading-spinner').exists()).toBe(true)
  })
})
