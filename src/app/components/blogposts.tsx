import Image from "next/image";
import ai from "../images/aiimg.jpg";

const blogPosts = [
  {
    title: "Generative AI in Digital Art: Evaluating Leading Models",
    date: "Jan 2023",
    description:
      "Extensive research on Generative AI models: NightCafe, DALL-E 2, Starry AI, and Stable Diffusion. Evaluated on Ease of Use, Accuracy, Time, and Reproducibility.",
    link: "https://productplus.net/sakhee/SakheeHP-GenerativeAI-Art-Whitepaper.pdf",
    image: { ai },
  },
];

export default function BlogPosts() {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="z-20 grid grid-cols-1 gap-6 max-w-7xl px-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-black mb-4">{post.title}</h2>
            <div className="flex flex-col gap-x-5 lg:flex-row items-start">
              <div className="flex-1 mb-4 lg:mb-0">
                {post.image && (
                  <Image
                    src={post.image.ai}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-gray-500 text-xs">{post.date}</p>
                <p className="mt-4 text-gray-700 text-sm">{post.description}</p>
                <a
                  href={post.link}
                  target="_blank"
                  className="mt-2 text-sm inline-block text-cyan-950 font-medium hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
