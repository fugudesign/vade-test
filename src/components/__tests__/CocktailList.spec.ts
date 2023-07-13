import CocktailList from '../CocktailList.vue'
import type { Cocktails } from '@/types/cocktails'
import cocktailsMock from './cocktails.mock.json'
import { mount } from '@vue/test-utils'

const cocktails = cocktailsMock as Cocktails

describe('Component: CocktailList', () => {
  it('renders properly', () => {
    const wrapper = mount(CocktailList, {
      props: {
        cocktails
      }
    })
    expect(wrapper.find('.cocktail-list').exists()).toBe(true)
  })

  it('renders 3 cocktail cards when 3 are provided', () => {
    const wrapper = mount(CocktailList, {
      props: {
        cocktails
      }
    })
    expect(wrapper.findAll('.cocktail-card')).toHaveLength(3)
  })
})
