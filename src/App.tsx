import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import TechnologyHeader from "./components/TechnologyHeader"
import TechnologyCard from "./components/TechnologyCard"
import technologyData from "./data/data.json"
import YourStack from "./components/YourStack"
import Footer from "./components/Footer"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "./App.css"

function App() {
  const [technologies, setTechnologies] = useState<typeof technologyData>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTechnologies(technologyData)
    setLoading(false)
  }, [])

  const [stack, setStack] = useState<(typeof technologies)[number][]>([])

  // Add Technology
  const handleAdd = (technology: (typeof technologies)[number]) => {

    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    )

    // Duplicate Add
    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      )
      return
    }

    // Add to Stack
    setStack([...stack, technology])

    toast.success(
      `${technology.name} added to your stack!`
    )
  }


  // Remove Technology
  const handleRemove = (id: string) => {

    const removedTechnology = stack.find(
      (item) => item.id === id
    )

    setStack(
      stack.filter(
        (item) => item.id !== id
      )
    )

    if (removedTechnology) {
      toast.error(
        `${removedTechnology.name} removed from your stack!`
      )
    }
  }


  // Remove All
  const handleRemoveAll = () => {

    if (stack.length === 0) {
      toast.warning("Your stack is already empty!")
      return
    }

    setStack([])

    toast.info(
      "All technologies removed from your stack!"
    )
  }


  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <Banner />

      {/* Technology Heading */}
      <TechnologyHeader />


      {/* Technology Section */}
      <div className="max-w-6xl mx-auto px-4 pb-8">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Technology Cards */}
          <section className="lg:col-span-3 min-w-0">
            {loading ? (
              <p className="text-center py-10 text-gray-500">
                Loading technologies...
              </p>
            ) : (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {technologies.map((technology) => (

                  <TechnologyCard
                    key={technology.id}
                    technology={technology}

                    isAdded={stack.some(
                      (item) => item.id === technology.id
                    )}

                    onAdd={handleAdd}
                  />

                ))}

              </div>
            )}

          </section>


          {/* Your Stack */}
          <aside>

            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />

          </aside>

        </div>

      </div>


      {/* Footer */}
      <Footer />


      {/* Toast Notification */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />

    </>
  )
}

export default App
