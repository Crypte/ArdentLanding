import { Outlet } from "react-router-dom"

export default function AppLayout() {
    return (
        <main className={'h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-bg-tertiary/30 to-tertiary-foreground/50'}>
            <div className={'container'}>
            <Outlet />
            </div>
        </main>
    )
}