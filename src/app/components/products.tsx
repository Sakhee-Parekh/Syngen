import {
  Video,
  Phone,
  MessageCircle,
  Mic,
  Heart,
  Tv,
  AppWindow,
  Users,
  FileText,
  BriefcaseMedical,
  PhoneCall,
} from "lucide-react";
import React from "react";

export default function Products() {
  const categories = [
    {
      title: "Visualize Youtube",
      useCases: [
        "Convert YouTube videos into structured learning materials",
        "Generate interactive mind maps for better content retention",
        "Create AI-powered flashcards for efficient studying",
      ],
      demoLink: "https://apps.nandiraju.com/viztube/",
      icon: <Video className="text-black text-4xl" />,
    },
    {
      title: "Voice Chat",
      useCases: [
        "Automate patient intake for healthcare providers",
        "Enhance customer service for automotive dealerships",
        "Streamline voice-based appointment scheduling",
      ],
      demoLink: "https://apps.nandiraju.com/voice_ai/",
      icon: <BriefcaseMedical className="text-black text-4xl" />,
    },
    {
      title: "Talk to Website",
      useCases: [
        "Enable AI-driven voice & chat support on Health care, DevOps, and RPA DevOps",
        "Provide automated customer engagement with follow-up queries",
        "Improve accessibility with voice-based navigation",
      ],
      demoLink: "https://edvenswa.nandiraju.com/voice",
      icon: <MessageCircle className="text-black text-4xl" />,
    },
    {
      title: "Voice AI with Tools",
      useCases: ["Develop voice-enabled task automation"],
      demoLink: "https://aiui.nandiraju.com/",
      icon: <Mic className="text-black text-4xl" />,
    },
    {
      title: "HealthCare Apps",
      useCases: [
        "Track cancer updates, clinical trials, and medical data (Cancer Notes, Cancer Trials, Clinical Trials Dashboard)",
        "Monitor emotional health, mood fluctuations, and self-reflection (Healment, MoodMeter)",
        "Assist with medical coding, HCPCS coverage, and clinical data exchange (Medicodz, API For Clinical Trials) . . .",
        // "Promote wellness and evidence-based lifestyle practices (Cracking the Wellness Code)",
        // "Capture, store, and analyze health data through IoT and connected devices (VitalHealthRecords, BlueKare IOT)",
        // "Connect cancer patients with experts and get second opinions (Cancer Concierge, ExpertOpinion)",
        // "Track pediatric milestones, vaccinations, and health conditions (PediaTik, HealthTik)",
        // "Facilitate cross-border healthcare, payments, and IVF donor matching (HealthBnB, ProGene)",
        // "Index, store, and analyze medical images (PACS Archiving)",
        // "Lookup IVF clinics, track trends, and facilitate fertility treatments (Santaan)",
      ],
      demoLink: "https://healthcare.nandiraju.com/",
      icon: <Heart className="text-black text-4xl" />,
    },
    {
      title: "Display Ads",
      useCases: [
        "Deliver personalized digital ads on consumer devices",
        "Enhance brand visibility with interactive ad experiences",
      ],
      demoLink: "https://apps.nandiraju.com/tv/display/",
      icon: <Tv className="text-black text-4xl" />,
    },
    {
      title: "Client App",
      useCases: [
        "Enable businesses to publish ads in real-time",
        "Optimize ad targeting with AI-driven insights",
        "Increase customer engagement through dynamic ad content",
      ],
      demoLink: "https://apps.nandiraju.com/tv/client/",
      icon: <AppWindow className="text-black text-4xl" />,
    },
    {
      title: "AI-Powered Virtual Avatars",
      useCases: [
        "Develop interactive AI-driven customer service avatars",
        "Create engaging virtual assistants for brand experiences",
      ],
      demoLink: "https://vagent-bay.vercel.app/welcome",
      icon: <Users className="text-black text-4xl" />,
    },
    {
      title: "Patient Mobile App",
      useCases: ["Manage patient information", "Schedule appointments"],
      demoLink: "https://apps.nandiraju.com/patient/",
      icon: <BriefcaseMedical className="text-black text-4xl" />,
    },
    {
      title: "SmartAI Document Processing",
      useCases: [
        "Automate document summarization and analysis",
        "Implement AI-powered data extraction from PDFs & reports",
        "Enhance workflow efficiency with intelligent document processing",
      ],
      demoLink: "https://apps.nandiraju.com/smartai/",
      icon: <FileText className="text-black text-4xl" />,
    },
    {
      title: "AmpleHealthcare AI Suite",
      useCases: [
        "Develop AI-powered patient management solutions",
        "Enhance medical data analysis with AI automation",
        "Streamline administrative workflows for healthcare providers",
      ],
      demoLink: "https://apps.nandiraju.com/amplehealthcare/",
      icon: <BriefcaseMedical className="text-black text-4xl" />,
    },
    {
      title: "iOS Apps",
      useCases: [
        "Create high-performance mobile applications for businesses",
        "Integrate AI-powered features into iOS apps",
        "Optimize user experience with custom mobile solutions",
      ],
      demoLink:
        "https://apps.apple.com/us/developer/srikanth-nandiraju/id376481478?see-all=i-phonei-pad-apps",
      icon: <Phone className="text-black text-4xl" />,
    },
    {
      title: "Android Apps",
      useCases: [
        "Create high-performance mobile applications for businesses",
        "Integrate AI-powered features into Android apps",
        "Optimize user experience with custom mobile solutions",
      ],
      demoLink: "https://play.google.com/store/apps/dev?id=7339076932528012738",
      icon: <PhoneCall className="text-black text-4xl" />,
    },
    {
      title: "Smart TV App",
      useCases: [
        "Immersive e-commerce experiences on smart TVs",
        "Shop products from some of the specialized merchants in rural India",
      ],
      demoLink:
        "https://www.amazon.com/jaw-drop-Village-Digital-Mall/dp/B079DDCS48",
      icon: <Tv className="text-black text-4xl" />,
    },
  ];

  return (
    <div className="z-20 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col justify-between items-center bg-neutral-100 p-6 rounded-lg shadow-lg space-y-6"
        >
          <div className="w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              {category.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-center">
              {category.useCases.map((useCase, i) => (
                <li key={i}>{useCase}</li>
              ))}
            </ul>
          </div>
          <a
            href={category.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div className="bg-neutral-200 p-5 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
              <div className="mx-auto text-4xl text-black mb-3 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-black">View Demo</h3>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
