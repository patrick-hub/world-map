import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Homepage from './pages/Homepage'
import AppLayout from './pages/AppLayout'
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login"

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route index element={<Homepage />} />
      <Route path='product' element={<Product />}/>
      <Route path="pricing" element={<Pricing/>} />
      <Route path='login' element={<Login />}/>
      <Route path="app" element={<AppLayout />}>
        <Route index element={<p>Hello</p>} />
        <Route path='cities' element={<h1>Hi</h1>} />
        <Route path='countries' element={<p>Hey</p>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
