import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion.tsx";


export const faqs = [
    {
        question: "Est-ce que je dois créer un compte pour utiliser l'application ?",
        answer: "Non, vous pouvez accéder à 4 contenus gratuits par jour sans compte. Créer un compte permet de soutenir notre travail et binetôt de sauvegarder votre progression.",
    },
    {
        question: "Combien de contenus puis-je consulter chaque jour gratuitement ?",
        answer: "Vous pouvez consulter 4 contenus par jour, ce contenu est mutuel à tous les utilisateurs. Le roulement est fait à minuit chaque soir.",
    },
    {
        question: "Que se passe-t-il si j’ai déjà consulté mes 4 contenus du jour ?",
        answer: "Il faudra attendre minuit pour accéder à 4 nouveaux contenus, ou passer au plan premium pour un accès illimité.",
    },
    {
        question: "Que propose l’abonnement premium ?",
        answer: "Le plan premium donne un accès illimité à tous les contenus, sans restriction.",
    },
    {
        question: "Quels formats de contenu sont disponibles ?",
        answer: "L’application propose des articles courts, des anecdotes, des faits historiques, et des actions concrètes à appliquer.",
    },
    {
        question: "Quels sont les sujets abordés ?",
        answer: "Vous trouverez du contenu sur le développement personnel, l’histoire, l’écologie, la santé mentale, la productivité, et bien d'autres thèmes.",
    }
];


export default function Faq() {
    return (
        <section className={'w-full'}>
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-xl md:text-2xl mb-3">
                    Des Questions?
                </h2>
                <p className="mt-1 text-muted-foreground">
                    Réponses aux questions les plus posées.
                </p>
            </div>
            {/* End Title */}

            <div className="max-w-2xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((item) => (
                        <AccordionItem value={item.question} key={item.question} className="py-2">
                            <AccordionTrigger className="py-2 text-lg leading-6 hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-2">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}