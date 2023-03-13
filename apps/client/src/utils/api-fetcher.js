const apiURL = import.meta.env.VITE_APP_API_URL

async function fetcher(
  endpoint,
  { data, headers: customHeaders, ...customConfig } = {},
) {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  }

  const url = `${apiURL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`

  return fetch(url, config).then(async response => {
    const { data } = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export { fetcher }
