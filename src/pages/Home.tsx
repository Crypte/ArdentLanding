import Faq from "@/components/home/Faq.tsx"
import HeroSection from "@/components/home/HeroSection.tsx";
import Category from "@/components/home/Category.tsx";
import PremiumCard from "@/components/home/PremiumCard.tsx";
import MobileApp from "@/components/home/MobileApp.tsx";


export default function Home() {
    return (
        <main className="space-y-40">
            <HeroSection/>
            <Category/>
            <PremiumCard/>
            <MobileApp/>
            <Faq />
        </main>
    )
}
