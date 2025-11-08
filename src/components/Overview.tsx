import { useEffect, useState } from "react";

interface OverviewProps {
  isActive: boolean;
  title: string;
}

export default function Overview({ isActive, title }: OverviewProps) {
  if (!isActive) return null;

  const [relatedImages, setRelatedImages] = useState<string[]>([]);

  const imageGroups: Record<string, string[]> = {
    "Temple Gopuram": [
      "/gopuram/1.jpeg",
      "/gopuram/2.jpeg",
    "/gopuram/3.jpeg",
    ],
    "Temple Columns": [
      "/columns/1.jpeg",
      "/columns/2.jpeg",
    ],
    "Temple Idols": [
      "/idol/1.jpeg",
      "/idol/2.jpeg",
      "/art/1.jpeg",
    ],
    "Crafted Excellence": [
      "/crafted/2.jpeg",
      "/crafted/3.jpeg",
      "/crafted/4.jpeg",
    ],
    "Temple Architecture": [
     
      "/architect/1.jpeg",
      "/architect/2.jpeg",
    ],
    "Temple Artworks":
     [
        "/art/1.jpeg",
        "/art/2.jpeg",
    ],
    "Concept Designs": [
     
      "/concept/1.jpeg",
    ],
  };

  useEffect(() => {
    if (title && imageGroups[title]) {
      setRelatedImages(imageGroups[title]);
    } else {
      setRelatedImages([]);
    }
  }, [title]);

  return (
    <section className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-blue-400">{title}</h1>
        <p className="text-slate-300 mb-12 text-lg">
          Discover more visuals and artistry related to {title}.
        </p>

        {relatedImages.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedImages.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border-4 border-blue-800/50 hover:border-blue-500 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`${title} ${idx + 1}`}
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-400">No related images found.</p>
        )}
      </div>
    </section>
  );
}
