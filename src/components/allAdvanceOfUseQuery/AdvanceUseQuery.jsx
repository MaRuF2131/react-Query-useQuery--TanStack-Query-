const {
  data,              // The transformed or raw response data
  error,             // The actual error object if query fails
  isLoading,         // True only when the query is loading for the first time
  isError,           // True if an error occurred
  isSuccess,         // True if query was successful
  isFetching,        // True anytime the query is fetching (initial, refetch, bg)
  isFetched,         // True once the query has been fetched at least once
  isStale,           // True if the cached data is stale
  refetch,           // Manually trigger a refetch
  status,            // 'loading' | 'error' | 'success'
  fetchStatus,       // 'fetching' | 'paused' | 'idle' (newer addition)
} = useQuery({
    
  // A unique key that identifies this query in the cache
  queryKey: ['users'],

  // The function that fetches the data (usually async/returns a promise)
  queryFn: fetchUsers,

  // Ensures the query only runs when this condition is true
  enabled: true, // often used for conditional fetching (e.g., when userId exists)

  // Transforms the fetched data before it's returned to your component
  select: data => data.map(u => ({ id: u.id, name: u.name })),
  // Only returns id and name instead of the full user object

  // Shows this temporary data immediately while waiting for the actual fetch
  placeholderData: [], // good for showing empty UI instantly to avoid flicker

  // Specifies how long the data stays "fresh"
  staleTime: 1000 * 60 * 2, // 2 minutes
  // During this time, React Query won't refetch the data automatically

  // Specifies how long the cached data stays in memory after it's unused
  cacheTime: 1000 * 60 * 5, // 5 minutes
  // After this time, the cached data is garbage-collected if not used

  // Automatically refetch when the browser window is refocused
  refetchOnWindowFocus: true
})
