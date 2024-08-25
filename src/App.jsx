import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const routes = createBrowserRouter([
    {
      path: '/load',
      element: <LoadingPage />
    },
    {
      path: '/',
      element: <Home />
    }
  ])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000)
  })

  return (
    <div className='min-h-screen overflow-hidden'>
      {
        isLoading?
        <LoadingPage />
        :
        <Home />
      }
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={.2}
        outerStyle={
          {
            mixBlendMode: 'revert',
            border: '1px solid rgb(255, 81, 255)'
          }
        }
        color='255, 81, 255'
      />
    </div>
  )
}

export default App;