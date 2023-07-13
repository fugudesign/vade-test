import { describe, expect, it, vi } from 'vitest'

import MagicButton from '../MagicButton.vue'
import { mount } from '@vue/test-utils'

describe('Component: MagicButton', () => {
  it('renders properly', () => {
    const wrapper = mount(MagicButton)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('.animated-reflect').exists()).toBe(true)
  })

  it('renders properly when disabled', () => {
    const wrapper = mount(MagicButton, { props: { disabled: true } })
    expect(wrapper.find('button').attributes().disabled).toBeDefined()
    expect(wrapper.find('.animated-reflect').exists()).toBe(false)
  })

  it('properly call on click', () => {
    const onClick = vi.fn()
    const wrapper = mount(MagicButton, { props: { onClick } })
    wrapper.get('button').trigger('click')
    expect(onClick).toBeCalled()
  })

  it('not call on click if disabled', () => {
    const onClick = vi.fn()
    const wrapper = mount(MagicButton, { props: { disabled: true, onClick } })
    wrapper.get('button').trigger('click')
    expect(onClick).not.toBeCalled()
  })
})
