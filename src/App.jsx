import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// ============[PAGES]============
import Layout from './Components/Layout'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Country from './Pages/Country'
import Error from "./Pages/Error"
import Contact from './Pages/Contact'
import CountryDetail from './Components/FullDetail'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "country", element: <Country /> },
      { path: "contact", element: <Contact /> },
      { path: "country/:countryName", element: <CountryDetail /> }
    ],

  }
]);
function App() {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App