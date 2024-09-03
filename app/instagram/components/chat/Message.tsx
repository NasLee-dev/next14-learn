'use client'
export default function Message({
  isFromMe = false,
  message = "",
}) {
  return (
    <div className={`w-fit p-3 rounded-lg ${isFromMe ? 'ml-auto bg-light-blue-600 text-white' : ' bg-gray-100 text-black'}`}>
      <p>
        {message}
      </p>
    </div>
  )
}