import { describe, expect, test } from 'vitest'

import { getRandomCocktails, type IData } from '../thecocktaildb.api'

describe('TheCocktailDB API helper', () => {
  describe('Function: getRandomCocktails', () => {
    const data: IData = {
      drinks: [
        {
          idDrink: '15997',
          strDrink: 'GG'
        },
        {
          idDrink: '17222',
          strDrink: 'A1'
        },
        {
          idDrink: '17225',
          strDrink: 'Ace'
        },
        {
          idDrink: '14229',
          strDrink: '747'
        },
        {
          idDrink: '17203',
          strDrink: 'Kir'
        }
      ]
    }
    test('returns an array of 3 cocktails', () => {
      const results = getRandomCocktails(data)
      expect(results).toHaveLength(3)
      expect(results[0]).toHaveProperty('idDrink')
      expect(results[1]).toHaveProperty('idDrink')
      expect(results[2]).toHaveProperty('idDrink')
    })
  })
})
