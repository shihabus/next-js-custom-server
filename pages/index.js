import React, { useEffect} from 'react'
import { Link } from '../routes'


function App() {
    useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      
      window.workbox.register()
    } 
  }, [])
  return (

  <section>
    <p>Routes</p>
  <ul>
    <li>
      <Link route='/a'>
        <a>A</a>
      </Link>
    </li>
    <li>
      <Link route='bat'>
        <a>B</a>
      </Link>
    </li>
    </ul>
    <footer>
    <p>Static pages</p>
    <a href="/index">Index</a>
    </footer>
  </section>
)
}

export default App
