import {
  Header,
  ProblemChecklist,
  Hero,
  Cases,
  Founder,
  StrategicMeeting,
  Ecosystem,
  PartnersBand,
  Bitrix24,
  CommunityTG,
  SocialLinks,
  ContactForm,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <Hero />
        <ProblemChecklist />
        <Cases />
        <Founder />
        <StrategicMeeting />
        <Ecosystem />
        <PartnersBand />
        <Bitrix24 />
        <CommunityTG />
        <SocialLinks />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
