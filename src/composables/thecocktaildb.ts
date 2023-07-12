import { ref, watchEffect } from 'vue'

import type { Cocktails } from '@/types/cocktailes'

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'
const FETCH_DELAY = 1000

export function useTheCocktailDB() {
  const data = ref<Cocktails>([])
  const error = ref<unknown>(null)
  const loading = ref<boolean>(true)

  const fetchCocktails = () => {
    loading.value = true
    setTimeout(async () => {
      try {
        const response = await fetch(API_URL)
        const json = await response.json()
        data.value = json?.drinks.sort(() => Math.random() - Math.random()).slice(0, 3) as Cocktails
      } catch (err) {
        error.value = err
      } finally {
        loading.value = false
      }
    }, FETCH_DELAY)
  }

  watchEffect(() => fetchCocktails())

  return {
    data,
    error,
    loading,
    refetch: fetchCocktails
  }
}
