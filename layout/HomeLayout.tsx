import {Outlet} from "react-router-dom"

export default function HomeLayout() {
    return (
        <main className={'h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-tertiary-foreground/05 to-tertiary-foreground/40'}>
            <div className={'container'}>
            <Outlet />
            </div>

        </main>
    )
}