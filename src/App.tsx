import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "@/pages/Home.tsx";
import NotFound from "@/pages/NotFound.tsx";
import Legal from "@/pages/Legal.tsx";
import AppLayout from "../layout/AppLayout.tsx";

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
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/legal" element={<Legal />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App
