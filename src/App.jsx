import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import DefaultLayout from "./layouts/DefaultLayout"
import PostsIndex from './pages/Posts/Index'
import PostsShow from './pages/Posts/Show'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/posts">
              <Route index Component={PostsIndex}></Route>
              <Route path=":id" Component={PostsShow}></Route>
            </Route>
            <Route path="/about" element={<About />}></Route>

          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
