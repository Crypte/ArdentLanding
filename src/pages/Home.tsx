import HeroSection from "@/components/home/HeroSection.tsx";
import WhitepaperSection from "@/components/home/WhitepaperSection.tsx";
import SocialSection from "@/components/home/SocialSection.tsx";
import Footer from "@/components/Footer.tsx";

export default function Home() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-20">
            <HeroSection />
            <WhitepaperSection />
            <SocialSection />
            <Footer />
        </main>
    )
}
