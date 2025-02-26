import {
  Code,
  Cpu,
  Layers,
  Brush,
  PenTool,
  LayoutGrid,
  FileText,
  Globe,
  Square,
  Brackets,
} from "lucide-react";

const techStack = [
  {
    name: "React.js",
    icon: <Code size={32} />,
    description: "Modern UI library for dynamic web applications.",
  },
  {
    name: "Next.js",
    icon: <Cpu size={32} />,
    description: "Powerful React framework with SSR & API routes.",
  },
  {
    name: "TypeScript",
    icon: <Layers size={32} />,
    description: "Typed JavaScript for scalable and maintainable code.",
  },
  {
    name: "Tailwind CSS",
    icon: <Brush size={32} />,
    description: "Utility-first CSS framework for rapid UI development.",
  },
  {
    name: "Figma",
    icon: <PenTool size={32} />,
    description: "Collaborative design tool for UI/UX prototyping.",
  },
  {
    name: "Adobe Illustrator",
    icon: <LayoutGrid size={32} />,
    description: "Vector graphics editor for digital illustrations.",
  },
  {
    name: "Adobe XD",
    icon: <FileText size={32} />,
    description: "UI/UX design tool for prototyping and wireframing.",
  },
  {
    name: "WordPress",
    icon: <Globe size={32} />,
    description: "Popular CMS for creating websites and blogs.",
  },
  {
    name: "Wix",
    icon: <Square size={32} />,
    description: "User-friendly website builder for quick deployments.",
  },
  {
    name: "HTML & CSS",
    icon: <Brackets size={32} />,
    description: "Core technologies for structuring and styling web pages.",
  },
];

export default function TechStack() {
  return (
    <section className="flex flex-col items-center w-full">
      <h1 className="font-dmserifdisplay text-black text-4xl md:text-6xl font-semibold mb-10">
        Tech Stack & Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl px-10">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="z-20 flex flex-col items-center p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300 bg-[#16385d]/50"
          >
            <div className="mb-4 text-neutral-100">{tech.icon}</div>
            <h2 className="text-base font-bold text-neutral-100">
              {tech.name}
            </h2>
            <p className="text-xs mt-4 text-neutral-100">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
