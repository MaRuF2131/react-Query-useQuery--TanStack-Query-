

const CardForAdvanceUseQuery = ({data}) => {
  return (
    <div>
    <ul className="space-y-3">
          {data.map((user) => (
            <li
              key={user.id}
              className="border p-3 rounded bg-gray-50 hover:bg-gray-100 transition"
            >
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default CardForAdvanceUseQuery
