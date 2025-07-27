import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu} from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet"
import { FaXTwitter } from "react-icons/fa6";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 py-3 bg-background/80 backdrop-blur-md">
            <div className="flex items-center justify-between container mx-auto ">
                <div className="flex items-center space-x-10">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="font-bold text-xl">Ardent</span>
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to="/ressource">Browse</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to="/about">A propos</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className={'flex items-center space-x-4 max-xl:hidden'}>
                    <Button size={'icon'} variant={'ghost'}><FaXTwitter className={'w-4 h-4 max-xl:hidden'}/></Button>
                    <div className={'w-0 border h-6 border-secondary'}></div>
                    <Button asChild>
                        <a href={`${import.meta.env.VITE_PRODUCTION}`}>Ouvrir l'app</a>
                    </Button>
                </div>
                <MobileNav/>
            </div>
        </nav>
    )
}

function MobileNav() {

    return (
        <div className="max-xl:block hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col justify-between py-10">
                    <div className="flex flex-col space-y-5">
                        <SheetClose asChild>
                            <Link to="/" className="font-bold text-xl hover:text-foreground transition">
                                Accueil
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link to="/about" className="font-bold text-xl hover:text-foreground transition">
                                À propos
                            </Link>
                        </SheetClose>
                    </div>

                    <div className="flex flex-col space-y-4">
                                <SheetClose asChild>
                                    <Button asChild variant="secondary">
                                        <a href={`${import.meta.env.VITE_PRODUCTION}`}>Ouvrir l'app</a>
                                    </Button>
                                </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
