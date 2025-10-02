"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import PlayfulHero from '@/components/sections/layouts/hero/BillboardHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';

const navItems = [
  { name: "hero", id: "hero" },
  { name: "about", id: "about" },
  { name: "how-to-buy", id: "how-to-buy" },
  { name: "tokenomics", id: "tokenomics" },
  { name: "faq", id: "faq" },
  { name: "footer", id: "footer" }
];

const theme: SiteTheme = {
  styleVariant: "futuristicAndOutOfBox",
  colorTemplate: 2,
  textAnimation: "slide"
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple navItems={navItems} logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-s-1759393460004-6903a070.jpg" logoAlt="SpectraCoin Logo" brandName="SpectraCoin" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <PlayfulHero title="Welcome to SpectraCoin" subtitle="The neon-forward memecoin" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <BaseAbout title="About SpectraCoin" descriptions={["SpectraCoin is designed for the future.", "Join us on a journey through the crypto universe.", "Transparent tokenomics, engaged community."]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics title="Tokenomics" description="Discover our key metrics" kpiItems={[{ value: "10M", description: "Total Supply" }, { value: "2M", description: "Circulating Supply" }, { value: "1M", description: "Liquidity" }]} />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ items={[{ title: "What is SpectraCoin?", content: "SpectraCoin is a neon-forward memecoin that empowers the community and enhances user experience." }, { title: "How do I buy SpectraCoin?", content: "You can buy SpectraCoin through various exchanges." }, { title: "What is the tokenomics?", content: "Our tokenomics focuses on transparency and community engagement." }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <GradientFooter items={[{ label: "Privacy Policy", onClick: () => { console.log('Privacy clicked'); } }, { label: "Terms of Use", onClick: () => { console.log('Terms clicked'); } }, { label: "Contact Us", onClick: () => { console.log('Contact clicked'); } }]} />
      </div>
    </SiteThemeProvider>
  );
}