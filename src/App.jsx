import './App.css';
import TopBanner from './components/TopBanner';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import TutorsSection from './components/TutorsSection';
import WhoSection from './components/WhoSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <main className='bg-white text-gray-800'>
      <TopBanner />
      <NavBar />
      <HeroSection />
      <TutorsSection />
      <WhoSection />
      <Testimonials />
    </main>
  );
}

export default App;
