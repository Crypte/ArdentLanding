import { Link } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center space-y-4 pt-8 border-t border-border/50">
            <div className="flex justify-center space-x-6 text-sm">
                <Link
                    to="/legal"
                    className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                    Informations légales
                </Link>
            </div>
            <p className="text-xs text-muted-foreground">
                © {currentYear} Ardent. Révolutionner l'accès au savoir.
            </p>
        </footer>
    );
}