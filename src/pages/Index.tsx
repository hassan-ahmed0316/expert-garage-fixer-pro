
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Phone, MapPin, Clock, Star, CheckCircle, Wrench, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [showStickyPhone, setShowStickyPhone] = useState(false);
  const servingAreasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyPhone(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServingAreas = () => {
    servingAreasRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const phoneNumber = "(954) 539-6734";

  const garageIssues = [
    {
      title: "Garage Door Opener Not Working",
      problem: "Motor runs but door won't move? Complete silence when pressing the remote?",
      solution: "Usually it's a stripped gear, burnt motor, or power supply issue. Our techs carry the most common opener parts and can get you running in one visit. We work on all major brands - LiftMaster, Chamberlain, Genie, and more.",
      urgency: "high"
    },
    {
      title: "Garage Door Stuck Halfway", 
      problem: "Door stops mid-way up or down and won't complete the cycle?",
      solution: "This screams broken springs or cable issues. Never try to force it - you could make it worse or get hurt. Our guys will safely diagnose if it's spring tension, cable slippage, or track alignment causing the jam.",
      urgency: "high"
    },
    {
      title: "Garage Door Closes Then Opens Again",
      problem: "Door hits the ground and immediately reverses back up?",
      solution: "Your safety system is working, but something's triggering it unnecessarily. Could be sensor misalignment, dirty photo eyes, or incorrect force settings. Quick adjustment usually fixes this annoying problem.",
      urgency: "medium"
    },
    {
      title: "Garage Door Off Track",
      problem: "Door is crooked, making grinding noises, or completely derailed?",
      solution: "Stop using it immediately! An off-track door can cause serious damage or injury. Usually caused by worn rollers, bent tracks, or broken cables. Our team will realign everything and replace any damaged hardware.",
      urgency: "high"
    },
    {
      title: "Garage Door Sensor Issue",
      problem: "Door won't close, or you have to hold the button down to make it work?",
      solution: "Your photo-eye sensors are either dirty, misaligned, or one has failed. Sometimes it's just spider webs or dirt blocking the beam. Other times the sensors need replacement or rewiring.",
      urgency: "medium"
    },
    {
      title: "Garage Door Making Noise",
      problem: "Grinding, squeaking, banging, or rattling when operating?",
      solution: "Noisy doors usually mean worn rollers, loose hardware, or dry hinges. Sometimes it's chain slack on opener systems. A good tune-up with proper lubrication often solves this, but worn parts may need replacement.",
      urgency: "low"
    },
    {
      title: "Garage Door Remote Not Working",
      problem: "Remote works sometimes, or not at all? Multiple remotes acting up?",
      solution: "Could be dead batteries (try that first!), remote programming issues, or receiver problems in the opener. Our techs can reprogram existing remotes or set up new ones on the spot.",
      urgency: "low"
    },
    {
      title: "Garage Door Keypad Not Working",
      problem: "Keypad lights up but door won't respond, or no response at all?",
      solution: "Usually it's a programming issue or the keypad has lost its connection to the opener. Sometimes battery replacement or keypad cleaning does the trick. We can reprogram or replace if needed.",
      urgency: "low"
    },
    {
      title: "Garage Door Won't Open",
      problem: "Complete dead door - no response to remote, wall button, or keypad?",
      solution: "Could be power issues, blown fuses, broken springs, or opener motor failure. We start with the basics and work up to major component replacement. Most no-power issues are fixable same-day.",
      urgency: "high"
    }
  ];

  const metroAreas = [
    "New Jersey (Statewide)",
    "Long Island & Albany, NY", 
    "Boston, MA",
    "Baltimore, MD & Washington, DC",
    "Philadelphia, PA",
    "Cleveland / Columbus / Cincinnati, OH",
    "Detroit & Grand Rapids, MI",
    "Chicago, IL",
    "Indianapolis, IN",
    "Atlanta, GA",
    "Nashville, TN",
    "Minneapolis, MN",
    "Miami / Tampa / Orlando / Jacksonville, FL",
    "Dallas / Houston / San Antonio / Austin, TX",
    "Denver, CO",
    "Phoenix & Tucson, AZ",
    "Las Vegas, NV",
    "Los Angeles / San Diego / San Jose / Sacramento / San Francisco, CA",
    "Seattle, WA",
    "Portland, OR",
    "Charlotte, NC"
  ];

  const regionGroups = {
    "Northeast": ["New Jersey (Statewide)", "Long Island & Albany, NY", "Boston, MA", "Philadelphia, PA"],
    "Mid-Atlantic": ["Baltimore, MD & Washington, DC"],
    "Midwest": ["Cleveland / Columbus / Cincinnati, OH", "Detroit & Grand Rapids, MI", "Chicago, IL", "Indianapolis, IN", "Minneapolis, MN"],
    "South": ["Atlanta, GA", "Nashville, TN", "Miami / Tampa / Orlando / Jacksonville, FL", "Charlotte, NC"],
    "Southwest": ["Dallas / Houston / San Antonio / Austin, TX", "Phoenix & Tucson, AZ"],
    "West": ["Denver, CO", "Las Vegas, NV", "Los Angeles / San Diego / San Jose / Sacramento / San Francisco, CA", "Seattle, WA", "Portland, OR"]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Wrench className="h-8 w-8 text-yellow-400" />
            <div>
              <h1 className="text-2xl font-bold text-yellow-400">Garage Experts Inc.</h1>
              <p className="text-sm text-gray-300">Professional Garage Door Repair</p>
            </div>
          </div>
          <Button 
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-6 py-3 text-lg"
            onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
          >
            <Phone className="mr-2 h-5 w-5" />
            {phoneNumber}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Need a <span className="text-yellow-400">Garage Door Guy</span> Near You?
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            We Fix What's Broken. Fast Response. Real Solutions.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Clock className="h-6 w-6" />
              <span className="text-lg font-semibold">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <MapPin className="h-6 w-6" />
              <span className="text-lg font-semibold">30+ Metro Areas</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Star className="h-6 w-6" />
              <span className="text-lg font-semibold">4.8/5 Rating</span>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-8 py-4 text-xl"
            onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
          >
            <Phone className="mr-3 h-6 w-6" />
            Talk to a Garage Door Expert Now
          </Button>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Common Garage Door Problems We Fix
            </h2>
            <p className="text-xl text-gray-600">
              Click on your problem below to see how we solve it
            </p>
          </div>

          <div className="grid gap-4">
            {garageIssues.map((issue, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      {issue.urgency === 'high' && <AlertTriangle className="h-6 w-6 text-red-500" />}
                      {issue.urgency === 'medium' && <AlertTriangle className="h-6 w-6 text-yellow-500" />}
                      {issue.urgency === 'low' && <CheckCircle className="h-6 w-6 text-green-500" />}
                      <div>
                        <h3 className="text-xl font-bold text-black">{issue.title}</h3>
                        <p className="text-gray-600">{issue.problem}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`h-6 w-6 text-yellow-400 transition-transform duration-300 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {activeAccordion === index && (
                    <div className="px-6 pb-6 border-t bg-yellow-50">
                      <div className="pt-4">
                        <h4 className="font-bold text-black mb-3">How We Fix It:</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">{issue.solution}</p>
                        <Button 
                          className="bg-black text-yellow-400 hover:bg-gray-800"
                          onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Get This Fixed Today
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-12">
            Why Homeowners Choose Garage Experts Inc.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:border-yellow-400 transition-all hover:shadow-lg">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Same-Day Service</h3>
              <p className="text-gray-600">Most repairs completed in one visit. We stock common parts on every truck.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:border-yellow-400 transition-all hover:shadow-lg">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">Fully certified technicians with comprehensive insurance coverage for your peace of mind.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:border-yellow-400 transition-all hover:shadow-lg">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Honest Pricing</h3>
              <p className="text-gray-600">No surprises, no upselling. You'll know exactly what you're paying before we start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section ref={servingAreasRef} className="py-16 px-4 bg-black text-white" id="service-areas">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-yellow-400">🧭</span> Now Serving These Major Metro Areas
            </h2>
            <p className="text-xl text-gray-300">Fast Dispatch Available in 30+ Major Metro Areas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {metroAreas.map((area, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg border border-yellow-400 hover:bg-gray-800 transition-all">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-8 py-4 text-xl"
              onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
            >
              <Phone className="mr-3 h-6 w-6" />
              Talk to a Live Garage Technician
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don't Let a Broken Garage Door Ruin Your Day
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Our experienced technicians are standing by to help. Real people, real solutions, real fast.
          </p>
          
          <Button 
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-12 py-6 text-2xl animate-pulse"
            onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
          >
            <Phone className="mr-3 h-8 w-8" />
            Call {phoneNumber} Now
          </Button>
          
          <p className="text-sm text-gray-400 mt-4">
            Available 24/7 for Emergency Repairs
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Wrench className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold text-yellow-400">Garage Experts Inc.</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Need urgent help? Call now</h3>
              <Button 
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold"
                onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
              >
                <Phone className="mr-2 h-4 w-4" />
                {phoneNumber}
              </Button>
            </div>
          </div>
          
          {/* Right Column - Regions */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Service Regions</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(regionGroups).map(([region, cities]) => (
                <div key={region}>
                  <h4 className="font-bold text-yellow-400 mb-2">{region}</h4>
                  <ul className="space-y-2">
                    {cities.map((city) => (
                      <li key={city}>
                        <button
                          className="text-gray-400 hover:text-yellow-400 flex items-center transition-colors"
                          onClick={scrollToServingAreas}
                        >
                          <ArrowRight className="h-3 w-3 mr-1" />
                          {city.split("/")[0].trim()}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Garage Experts Inc. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sticky Phone Button */}
      {showStickyPhone && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-6 py-4 rounded-full shadow-lg animate-pulse"
            onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
          >
            <Phone className="mr-2 h-6 w-6" />
            Call Now
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;
