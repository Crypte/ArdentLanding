import {Badge} from "@/components/ui/badge.tsx";
import RotateHeroText from "@/components/RotateHeroText.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import { useStats } from "@/hooks/useStats";
import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";

export default function HeroCard() {
    const { stats, loading, error } = useStats();

    return (
            <Card className={'max-w-2xl mx-auto'}>
                <CardContent className=" flex flex-col item-center space-y-10 w-full">
                <div className={'space-y-4 text-center'}>
                    <Badge variant="secondary"><img className={'h-7'} src={'/ArdentLogo.png'} alt="Ardent Logo" /></Badge>
                <RotateHeroText />
                <p className="text-muted-foreground font-light">
                    Accéder à la plus grande base de données de savoir
                </p>
                </div>
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
                    <Link to={`${import.meta.env.VITE_APP_URL}`}>Accéder à l'app</Link>
                </Button>
                </CardContent>
                <CardFooter className={'flex items-center justify-center space-x-3'}>
                    <Link
                        to="/legal"
                        className="text-muted-foreground text-xs hover:text-foreground transition-colors underline"
                    >
                        Informations légales
                    </Link>
                    <Link
                        to="mailto:contact@ardent-projet.fr"
                        className="text-muted-foreground text-xs hover:text-foreground transition-colors underline"
                    >
                        Nous contacter
                    </Link>
                </CardFooter>

            </Card>
    );
}
