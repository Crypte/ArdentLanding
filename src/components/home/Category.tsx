import {BookOpen, Brain, Calendar, Lightbulb, MessageCircle, Target} from "lucide-react";

export default function Category() {
    const categories = [
        {
            type: "savoir",
            icon: Brain,
            label: "Savoir",
            description: "Connaissances approfondies",
        },
        {
            type: "anecdote",
            icon: Lightbulb,
            label: "Anecdote",
            description: "Histoires fascinantes",
        },
        {
            type: "action",
            icon: Target,
            label: "Action",
            description: "Activités pratiques",
        },
        {
            type: "evenement",
            icon: Calendar,
            label: "Événement",
            description: "Dates importantes",
        },
        {
            type: "vocabulaire",
            icon: BookOpen,
            label: "Vocabulaire",
            description: "Mots essentiels",
        },
        {
            type: "expression",
            icon: MessageCircle,
            label: "Expression",
            description: "Tournures françaises",
        },
    ]
    return (
        <section className="w-full bg-background rounded-lg">
                <div className="max-w-5xl mx-auto">
                    {/* Categories */}
                    <div>
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></div>
                                <span className="text-xs uppercase tracking-widest text-muted-foreground">Contenu varié</span>
                            </div>
                            <h2 className="text-xl md:text-2xl">Six types de ressources culturelles</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {categories.map((category) => {
                                const IconComponent = category.icon
                                return (
                                    <div className="text-center" key={category.type}>
                                        <div className="flex justify-center mb-3">
                                            <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center">
                                                <IconComponent className="h-5 w-5 text-slate-600" />
                                            </div>
                                        </div>
                                        <div className="text-sm font-medium text-tertiary">{category.label}</div>
                                        <div className="text-xs text-muted-foreground mt-1">{category.description}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
        </section>
    );
}