import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardGrid from './components/CardGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CardGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App