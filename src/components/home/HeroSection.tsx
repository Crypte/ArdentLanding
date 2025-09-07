import {Badge} from "@/components/ui/badge.tsx";
import RotateHeroText from "@/components/RotateHeroText.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative">
            <div className="max-w-3xl mx-auto text-center space-y-6 px-6">
                <Badge variant="secondary"><img className={'h-7'} src={'/ArdentLogo.png'} alt="Ardent Logo" /></Badge>
                <RotateHeroText />
                <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto font-light">
                    La plus grande base de données de savoir
                </p>

                {/* Stats cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 max-w-2xl mx-auto">
                    <div className="border rounded-lg p-4 text-center bg-tertiary">
                        <div className="text-2xl font-bold text-tertiary-foreground">2.5K</div>
                        <div className="text-xs text-muted-foreground">Ressources</div>
                    </div>
                    <div className=" border rounded-lg p-4 text-center bg-tertiary">
                        <div className="text-2xl font-bold text-tertiary-foreground">1.2K</div>
                        <div className="text-xs text-muted-foreground">Inscrits</div>
                    </div>
                    <div className="bg-tertiary border rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-tertiary-foreground">15</div>
                        <div className="text-xs text-muted-foreground">Thèmes</div>
                    </div>
                    <div className="bg-tertiary border rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-tertiary-foreground">120h</div>
                        <div className="text-xs text-muted-foreground">Contenu</div>
                    </div>
                </div>
                <div className="pt-6 space-x-3">
                    <Button asChild  size={'lg'}>
                        <Link to={`${import.meta.env.VITE_PRODUCTION}`}>Commencer</Link>
                    </Button>
                </div>
            </div>

            {/* Lien légal en bas */}
            <div className="flex gap-3 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Link 
                    to="/legal" 
                    className="text-muted-foreground text-xs hover:text-foreground transition-colors underline"
                >
                    Mentions légales
                </Link>
                <Link
                    to="/legal"
                    className="text-muted-foreground text-xs hover:text-foreground transition-colors underline"
                >
                    Nous contacter
                </Link>
            </div>
        </section>
    );
}
