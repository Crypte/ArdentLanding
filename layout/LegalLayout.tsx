import {Outlet} from "react-router-dom"
import Navbar from "../src/components/Navbar";

export default function LegalLayout() {
    return (
        <main>
            <Navbar />
            <div className={'container'}>
                <Outlet />
            </div>
        </main>
    )
}