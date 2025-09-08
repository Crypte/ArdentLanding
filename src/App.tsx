import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "@/pages/Home.tsx";
import NotFound from "@/pages/NotFound.tsx";
import Legal from "@/pages/Legal.tsx";
import HomeLayout from "../layout/HomeLayout.tsx";
import LegalLayout from "../layout/LegalLayout.tsx";

function App() {
    return (
        <div vaul-drawer-wrapper="" className="bg-background">
            <Router>
                <AppContent/>
            </Router>
        </div>
    );
}

function AppContent() {
    return (
        <>
            <Routes>
                <Route element={<HomeLayout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route element={<LegalLayout/>}>
                <Route path="/legal" element={<Legal />} />
                </Route>
            </Routes>
        </>
    );
}

export default App
