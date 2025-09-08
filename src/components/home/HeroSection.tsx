import {Badge} from "@/components/ui/badge.tsx";
import RotateHeroText from "@/components/RotateHeroText.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import { useStats } from "@/hooks/useStats";

export default function HeroSection() {
    const { stats, loading, error } = useStats();

    return (
        <section className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative">
            <div className="container text-center space-y-8">
                <Badge variant="secondary"><img className={'h-7'} src={'/ArdentLogo.png'} alt="Ardent Logo" /></Badge>
                <RotateHeroText />
                <p className="text-muted-foreground text-lg font-light">
                    Accéder à la plus grande base de données de savoir
                </p>

                {/* Stats cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border rounded-lg p-4 text-center bg-tertiary">
                        <div className="text-2xl font-bold text-tertiary-foreground">
                            {loading || error ? "..." : stats?.total_published_resources}
                        </div>
                        <div className="text-xs text-muted-foreground">Ressources</div>
                    </div>
                    <div className=" border rounded-lg p-4 text-center bg-tertiary">
                        <div className="text-2xl font-bold text-tertiary-foreground">
                            {loading || error ? "..." : stats?.total_users_verified}
                        </div>
                        <div className="text-xs text-muted-foreground">Inscrits</div>
                    </div>
                    <div className="bg-tertiary border rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-tertiary-foreground">
                            {loading || error ? "..." : stats?.total_themes}
                        </div>
                        <div className="text-xs text-muted-foreground">Thèmes</div>
                    </div>
                    <div className="bg-tertiary border rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-tertiary-foreground">
                            {loading || error ? "..." : `${stats?.total_hours_content}h`}
                        </div>
                        <div className="text-xs text-muted-foreground">Contenu</div>
                    </div>
                </div>
                <Button asChild size={'lg'}>
                    <Link to={`${import.meta.env.VITE_PRODUCTION}`}>Ouvrir l'application</Link>
                </Button>
            </div>

            {/* Lien légal en bas */}
            <div className="flex gap-3 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Link 
                    to="/legal" 
                    className="text-muted-foreground text-xs hover:text-foreground transition-colors underline"
                >
                    Mentions légales
                </Link>
                <a
                    href="mailto:contact@ardent-projet.fr"
                    className="text-muted-foreground text-xs hover:text-foreground transition-colors underline"
                >
                    Nous contacter
                </a>
            </div>
        </section>
    );
}
