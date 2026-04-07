import { memo } from 'react'
import Card from './Card'

const cardData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Modern, responsive websites built with React and Tailwind.',
    imageUrl: 'https://picsum.photos/id/1/400/300'
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Cross‑platform mobile applications for iOS and Android.',
    imageUrl: 'https://picsum.photos/id/2/400/300'
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Scalable cloud architecture and deployment.',
    imageUrl: 'https://picsum.photos/id/3/400/300'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'User‑friendly interfaces with great user experience.',
    imageUrl: 'https://picsum.photos/id/4/400/300'
  },
  {
    id: 5,
    title: 'SEO Optimization',
    description: 'Improve your search engine ranking and visibility.',
    imageUrl: 'https://picsum.photos/id/5/400/300'
  },
  {
    id: 6,
    title: '24/7 Support',
    description: 'Round‑the‑clock technical support for your business.',
    imageUrl: 'https://picsum.photos/id/6/400/300'
  }
]

const CardGrid = memo(() => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </section>
  )
})

export default CardGrid