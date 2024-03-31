import Navbar from "./components/Header/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import { AuthContextProvider } from "./context/AuthContext"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Account from "./pages/Account"
import ProtectedRoute from "./components/Main/ProtectedRoute"
import NotFound404 from "./pages/NotFound404"




const App = () => {
    return (
        <>
        <AuthContextProvider>
            <Navbar/>
            <Routes>    
                <Route  path="/" element={<Home />}/>
                <Route  path="/login" element={<Login />}/>
                <Route  path="/signup" element={<Signup />}/>
                <Route  path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>}/>
                <Route  path="*" element={<NotFound404 />} />
            </Routes>
        </AuthContextProvider>
        
        </>
    )
}

export default App