import type { Cocktail } from '@/types/cocktails'
import CocktailCard from '../CocktailCard.vue'
import cocktailMock from './cocktail.mock.json'
import { mount } from '@vue/test-utils'

const cocktail = cocktailMock as Cocktail

describe('Component: CocktailCard', () => {
  it('renders properly', () => {
    const wrapper = mount(CocktailCard, {
      props: {
        cocktail
      }
    })
    expect(wrapper.find('.cocktail-card').exists()).toBe(true)
  })

  describe('Check: image', () => {
    it('renders properly placeholder thumb if cocktail not have one', () => {
      const wrapper = mount(CocktailCard, {
        props: {
          cocktail: { ...cocktail, strDrinkThumb: null }
        }
      })
      expect(wrapper.find('.card-thumb img').attributes()['src']).toEqual(
        'https://dummyimage.com/100x100/BBB/fff&text=...'
      )
    })
    it('renders properly cocktail thumb ', () => {
      const wrapper = mount(CocktailCard, {
        props: {
          cocktail
        }
      })
      expect(wrapper.find('.card-thumb img').attributes()['src']).toEqual(
        'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg'
      )
    })
  })

  describe('Check: alcoholic type', () => {
    it('renders properly without type', () => {
      const wrapper = mount(CocktailCard, {
        props: {
          cocktail: { ...cocktail, strAlcoholic: null }
        }
      })
      expect(wrapper.find('.bubble-tag').exists()).toBe(false)
    })

    it('renders properly "Alcoholic" type', () => {
      const wrapper = mount(CocktailCard, {
        props: {
          cocktail: { ...cocktail, strAlcoholic: 'Alcoholic' }
        }
      })
      expect(wrapper.find('.bubble-tag').text()).toContain('Alcoholized')
    })

    it('renders properly "Optional alcohol" type', () => {
      const wrapper = mount(CocktailCard, {
        props: {
          cocktail: { ...cocktail, strAlcoholic: 'Optional alcohol' }
        }
      })
      expect(wrapper.find('.bubble-tag').text()).toContain('Soft/Alcoholized')
    })

    it('renders properly "Non alcoholic" type', () => {
      const wrapper = mount(CocktailCard, {
        props: {
          cocktail: { ...cocktail, strAlcoholic: 'Non alcoholic' }
        }
      })
      expect(wrapper.find('.bubble-tag').text()).toContain('Soft')
    })
  })
  describe('Check: instructions', () => {
    it('renders properly instructions with linebreaks', () => {
      const wrapper = mount(CocktailCard, {
        props: {
          cocktail
        }
      })
      expect(wrapper.find('.instructions').text()).not.toContain('. ')
      expect(wrapper.find('.instructions').html()).toContain('.<br>')
    })
  })
  describe('Check: ingredients', () => {
    it('renders properly 5 ingredients when cocktail have 5 ones', () => {
      const wrapper = mount(CocktailCard, {
        props: {
          cocktail
        }
      })
      expect(wrapper.findAll('.ingredient')).toHaveLength(5)
    })
    it('renders properly 4 ingredients when cocktail have 4 ones', () => {
      const wrapper = mount(CocktailCard, {
        props: {
          cocktail: { ...cocktail, strIngredient5: null, strMeasure5: null }
        }
      })
      expect(wrapper.findAll('.ingredient')).toHaveLength(4)
    })
  })
})
