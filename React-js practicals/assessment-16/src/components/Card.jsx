import { memo } from 'react'

const Card = memo(({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
          Learn More →
        </button>
      </div>
    </div>
  )
})

export default Card