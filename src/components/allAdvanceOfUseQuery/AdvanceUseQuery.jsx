import { useQuery } from '@tanstack/react-query'
import  axios  from 'axios'
import CardForAdvanceUseQuery from './CardForAdvanceUseQuery'

const fetchUsers = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  return data
}



// A small component to display boolean status
function StatusItem({ label, value }) {
  const color = value === true ? 'text-green-600' : value === false ? 'text-red-500' : 'text-yellow-600'
  return (
    <div>
      <span className="font-medium">{label}:</span>{' '}
      <span className={`${color}`}>{String(value)}</span>
    </div>
  )
}

const AdvanceUseQuery = () => {

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
  queryKey: ['users-on-all-feature-test'],

  // The function that fetches the data (usually async/returns a promise)
  queryFn: fetchUsers,

  // Ensures the query only runs when this condition is true
  enabled: true, // often used for conditional fetching (e.g., when userId exists)

  // Transforms the fetched data before it's returned to your component
  select: data => data.map(u => ({ id: u.id, name: u.name, email: u.email })),
  // Only returns id and name instead of the full user object

  // Shows this temporary data immediately while waiting for the actual fetch
  placeholderData: [], // good for showing empty UI instantly to avoid flicker

  // Specifies how long the data stays "fresh"
  staleTime: 1000 * 60*2 , // 2 minutes
  // During this time, React Query won't refetch the data automatically

  // Specifies how long the cached data stays in memory after it's unused
  cacheTime: 1000 * 60*5 , // 5 minutes
  // After this time, the cached data is garbage-collected if not used

  // Automatically refetch when the browser window is refocused
  refetchOnWindowFocus: true,
   refetchOnReconnect: true,       // auto refetch if internet reconnects
   retry: 2,                       // retry failed queries up to 2 times
   retryDelay: 1000,               // wait 1s between retries
})



  return (
    <div>
      <h1 className='text-3xl font-bold w-full text-center'>Advance Use Query</h1>

    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">🧠 Query State Monitor</h2>

      {/* Button to trigger manual refetch */}
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        🔁 Manual Refetch
      </button>

      {/* Display query state status */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <StatusItem label="isLoading" value={isLoading} />
        <StatusItem label="isError" value={isError} />
        <StatusItem label="isSuccess" value={isSuccess} />
        <StatusItem label="isFetching" value={isFetching} />
        <StatusItem label="isFetched" value={isFetched} />
        <StatusItem label="isStale" value={isStale} />
        <StatusItem label="status" value={status} />
        <StatusItem label="fetchStatus" value={fetchStatus} />
      </div>

      {/* Show error if query fails */}
      {isError && (
        <p className="text-red-600 mb-4">❌ Error: {error.message}</p>
      )}

      {/* Render user data */}
      {isSuccess && (
      <CardForAdvanceUseQuery data={data} />
      )}
      </div>
    </div>
  )
}

export default AdvanceUseQuery


