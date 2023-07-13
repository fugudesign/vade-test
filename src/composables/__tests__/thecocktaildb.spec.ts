import { afterEach, describe, expect, it, vi } from 'vitest'
import { createFetchResponse, withSetup } from '@/helpers/testUtils'

import type { Cocktails } from '@/types/cocktails'
import dataMock from './thecocktaildb.mock.json'
import { flushPromises } from '@vue/test-utils'
import { useTheCocktailDB } from '../thecocktaildb'

describe('Composable: useTheCocktailDB', () => {
  const mockFetch = vi.spyOn(global, 'fetch')

  it('should returns an array of 3 results on fetching', async () => {
    mockFetch.mockResolvedValueOnce(createFetchResponse(dataMock))
    const [res, app] = withSetup(useTheCocktailDB)
    await res.fetchData()
    await flushPromises()
    const results = res?.data.value

    expect(results).toHaveLength(3)

    app?.unmount()
  })

  it('should returns results as Cocktails type on fetching', async () => {
    mockFetch.mockResolvedValueOnce(createFetchResponse(dataMock))
    const [res, app] = withSetup(useTheCocktailDB)
    await res.fetchData()
    await flushPromises()
    const results = res?.data.value

    expectTypeOf(results).toMatchTypeOf<Cocktails>()

    app?.unmount()
  })

  afterEach(() => {
    mockFetch.mockClear()
  })
})
