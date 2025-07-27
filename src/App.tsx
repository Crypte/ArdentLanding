import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "@/pages/Home.tsx";
import NotFound from "@/pages/NotFound.tsx";
import Navbar from "@/components/Navbar.tsx";

function App() {
    return (
        <div vaul-drawer-wrapper="" className="bg-background container">
            <Router>
                    <Navbar/>
                    <AppContent/>
            </Router>
        </div>
    );
}

function AppContent() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App
