import {Outlet} from "react-router-dom"
import Navbar from "@/components/Navbar.tsx";

export default function HomeLayout() {
    return (
        <main>
            <Navbar />
            <div className={'container'}>
                <Outlet />
            </div>
        </main>
    )
}