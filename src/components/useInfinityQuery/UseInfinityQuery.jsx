import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const fetchPosts = async ({ pageParam = 1 }) => {
  // Fetch 10 posts per page from JSONPlaceholder
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageParam}`)
  return res.data
}

const UseInfinityQuery = () => {
  const {
    data,                    // Contains all pages: data.pages = [[page1], [page2], ...]
    error,                   // Error object if request fails
    isLoading,               // True only on first load
    isError,                 // True if error occurred
    isSuccess,               // True if data fetched successfully
    isFetching,              // True on any fetching (initial, next page, or refetch)
    isFetched,               // True once it has fetched at least once
    isStale,                 // True if data is stale (based on staleTime)
    refetch,                 // Manual refetch function
    status,                  // 'loading' | 'error' | 'success'
    fetchStatus,             // 'idle' | 'fetching' | 'paused'
    hasNextPage,             // True if there's a next page (based on getNextPageParam)
    fetchNextPage,           // Function to fetch next page
    isFetchingNextPage,      // True when next page is loading
  } = useInfiniteQuery({
    queryKey: ['posts'],      // Unique cache key
    queryFn: fetchPosts,      // Function to fetch data

    // How to get the next page number
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) return undefined; // No more pages
      return allPages.length + 1; // Fetch next page
    },

    staleTime: 1000 * 60,            // Data is fresh for 1 minute
    cacheTime: 1000 * 60 * 5,       // Cache data for 5 minutes
    refetchOnWindowFocus: true,      // Auto refetch if tab regains focus
    refetchOnReconnect: true,        // Auto refetch when internet reconnects
    retry: 2,                        // Retry failed requests 2 times
    retryDelay: 1000,                // 1 second delay between retries
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">🔁 Infinite Posts</h2>

      {/* Loading State */}
      {isLoading && <p className="text-gray-500">⏳ Loading posts...</p>}

      {/* Error State */}
      {isError && <p className="text-red-500">❌ {error.message}</p>}

      {/* Success: Display Posts */}
      {isSuccess && (
        <>
          <div className="space-y-4">
            {data.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.map((post) => (
                  <div key={post.id} className="border p-4 rounded shadow-sm">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-700">{post.body}</p>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-6">
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load More'
                : 'No more posts'}
            </button>
          </div>
        </>
      )}

      {/* Extra Debug Info */}
      <div className="mt-6 text-sm text-gray-600 space-y-1">
        <p>📦 <strong>Status:</strong> {status}</p>
        <p>🚦 <strong>Fetch Status:</strong> {fetchStatus}</p>
        <p>♻️ <strong>Is Fetching:</strong> {String(isFetching)}</p>
        <p>🔁 <strong>Is Fetched:</strong> {String(isFetched)}</p>
        <p>❗ <strong>Is Stale:</strong> {String(isStale)}</p>
      </div>

      {/* Refetch Button */}
      <button
        onClick={refetch}
        className="mt-4 text-sm underline text-blue-500"
      >
        🔄 Manually Refetch All Pages
      </button>
    </div>
  );
};

export default UseInfinityQuery;
