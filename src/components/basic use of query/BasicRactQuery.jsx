import { useQuery } from '@tanstack/react-query'
import  axios  from 'axios'
import UserCard from '../usercard/UserCard'

const fetchData=async()=>{
  const {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
  return data
}
const BasicRactQuery = () => {
    const {data,isLoading,isError,error}=useQuery({
        queryKey:['users'],///useQuery hook is used to fetch data from the server.and save fetched data under this key which is caching and also check on refeching
        queryFn:fetchData // call the function and return data
    })
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>{error.message}</div>
    }
  return (
    <div>
     <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User List (useQuery)</h1>
      <ul className="space-y-3">
        {data.map((user) => (
            <UserCard user={user} />
        ))}
      </ul>
    </div>
    </div>
  )
}

export default BasicRactQuery
