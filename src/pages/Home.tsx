import HeroSection from "@/components/home/HeroSection.tsx";
import WhitepaperSection from "@/components/home/WhitepaperSection.tsx";
import SocialSection from "@/components/home/SocialSection.tsx";
import Footer from "@/components/Footer.tsx";

export default function Home() {
    return (
        <main className="space-y-10">
            <HeroSection />
            <WhitepaperSection />
            <SocialSection />
            <Footer />
        </main>
    )
}
