import { createApp } from 'vue'

export function createFetchResponse(data: unknown) {
  return { json: () => new Promise((resolve) => resolve(data)) } as Response
}

export function withSetup(composable: any) {
  let result: ReturnType<typeof composable>

  const app = createApp({
    setup() {
      result = composable()
      // suppress missing template warning
      return () => {}
    }
  })
  app.mount(document.createElement('div'))
  // return the result and the app instance
  // for testing provide / unmount
  return [result, app]
}
