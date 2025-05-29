import React, { useState, useEffect, useRef } from 'react'
import TRUNK from 'vanta/dist/vanta.dots.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaBackground = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(TRUNK({
        el: myRef.current,
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x37281b,
  color2: 0x342cbb,
  backgroundColor: 0xd76e6e,
  size: 2.90,
  spacing: 21.00,
  showLines: false
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef} className='w-screen h-screen'>
    <section id="about" className="py-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-extrabold mb-4">
            About the Conference
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-white font-extrabold max-w-3xl mx-auto">
            The Chandigarh University Model United Nations Conference brings
            together students from around the country to simulate the United
            Nations and other international bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-white font-extrabold mb-4">
              Our Mission
            </h3>
            <p className="text-white font-extrabold mb-6">
              The CU MUN Conference is designed to empower aspiring leaders by
              fostering thoughtful discussions, honing diplomatic abilities, and
              offering a deeper understanding of global governance and
              international affairs.
            </p>

            <h3 className="text-2xl font-bold text-white font-extrabold mb-4">
              Conference Theme
            </h3>
            <p className="text-white font-extrabold mb-6">
              The theme for the CU MUN 2025 Conference is "Diplomacy Beyond
              Borders: Tackling Global Challenges Through the Prism of Science,
              Security, and Sustainability."
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <a
                href="#committees"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold font-medium rounded-md transition-colors duration-300 text-center"
              >
                View Committees
              </a>
              <a
                href="#registration"
                className="px-6 py-3 bg-transparent hover:bg-gray-100 text-white font-extrabold font-medium rounded-md border border-red-800 transition-colors duration-300 text-center"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative max-w-full w-full md:w-auto">
             <img
  src="../assets/bh.jpeg"
  alt="Students in discussion"
  className="rounded-lg shadow-lg w-full max-h-[400px] object-contain"
  style={{ imageRendering: "auto" }}
/>
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white font-extrabold p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">New Beginnings</p>
                <p className="text-sm">Committed to Excellence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-white font-extrabold font-bold text-4xl mb-2">300+</div>
            <p className="text-white font-extrabold">Delegates</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-white font-extrabold font-bold text-4xl mb-2">5</div>
            <p className="text-white font-extrabold">Committees</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-white font-extrabold font-bold text-4xl mb-2">50+</div>
            <p className="text-white font-extrabold">Universities</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-white font-extrabold font-bold text-4xl mb-2">3</div>
            <p className="text-white font-extrabold">Days of Debate</p>
          </div>
        </div>
      </div>
    </section>
  </div>
}

export default VantaBackground;