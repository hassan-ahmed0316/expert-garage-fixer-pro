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
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
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
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold">
                <span className="text-yellow-400">Garage</span>
                <span className="text-white">Experts</span>
                <span className="text-gray-400 text-sm sm:text-base font-normal ml-1">Inc.</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-300">Professional Garage Door Repair</p>
            </div>
          </div>
          <Button 
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-4 py-2 sm:px-6 sm:py-3 text-lg sm:text-xl w-full sm:w-auto"
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
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-xl w-full sm:w-auto"
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

          <div className="grid gap-4">
            {garageIssues.map((issue, index) => (
              <Card key={index} className="border-2 border-gray-900 hover:border-yellow-400 transition-all duration-300 shadow-sm">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-3 sm:p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold bg-gray-900 text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-700">{issue.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{issue.problem}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 sm:h-6 sm:w-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeAccordion === index 
                        ? 'max-h-[1000px] opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t bg-yellow-50">
                      <div className="pt-3">
                        <h4 className="font-bold text-black mb-2 text-sm sm:text-base">How We Fix It:</h4>
                        <p className="text-sm text-gray-700">{issue.solution}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Now Responsive */}
      <section className="py-10 sm:py-16 px-4 bg-white">
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
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-2xl w-full sm:w-auto"
              onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
            >
              <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              Call {phoneNumber} Now
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-black mb-2 sm:mb-4">
              Expert Solutions for Every Garage Door Problem
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Click on your issue below to learn more about our professional solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Broken Spring Repair",
                description: "Torsion and extension spring repairs with safety-first approach",
                causes: "Age, wear and tear, improper maintenance, extreme temperatures",
                risks: "Door collapse, property damage, safety hazards",
                diyMistakes: "Attempting spring replacement without proper tools, incorrect spring sizing",
                signs: "Loud bang, door won't open, uneven movement, visible spring damage"
              },
              {
                title: "Opener Repair & Installation",
                description: "Complete opener solutions for all major brands",
                causes: "Motor failure, gear wear, electrical issues, programming problems",
                risks: "Security vulnerability, inconvenience, potential door damage",
                diyMistakes: "Incorrect wiring, improper mounting, wrong model selection",
                signs: "No response to remote, unusual noises, partial operation"
              },
              {
                title: "Door Off Track Repair",
                description: "Professional track realignment and hardware repair",
                causes: "Impact damage, worn rollers, broken cables, improper installation",
                risks: "Complete door failure, property damage, safety concerns",
                diyMistakes: "Forcing door movement, improper track adjustment",
                signs: "Crooked door, grinding noises, jerky movement"
              },
              {
                title: "Broken Cable Repair",
                description: "High-strength cable replacement and adjustment",
                causes: "Cable fraying, improper tension, worn pulleys",
                risks: "Door imbalance, spring damage, safety hazards",
                diyMistakes: "Incorrect cable routing, improper tensioning",
                signs: "Visible cable damage, uneven door movement"
              },
              {
                title: "Garage Door Roller Repair",
                description: "Premium roller replacement and track maintenance",
                causes: "Worn bearings, lack of lubrication, track misalignment",
                risks: "Increased wear, noisy operation, door damage",
                diyMistakes: "Using wrong roller type, improper installation",
                signs: "Squeaking, grinding, jerky movement"
              },
              {
                title: "Garage Door Maintenance & Tune-Up",
                description: "Comprehensive maintenance for optimal performance",
                causes: "Lack of regular maintenance, environmental factors",
                risks: "Premature wear, unexpected failures, safety issues",
                diyMistakes: "Incorrect lubrication, missed components",
                signs: "Noisy operation, slow movement, general wear"
              },
              {
                title: "Remote Repair & Programming",
                description: "Complete remote control solutions and programming",
                causes: "Battery failure, signal interference, programming issues",
                risks: "Security concerns, convenience issues",
                diyMistakes: "Incorrect programming sequence, wrong frequency",
                signs: "Intermittent operation, no response, range issues"
              },
              {
                title: "Garage Door Panel Repair",
                description: "Expert panel replacement and dent repair",
                causes: "Impact damage, weather damage, age-related wear",
                risks: "Security issues, weather damage, aesthetic problems",
                diyMistakes: "Improper panel alignment, wrong panel selection",
                signs: "Visible damage, water leaks, poor insulation"
              },
              {
                title: "New Garage Door Installation",
                description: "Complete door system installation and setup",
                causes: "Old age, severe damage, upgrade needs",
                risks: "Security vulnerabilities, energy loss, safety issues",
                diyMistakes: "Incorrect sizing, improper installation",
                signs: "Multiple repairs needed, poor performance"
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className={`border-2 transition-all duration-300 shadow-sm ${
                  activeAccordion === index 
                    ? 'border-yellow-400 bg-yellow-50 shadow-md' 
                    : 'border-gray-900 hover:border-yellow-400'
                }`}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full p-3 sm:p-4 text-left flex items-center justify-between transition-colors ${
                      activeAccordion === index 
                        ? 'bg-yellow-50' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold transition-colors ${
                        activeAccordion === index 
                          ? 'bg-black text-yellow-400' 
                          : 'bg-gray-900 text-white'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                          activeAccordion === index ? 'text-black' : 'text-gray-700'
                        }`}>{service.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 flex-shrink-0 ${
                        activeAccordion === index 
                          ? 'rotate-180 text-yellow-400' 
                          : 'text-gray-400'
                      }`} 
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeAccordion === index 
                        ? 'max-h-[1000px] opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t bg-yellow-50">
                      <div className="pt-3 space-y-3">
                        <div>
                          <h4 className="font-bold text-black mb-1 text-sm sm:text-base">Common Causes:</h4>
                          <p className="text-gray-700 text-sm">{service.causes}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1 text-sm sm:text-base">Risks of Delaying:</h4>
                          <p className="text-gray-700 text-sm">{service.risks}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1 text-sm sm:text-base">DIY Mistakes to Avoid:</h4>
                          <p className="text-gray-700 text-sm">{service.diyMistakes}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1 text-sm sm:text-base">Signs You Need Help:</h4>
                          <p className="text-gray-700 text-sm">{service.signs}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

      {/* Testimonials Section */}
      <section className="py-10 sm:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-black mb-2 sm:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Real experiences from homeowners we've helped
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <Card className="border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Incredible service! My garage door was stuck and they had it fixed in under an hour. The technician was professional and explained everything clearly. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                    JS
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-black">John Smith</p>
                    <p className="text-sm text-gray-600">Miami, FL</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Emergency service at 2 AM! My garage door wouldn't close and they were here within 30 minutes. Fixed the issue and even cleaned up after themselves. Outstanding!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                    ML
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-black">Maria Lopez</p>
                    <p className="text-sm text-gray-600">Chicago, IL</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "They replaced my old garage door opener with a new smart system. The installation was clean and professional. Now I can control my garage from my phone!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                    RT
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-black">Robert Taylor</p>
                    <p className="text-sm text-gray-600">Dallas, TX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-lg sm:text-xl text-gray-700 font-bold">
              Join thousands of satisfied customers who trust us with their garage door repairs
            </p>
            <p className="text-base sm:text-lg text-gray-800 mt-2">
              4.9/5 average rating from over 10,000+ completed service calls
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Now Responsive with 5 columns on large screens */}
      <footer className="bg-black text-white py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Footer Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 sm:mb-10">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex flex-col">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-yellow-400">Garage</span>
                  <span className="text-white">Experts</span>
                  <span className="text-gray-400 text-sm sm:text-base font-normal ml-1">Inc.</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Professional Garage Door Repair</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <button 
                    onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                    className="text-lg hover:text-yellow-400 transition-colors"
                  >
                    {phoneNumber}
                  </button>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span className="text-lg">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="text-lg">Serving Major US Locations</span>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-yellow-400">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <button className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    Broken Spring Repair
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    Opener Repair & Installation
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    Door Off Track Repair
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    Broken Cable Repair
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    New Garage Door Installation
                  </button>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-yellow-400">Service Areas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm font-semibold text-gray-400 mb-2">Northeast</h5>
                  <ul className="space-y-2">
                    {regionGroups["Northeast"].map((city) => (
                      <li key={city}>
                        <button
                          className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                          onClick={scrollToServingAreas}
                        >
                          {city.split("/")[0].trim()}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-400 mb-2">South</h5>
                  <ul className="space-y-2">
                    {regionGroups["South"].map((city) => (
                      <li key={city}>
                        <button
                          className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                          onClick={scrollToServingAreas}
                        >
                          {city.split("/")[0].trim()}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button 
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold w-full mt-4"
                onClick={scrollToServingAreas}
              >
                View All Service Areas
              </Button>
            </div>
          </div>
          
          <Separator className="bg-gray-800 my-6" />
          
          {/* Bottom Footer - Now Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4">
            <p className="text-sm text-gray-500 mb-4 sm:mb-0">
              © 2025 Garage Experts Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button onClick={scrollToServingAreas} className="text-sm text-gray-500 hover:text-yellow-400 transition-colors">
                Service Areas
              </button>
              <button 
                onClick={() => window.open(`tel:${phoneNumber}`, '_self')} 
                className="text-sm text-gray-500 hover:text-yellow-400 transition-colors"
              >
                Contact Us
              </button>
              <button onClick={() => window.scrollTo(0, 0)} className="text-sm text-gray-500 hover:text-yellow-400 transition-colors">
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
            <Phone className="mr-[1px] h-5 w-5 sm:h-6 sm:w-6" />
            Call Now
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;
