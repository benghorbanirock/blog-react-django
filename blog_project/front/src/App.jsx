import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import DetailsTour from "./pages/DetailsTour"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/travelAgency" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/tour/:id" element={<DetailsTour />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App