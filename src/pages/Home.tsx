import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
        </div>
    );
};

export default Home;
