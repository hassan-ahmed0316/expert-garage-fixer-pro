
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Phone, MapPin, Clock, Star, CheckCircle, Wrench, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [showStickyPhone, setShowStickyPhone] = useState(false);
  const servingAreasRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet } = useMobile();
  
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
      {/* Header - Now Responsive */}
      <header className="bg-black text-white py-3 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-3 sm:mb-0">
            <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-yellow-400">Garage Experts Inc.</h1>
              <p className="text-xs sm:text-sm text-gray-300">Professional Garage Door Repair</p>
            </div>
          </div>
          <Button 
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg w-full sm:w-auto"
            onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
          >
            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            {phoneNumber}
          </Button>
        </div>
      </header>

      {/* Hero Section - Now Responsive */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-10 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-2">
            Need a <span className="text-yellow-400">Garage Door Guy</span> Near You?
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 px-2">
            We Fix What's Broken. Fast Response. Real Solutions.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-base sm:text-lg font-semibold">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-base sm:text-lg font-semibold">30+ Metro Areas</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Star className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-base sm:text-lg font-semibold">4.8/5 Rating</span>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl w-full sm:w-auto"
            onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
          >
            <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
            Talk to a Garage Door Expert Now
          </Button>
        </div>
      </section>

      {/* Common Problems Section - Now Responsive */}
      <section className="py-10 sm:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-black mb-2 sm:mb-4">
              Common Garage Door Problems We Fix
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Click on your problem below to see how we solve it
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {garageIssues.map((issue, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      {issue.urgency === 'high' && <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 flex-shrink-0" />}
                      {issue.urgency === 'medium' && <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 flex-shrink-0" />}
                      {issue.urgency === 'low' && <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0" />}
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-black">{issue.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{issue.problem}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 transition-transform duration-300 flex-shrink-0 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {activeAccordion === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t bg-yellow-50">
                      <div className="pt-3 sm:pt-4">
                        <h4 className="font-bold text-black mb-2 sm:mb-3">How We Fix It:</h4>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">{issue.solution}</p>
                        <Button 
                          className="bg-black text-yellow-400 hover:bg-gray-800 w-full sm:w-auto"
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

      {/* Why Choose Us - Now Responsive */}
      <section className="py-10 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-black mb-8 sm:mb-12">
            Why Homeowners Choose Garage Experts Inc.
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 hover:border-yellow-400 transition-all hover:shadow-lg">
              <div className="bg-yellow-400 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Same-Day Service</h3>
              <p className="text-sm sm:text-base text-gray-600">Most repairs completed in one visit. We stock common parts on every truck.</p>
            </div>
            
            <div className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 hover:border-yellow-400 transition-all hover:shadow-lg">
              <div className="bg-yellow-400 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Licensed & Insured</h3>
              <p className="text-sm sm:text-base text-gray-600">Fully certified technicians with comprehensive insurance coverage for your peace of mind.</p>
            </div>
            
            <div className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 hover:border-yellow-400 transition-all hover:shadow-lg sm:col-span-2 md:col-span-1">
              <div className="bg-yellow-400 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Star className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Honest Pricing</h3>
              <p className="text-sm sm:text-base text-gray-600">No surprises, no upselling. You'll know exactly what you're paying before we start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - Now Responsive */}
      <section ref={servingAreasRef} className="py-10 sm:py-16 px-4 bg-black text-white" id="service-areas">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">
              <span className="text-yellow-400">🧭</span> Now Serving These Major Metro Areas
            </h2>
            <p className="text-base sm:text-xl text-gray-300">Fast Dispatch Available in 30+ Major Metro Areas</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {metroAreas.map((area, index) => (
              <div key={index} className="bg-gray-900 p-3 sm:p-4 rounded-lg border border-yellow-400 hover:bg-gray-800 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button 
              size={isMobile ? "default" : "lg"}
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-xl w-full sm:w-auto"
              onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
            >
              <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              Talk to a Live Garage Technician
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA - Now Responsive */}
      <section className="py-10 sm:py-16 px-4 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Don't Let a Broken Garage Door Ruin Your Day
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 text-gray-300">
            Our experienced technicians are standing by to help. Real people, real solutions, real fast.
          </p>
          
          <Button 
            size={isMobile ? "default" : "lg"}
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-8 py-4 sm:px-12 sm:py-6 text-xl sm:text-2xl animate-pulse w-full sm:w-auto"
            onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
          >
            <Phone className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8" />
            Call {phoneNumber} Now
          </Button>
          
          <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
            Available 24/7 for Emergency Repairs
          </p>
        </div>
      </section>

      {/* Footer - Now Responsive with 5 columns on large screens */}
      <footer className="bg-black text-white py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Footer Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {/* Company Info */}
            <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                <span className="text-lg sm:text-2xl font-bold text-yellow-400">Garage Experts Inc.</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">Need urgent help? Call now</h3>
                <Button 
                  className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold w-full sm:w-auto"
                  onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {phoneNumber}
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                Professional garage door repair services available 24/7 for emergencies.
              </p>
            </div>
            
            {/* Service Regions - Now 4 Columns */}
            <div className="col-span-1">
              <h4 className="font-bold text-yellow-400 mb-3">Northeast</h4>
              <ul className="space-y-2">
                {regionGroups["Northeast"].map((city) => (
                  <li key={city}>
                    <button
                      className="text-xs sm:text-sm text-gray-400 hover:text-yellow-400 flex items-center transition-colors"
                      onClick={scrollToServingAreas}
                    >
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                      {city.split("/")[0].trim()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-bold text-yellow-400 mb-3">Mid-Atlantic & Midwest</h4>
              <ul className="space-y-2">
                {[...regionGroups["Mid-Atlantic"], ...regionGroups["Midwest"].slice(0, 4)].map((city) => (
                  <li key={city}>
                    <button
                      className="text-xs sm:text-sm text-gray-400 hover:text-yellow-400 flex items-center transition-colors"
                      onClick={scrollToServingAreas}
                    >
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                      {city.split("/")[0].trim()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-bold text-yellow-400 mb-3">South</h4>
              <ul className="space-y-2">
                {regionGroups["South"].map((city) => (
                  <li key={city}>
                    <button
                      className="text-xs sm:text-sm text-gray-400 hover:text-yellow-400 flex items-center transition-colors"
                      onClick={scrollToServingAreas}
                    >
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                      {city.split("/")[0].trim()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-bold text-yellow-400 mb-3">Southwest & West</h4>
              <ul className="space-y-2">
                {[...regionGroups["Southwest"], ...regionGroups["West"].slice(0, 4)].map((city) => (
                  <li key={city}>
                    <button
                      className="text-xs sm:text-sm text-gray-400 hover:text-yellow-400 flex items-center transition-colors"
                      onClick={scrollToServingAreas}
                    >
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                      {city.split("/")[0].trim()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Separator className="bg-gray-800 my-6" />
          
          {/* Bottom Footer - Now Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-3 sm:pt-4">
            <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-0">
              © 2025 Garage Experts Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button onClick={scrollToServingAreas} className="text-xs sm:text-sm text-gray-500 hover:text-yellow-400 transition-colors">
                Service Areas
              </button>
              <button onClick={() => window.open(`tel:${phoneNumber}`, '_self')} className="text-xs sm:text-sm text-gray-500 hover:text-yellow-400 transition-colors">
                Contact Us
              </button>
              <button onClick={() => window.scrollTo(0, 0)} className="text-xs sm:text-sm text-gray-500 hover:text-yellow-400 transition-colors">
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Phone Button - Now Responsive */}
      {showStickyPhone && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
          <Button
            size={isMobile ? "default" : "lg"}
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg animate-pulse"
            onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
          >
            <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            Call Now
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;
