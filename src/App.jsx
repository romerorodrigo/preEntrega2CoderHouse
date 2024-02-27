import {BrowserRouter, Route, Routes} from "react-router-dom"
import { NavBar, Cart, ItemListContainer, ItemDetailContainer} from './components'
import './baseStyle.css'

const App = () => {
  return (
        <BrowserRouter>
            <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>Error 404 - NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
