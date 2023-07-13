import { describe, expect, it } from 'vitest'

import NavBar from '../NavBar.vue'
import { mount } from '@vue/test-utils'

describe('Component: NavBar', () => {
  it('renders properly on top by default', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.find('.nav-bar').exists()).toBe(true)
    expect(wrapper.find('.top-0').exists()).toBe(true)
  })

  it('renders properly with position "top"', () => {
    const wrapper = mount(NavBar, { props: { position: 'top' } })
    expect(wrapper.find('.top-0').exists()).toBe(true)
  })

  it('renders properly with position "bottom"', () => {
    const wrapper = mount(NavBar, { props: { position: 'top' } })
    expect(wrapper.find('.top-0').exists()).toBe(true)
  })

  it('renders properly children', () => {
    const wrapper = mount(NavBar, {
      slots: {
        default: 'Hello Father!'
      }
    })
    expect(wrapper.text()).toContain('Hello Father!')
  })
})
