import StaticNavbar from "@/components/layout/StaticNavbar";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Footer from "@/components/layout/Footer";

export default function ProjectPage() {
    return (
        <>
            <StaticNavbar />
            <main className="pt-24 page-x min-h-[80dvh]">
                <ScrollIndicator />
            </main>
            <Footer />
        </>
    );
}
