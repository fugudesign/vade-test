import { onBeforeMount, ref } from 'vue'

import type { Cocktails } from '@/types/cocktails'
import delay from 'delay'

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'
const FETCH_DELAY = 1000

export function useTheCocktailDB() {
  const data = ref<Cocktails>([])
  const error = ref<unknown>(null)
  const loading = ref<boolean>(true)

  const _getThreeRandom = async (cocktailList: []) =>
    cocktailList.sort(() => Math.random() - Math.random()).slice(0, 3)

  const fetchData = async () => {
    loading.value = true

    const response = await fetch(API_URL)
    const result = await response.json()
    await delay(FETCH_DELAY)
    data.value = await _getThreeRandom(result?.drinks)

    loading.value = false
  }

  onBeforeMount(fetchData)

  return {
    data,
    error,
    loading,
    fetchData
  }
}
