import React, { useState, useEffect } from 'react';
import { 
  Mountain, 
  Leaf, 
  Heart, 
  Users, 
  Star, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronRight,
  Play,
  Compass,
  Sun,
  Moon,
  Cloud,
  Award,
  BookOpen,
  Globe,
  Shield
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "California, USA",
      text: "The spiritual journey through the Himalayas with Divine Pure Spirit Expeditions was life-changing. The meditation sessions at sunrise overlooking the peaks was pure magic.",
      rating: 5,
      image: "https://placehold.co/80x80/4f46e5/ffffff?text=SJ"
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      text: "The expertise of the guides was exceptional. They shared profound insights about Nepal's spiritual heritage that made every moment meaningful and transformative.",
      rating: 5,
      image: "https://placehold.co/80x80/059669/ffffff?text=MC"
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      text: "From the bustling markets of Kathmandu to the serene monasteries in the mountains, every experience was carefully curated. Divine Pure Spirit Expeditions exceeded all expectations!",
      rating: 5,
      image: "https://placehold.co/80x80/dc2626/ffffff?text=ER"
    }
  ];

  const packages = [
    {
      id: 1,
      title: "Himalayan Spiritual Retreat",
      duration: "14 Days",
      price: "$2,899",
      image: "https://placehold.co/400x300/0ea5e9/ffffff?text=Himalayas",
      highlights: ["Monastery Visits", "Guided Meditation", "Mountain Trekking", "Cultural Immersion"],
      description: "Experience the spiritual essence of the Himalayas with expert-guided meditation and ancient wisdom teachings."
    },
    {
      id: 2,
      title: "Sacred Valley Journey",
      duration: "10 Days",
      price: "$2,199",
      image: "https://placehold.co/400x300/10b981/ffffff?text=Valley",
      highlights: ["Temple Tours", "Yoga Sessions", "Local Cuisine", "Village Stays"],
      description: "Discover the sacred valleys of Nepal with authentic cultural experiences and personalized spiritual practices."
    },
    {
      id: 3,
      title: "Everest Base Camp Pilgrimage",
      duration: "18 Days",
      price: "$3,699",
      image: "https://placehold.co/400x300/f59e0b/ffffff?text=Everest",
      highlights: ["Base Camp Trek", "Prayer Flags Ceremony", "Sherpa Culture", "Stargazing"],
      description: "A transformative journey to the roof of the world combining adventure with deep spiritual awakening."
    }
  ];

  const guides = [
    {
      name: "Tenzin Dorje",
      expertise: "Buddhist Philosophy & Meditation",
      experience: "15+ years",
      image: "https://placehold.co/300x300/4f46e5/ffffff?text=TD",
      bio: "Born in a monastery in Tibet, Tenzin brings centuries-old wisdom to every spiritual journey, specializing in mindfulness and ancient meditation techniques."
    },
    {
      name: "Priya Sharma",
      expertise: "Yoga & Ayurveda",
      experience: "12+ years",
      image: "https://placehold.co/300x300/059669/ffffff?text=PS",
      bio: "Certified yoga instructor and Ayurvedic practitioner with deep knowledge of Nepal's healing traditions and holistic wellness practices."
    },
    {
      name: "Raj Kumar Thapa",
      expertise: "Cultural Heritage & Adventure",
      experience: "20+ years",
      image: "https://placehold.co/300x300/dc2626/ffffff?text=RK",
      bio: "Local expert with extensive knowledge of Nepal's cultural sites, trekking routes, and traditional practices passed down through generations."
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f9fafb', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ background: '#4f46e5', color: '#fff', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '1px' }}>
          <Mountain size={28} style={{ verticalAlign: 'middle', marginRight: 8 }} />
          Divine Pure Spirit
        </div>
        <div>
          <span style={{ margin: '0 1rem', cursor: 'pointer' }}>Home</span>
          <span style={{ margin: '0 1rem', cursor: 'pointer' }}>Packages</span>
          <span style={{ margin: '0 1rem', cursor: 'pointer' }}>Experiences</span>
          <span style={{ margin: '0 1rem', cursor: 'pointer' }}>About</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '3rem 1rem 2rem 1rem', background: '#6366f1', color: '#fff' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Embark on a Spiritual Journey in Nepal</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Guided expeditions, meditation, and cultural immersion in the heart of the Himalayas.
        </p>
        <button style={{ background: '#fff', color: '#4f46e5', border: 'none', padding: '0.75rem 2rem', borderRadius: '999px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
          Explore Packages
        </button>
      </section>

      {/* Packages Section */}
      <section style={{ padding: '2rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#4f46e5' }}>Our Packages</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {packages.map(pkg => (
            <div key={pkg.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #e0e7ef', width: 320, padding: 20 }}>
              <img src={pkg.image} alt={pkg.title} style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />
              <h3 style={{ color: '#4f46e5', marginBottom: 8 }}>{pkg.title}</h3>
              <div style={{ marginBottom: 8, color: '#6b7280' }}>
                <Calendar size={16} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                {pkg.duration} &nbsp; | &nbsp; <Star size={16} style={{ verticalAlign: 'middle', marginRight: 4 }} /> {pkg.price}
              </div>
              <ul style={{ paddingLeft: 20, marginBottom: 8 }}>
                {pkg.highlights.map((h, i) => (
                  <li key={i} style={{ color: '#059669' }}>{h}</li>
                ))}
              </ul>
              <p style={{ color: '#374151', fontSize: 14 }}>{pkg.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ background: '#f3f4f6', padding: '2rem 1rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#4f46e5' }}>Testimonials</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #e0e7ef', padding: 32, maxWidth: 500, textAlign: 'center' }}>
            <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} style={{ borderRadius: '50%', marginBottom: 16 }} />
            <p style={{ fontStyle: 'italic', marginBottom: 16 }}>"{testimonials[activeTestimonial].text}"</p>
            <div style={{ fontWeight: 'bold', color: '#4f46e5' }}>{testimonials[activeTestimonial].name}</div>
            <div style={{ color: '#6b7280', fontSize: 14 }}>{testimonials[activeTestimonial].location}</div>
            <div style={{ marginTop: 8 }}>
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} size={18} color="#f59e0b" fill="#f59e0b" style={{ marginRight: 2, verticalAlign: 'middle' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section style={{ padding: '2rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#4f46e5' }}>Meet Our Guides</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {guides.map((guide, idx) => (
            <div key={idx} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #e0e7ef', width: 280, padding: 20, textAlign: 'center' }}>
              <img src={guide.image} alt={guide.name} style={{ borderRadius: '50%', width: 100, height: 100, marginBottom: 16 }} />
              <h3 style={{ color: '#4f46e5', marginBottom: 8 }}>{guide.name}</h3>
              <div style={{ color: '#059669', marginBottom: 4 }}>{guide.expertise}</div>
              <div style={{ color: '#6b7280', fontSize: 14, marginBottom: 8 }}>{guide.experience} experience</div>
              <p style={{ color: '#374151', fontSize: 14 }}>{guide.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#4f46e5', color: '#fff', textAlign: 'center', padding: '1rem', marginTop: 32 }}>
        <div>
          <span style={{ margin: '0 1rem' }}><Mail size={16} style={{ verticalAlign: 'middle', marginRight: 4 }} /> info@divinepurespirit.com</span>
          <span style={{ margin: '0 1rem' }}><Phone size={16} style={{ verticalAlign: 'middle', marginRight: 4 }} /> +977-123456789</span>
        </div>
        <div style={{ marginTop: 8 }}>
          <Instagram size={20} style={{ margin: '0 8px', verticalAlign: 'middle' }} />
          <Facebook size={20} style={{ margin: '0 8px', verticalAlign: 'middle' }} />
          <Twitter size={20} style={{ margin: '0 8px', verticalAlign: 'middle' }} />
        </div>
        <div style={{ marginTop: 8, fontSize: 14 }}>
          &copy; {new Date().getFullYear()} Divine Pure Spirit Expeditions. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;