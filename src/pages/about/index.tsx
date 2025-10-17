import Text from "../../components/Text";
import Button from "../../components/Button";
import Icon from "../../components/icons";
import { useNavigate } from "react-router-dom";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm bg-periwinkle/30 text-violet-blue">
    {children}
  </span>
);

const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="relative group">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-periwinkle/60 to-aquamarine/60 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative p-6 rounded-2xl bg-white shadow-card transition-transform duration-300 group-hover:-translate-y-1">
      <Text variant="subheading-three">{title}</Text>
      <Text variant="body-three" className="mt-2 text-dim-gray">{desc}</Text>
    </div>
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="p-6 rounded-xl bg-white shadow-card text-center">
    <Text variant="heading-three">{value}</Text>
    <Text variant="caption-four" className="mt-1 text-dim-gray">{label}</Text>
  </div>
);

const Testimonial = ({ quote, author }: { quote: string; author: string }) => (
  <div className="p-6 rounded-2xl bg-white shadow-card">
    <Text variant="body-two" className="italic">“{quote}”</Text>
    <Text variant="caption-three" className="mt-3 text-dim-gray">— {author}</Text>
  </div>
);

const About = () => {
  const navigate = useNavigate();
  return (
    <section>
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          className="absolute inset-0 -z-10 object-cover w-full h-full"
          src="https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Komorebi studio"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-raisin-black/70 via-raisin-black/30 to-transparent"></div>
        <div className="container-page pb-14 md:pb-20">
          <Pill>Since 2023</Pill>
          <Text variant="heading-one" className="text-white drop-shadow mt-3 tracking-tight">About Komorebi</Text>
          <Text variant="body-two" className="text-white/90 mt-3 max-w-2xl drop-shadow">
            Premium, minimal hoodies designed for everyday comfort and timeless style. Thoughtful details. Honest materials.
          </Text>
          <div className="mt-6">
            <Button onClick={() => navigate('/shop')}>
              <span className="flex items-center">
                <Icon name="arrow-small-right" />
                <span className="ml-2">Explore collection</span>
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Why Komorebi */}
      <div className="container-page mt-16 md:mt-24">
        <div className="max-w-3xl">
          <Text variant="heading-two">Why Komorebi</Text>
          <Text variant="body-two" className="mt-3 text-dim-gray">
            We blend quality fabrics, ethical production and minimalist design to bring you pieces that feel good,
            look sharp and last longer.
          </Text>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard title="Premium Fabrics" desc="Soft, breathable and durable for all-season comfort." />
          <FeatureCard title="Ethical Making" desc="Responsible sourcing and fair, traceable manufacturing." />
          <FeatureCard title="Timeless Design" desc="Clean silhouettes that pair with everything, year after year." />
          <FeatureCard title="Tailored Fit" desc="Modern cuts with inclusive sizing and unisex options." />
          <FeatureCard title="Low-Waste" desc="Small-batch drops and recyclable packaging." />
          <FeatureCard title="Care Made Easy" desc="Built to wash well and wear even better over time." />
        </div>
      </div>

      {/* Imagery + copy */}
      <div className="container-page mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img
            src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Craftsmanship"
            className="w-full h-[300px] md:h-[460px] object-cover"
          />
        </div>
        <div>
          <Pill>Our mission</Pill>
          <Text variant="heading-two" className="mt-3">Designed for real life</Text>
          <Text variant="body-two" className="mt-3 text-dim-gray">
            From the first sketch to the final stitch, we obsess over the details so you don’t have to. Every hoodie is
            rigorously tested for comfort, durability and fit.
          </Text>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-violet-blue"></span><Text variant="body-three">OEKO-TEX certified dyes</Text></li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-aquamarine"></span><Text variant="body-three">Recycled packaging</Text></li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-periwinkle"></span><Text variant="body-three">Responsible factories</Text></li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-marian-blue"></span><Text variant="body-three">Made to last</Text></li>
          </ul>
        </div>
      </div>

      {/* Stats */}
      <div className="container-page mt-16 md:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Stat value="50K+" label="Happy Customers" />
          <Stat value="98%" label="Satisfaction" />
          <Stat value="100%" label="Vegan Materials" />
          <Stat value="72hrs" label="Avg. Delivery" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="container-page mt-16 md:mt-24">
        <Text variant="heading-two">What our community says</Text>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Testimonial quote="The softest hoodie I own. The fit is perfect and it still looks new after dozens of washes." author="Priya, Mumbai" />
          <Testimonial quote="Minimal design done right. Feels premium without the loud branding." author="Arjun, Bangalore" />
        </div>
      </div>

      {/* Sustainability banner */}
      <div className="container-page mt-16 md:mt-24">
        <div className="relative overflow-hidden rounded-2xl p-6 md:p-10 bg-gradient-to-r from-marian-blue to-violet-blue text-white">
          <div className="relative z-10 max-w-3xl">
            <Text variant="heading-three" className="text-white">Better for you. Better for the planet.</Text>
            <Text variant="body-three" className="mt-2 text-white/90">We’re committed to ethical manufacturing and low-impact materials across our supply chain.</Text>
          </div>
          <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-aquamarine/30 blur-2xl"></div>
        </div>
      </div>

      {/* CTA */}
      <div className="container-page my-16 md:my-24">
        <div className="rounded-2xl bg-white p-6 md:p-10 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Text variant="heading-three">Ready to experience Komorebi?</Text>
            <Text variant="body-three" className="mt-1 text-dim-gray">Explore our latest drops and best-sellers.</Text>
          </div>
          <Button onClick={() => navigate('/shop')}>
            <span className="flex items-center">
              <Icon name="arrow-small-right" />
              <span className="ml-2">Shop now</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
