import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { useStats } from "@/hooks/useStats";

export default function HeroSection() {
    const { stats, loading, error } = useStats();

    return (
        <section className="text-center space-y-8 py-10 lg:py-20">
            {/* Hero principal */}
            <div className="space-y-6">
                <h1 className="font-display text-5xl font-bold italic drop-shadow-sm md:text-8xl lg:text-9xl bg-gradient-to-r from-primary to-tertiary-foreground bg-clip-text text-transparent">
                    L'ignorance n'est plus une option
                </h1>
                <p className="text-xl text-muted-foreground">
                    Accédez à la plus grande base de données de savoir structuré et accessible
                </p>
            </div>

            {/* Stats en grille moderne */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-card to-card/50 border rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold text-tertiary-foreground mb-2">
                        {loading || error ? "..." : stats?.total_published_resources}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        Ressources Disponibles
                    </div>
                </div>
                <div className="bg-gradient-to-br from-card to-card/50 border rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold text-tertiary-foreground mb-2">
                        {loading || error ? "..." : stats?.total_themes}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        Domaines de Savoir
                    </div>
                </div>
                <div className="bg-gradient-to-br from-card to-card/50 border rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold text-tertiary-foreground mb-2">
                        {loading || error ? "..." : `${stats?.total_hours_content}h`}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        Heures de Contenu
                    </div>
                </div>
            </div>

            {/* CTA principal */}
            <div className="pt-4">
                <Button asChild>
                    <Link to={`${import.meta.env.VITE_APP_URL}`}>
                        Découvrir Ardent
                    </Link>
                </Button>
            </div>
        </section>
    );
}