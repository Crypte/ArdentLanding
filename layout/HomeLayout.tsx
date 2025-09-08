import {Link, Outlet} from "react-router-dom"

export default function HomeLayout() {
    return (
        <main className={'h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-bg-tertiary/30 to-tertiary-foreground/50'}>
            <div className={'container'}>
            <Outlet />
              <div className={'text-center space-x-3 mt-4 text-sm'}>
                  <Link
                      to="/legal"
                      className="hover:text-foreground transition-colors underline"
                  >
                      Informations légales
                  </Link>
                  <Link
                      to="mailto:contact@ardent-projet.fr"
                      className="hover:text-foreground transition-colors underline"
                  >
                      Nous contacter
                  </Link>
              </div>
            </div>

        </main>
    )
}