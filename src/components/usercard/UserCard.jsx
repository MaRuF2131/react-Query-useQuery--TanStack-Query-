// src/components/UserCard.jsx
export default function UserCard({ user }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
      <p className="text-sm text-gray-400 mb-4">@{user.username}</p>

      <div className="mb-3">
        <p><span className="font-semibold">📧 Email:</span> {user.email}</p>
        <p><span className="font-semibold">📞 Phone:</span> {user.phone}</p>
        <p><span className="font-semibold">🌐 Website:</span> {user.website}</p>
      </div>

      <div className="mb-3">
        <h3 className="font-semibold text-lg">🏠 Address</h3>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city} - {user.address.zipcode}</p>
        <p><span className="font-semibold">📍 Geo:</span> {user.address.geo.lat}, {user.address.geo.lng}</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">🏢 Company</h3>
        <p><span className="font-semibold">Name:</span> {user.company.name}</p>
        <p><span className="text-gray-400 italic">"{user.company.catchPhrase}"</span></p>
        <p><span className="font-semibold">BS:</span> {user.company.bs}</p>
      </div>
    </div>
  );
}
