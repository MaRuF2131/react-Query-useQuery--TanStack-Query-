// src/components/AddUserForm.jsx
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

const addUser = async (user) => {
  const res = await axios.post('https://jsonplaceholder.typicode.com/users', user)
  return res.data
}

export default function AddUserForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']) // Refetch user list
      setName('')
      setEmail('')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ name, email })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">➕ Add User</h2>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Adding...' : 'Add User'}
      </button>

      {mutation.isError && <p className="text-red-500 mt-2">Error: {mutation.error.message}</p>}
      {mutation.isSuccess && <p className="text-green-600 mt-2">✅ User added (fake)</p>}
    </form>
  )
}
