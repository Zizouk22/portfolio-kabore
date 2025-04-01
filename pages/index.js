import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
      <Head>
        <title>Portfolio Abdoul-Aziz Ousmane KABORE</title>
        <meta name="description" content="Portfolio professionnel d'Abdoul-Aziz Ousmane KABORE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-4 py-16">
        <h1 className="text-4xl font-bold text-center">
          Portfolio en construction
        </h1>
        <p className="text-center mt-4">
          Prochainement disponible
        </p>
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            {darkMode ? 'Mode clair' : 'Mode sombre'}
          </button>
        </div>
      </main>
    </div>
  )
}