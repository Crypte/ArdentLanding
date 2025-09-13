import MarkdownRenderer from "@/components/MarkdownRenderer.tsx";
import {Card, CardContent} from "@/components/ui/card.tsx";

const fallbackContent = `# Livre Blanc Ardent
## Révolutionner l'Accès au Savoir

### Introduction
Dans une époque où l'information prolifère à une vitesse vertigineuse, **Ardent** émerge comme une solution révolutionnaire pour démocratiser l'accès au savoir.

L'ignorance n'est plus une option dans notre société moderne. Chaque individu mérite d'avoir accès aux outils et aux ressources nécessaires pour comprendre et façonner le monde qui l'entoure.`;

export default function WhitepaperSection() {
    return (
        <section>
            <Card>
                <CardContent>
                <MarkdownRenderer 
                    filePath="livre-blanc"
                    fallbackContent={fallbackContent}
                    className="prose max-w-none"
                />
                </CardContent>
            </Card>
        </section>
    );
}