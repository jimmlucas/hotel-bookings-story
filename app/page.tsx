import HeroSection from '@/components/sections/hero-section';
import IntroSection from '@/components/sections/intro-section';
import Insight1Section from '@/components/sections/insight1-section';
import Insight2Section from '@/components/sections/insight2-section';
import Insight3Section from '@/components/sections/insight3-section';
import Insight4Section from '@/components/sections/insight4-section';
import Insight5Section from '@/components/sections/insight5-section';
import ConclusionSection from '@/components/sections/conclusion-section';
import ScrollProgress from '@/components/scroll-progress';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navigation />
      
      <HeroSection />
      <IntroSection />
      <Insight1Section />
      <Insight2Section />
      <Insight3Section />
      <Insight4Section />
      <Insight5Section />
      <ConclusionSection />
    </main>
  );
}
