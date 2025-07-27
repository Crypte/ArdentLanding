import {Badge} from "@/components/ui/badge.tsx";
import RotateHeroText from "@/components/RotateHeroText.tsx";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRightIcon} from "lucide-react";

function HeroSection() {
    return (
        <section className="w-full py-24 md:py-24 relative overflow-hidden">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <Badge variant="secondary">Accès gratuit temporaire</Badge>
                    <div className="space-y-2">
                        <RotateHeroText />
                        <h2 className="text-tertiary text-lg md:text-xl">Devenez le plus intelligent de la pièce</h2>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto font-light">
                        Cinq minutes par jour suffisent pour transformer votre esprit. Une approche discrète et profonde du savoir
                        culturel.
                    </p>
                    <div className="pt-4 space-x-4">
                        <Link to={`${import.meta.env.VITE_PRODUCTION}/login`}>
                            <Button variant="secondary">Se connecter</Button>
                        </Link>
                        <Link to={`${import.meta.env.VITE_PRODUCTION}/register`}>
                            <Button className={'group'}>
                                S'inscrire
                                <ArrowRightIcon
                                    className="-me-1 ml-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                                    size={16}
                                    aria-hidden="true"
                                />
                            </Button>
                        </Link>
                    </div>
                </div>
        </section>
    );
}

export default HeroSection;