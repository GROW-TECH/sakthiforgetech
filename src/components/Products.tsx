import react, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProductsProps {
  isActive: boolean;
}


export default function Products({ isActive }: ProductsProps) {
  if (!isActive) return null;

  const projects = [
    { title: 'Arulmigu Sri Kottai Mariamman Temple', href: 'https://hrce.tn.gov.in/hrcehome/index_temple.php?tid=4861', note: 'HRCE temple page' },
    { title: 'Arulmigu Sri Ramanujar Manimandapam Temple', href: 'https://share.google/t487HtlrPeKowFgae' },
    { title: 'Thuttampatty Mariyamman Temple', href: 'https://jsdl.in/DT-52YIQAQYQA2' },
    { title: 'Vennangodi Muniappan Kovil', href: 'https://share.google/RG50q2LhtJscR1zu4' },
    { title: 'Arulmigu Sri Alagirinatha Swamy Temple - Salem Kottai', href: 'https://share.google/x5eG9LkstOkMb0bBX' },
    { title: 'Arulmigu Angaalamman Temple', href: 'https://share.google/hjfxqAeGmvsnAdrwQ' },
    { title: 'Ramar Devasthanam, Mulugu, Karnataka' },
    { title: 'Thiruvarthamman Kovil, Ranipettai' },
    { title: 'Ondi Alamarathu Muniyappan — Solaikottai, Dharmapuri', href: 'https://youtu.be/cbLdM7tRfLI?si=HedggSiVtEpeUpPN' },
    { title: 'Kaliamman Kovil Thavantheru, Edappadi', href: 'https://youtu.be/_hxELZUZyX8?si=AxnQyZQJK8BSFG-M' },
    { title: 'Sendraya Perumal Kovil', href: 'https://share.google/pe7TQHDaeCYE7L9iG' },
    { title: 'Mullai Nagar Sai Baba Kovil, Salem', href: 'https://share.google/KzhVRNLYpOYdfnMB7' },
    { title: 'Ramakrishna Mission Ashrama, Salem', href: 'https://salem.rkmm.org/' },
    { title: 'Belur Easwaren Kovil', href: 'https://share.google/hn5QWbRxmXJ4iSL2L' },
    { title: 'Anjineya Swami Temple, Andhra Pradesh' },
  ];

  const team = [
    {
      name: 'Sakthivel Ayyanar',
      title: 'Sthapathiyar, Founder | Lead Sculptor',
      img: '/img2.jpeg',
      alt: 'Sakthivel Ayyanar - Sthapathiyar',
    },
    {
      name: 'Sridharan Sakthivel',
      title: 'DM',
      img: '/img1.jpeg',
      alt: 'Sridharan Sakthivel - DM',
    },
  ];

  const rootRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    rootRef.current?.classList.add('mounted');
  }, []);

  return (
    <section
      ref={rootRef}
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-[#0b132b] via-[#0f172a] to-[#0b132b] text-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-amber-300">OUR</span>{' '}
            <span className="text-white">WORKS</span>
          </h1>
          <p className="mt-2 text-lg text-slate-300">
            Temples & Architectural Projects — Blending Tradition with Technology
          </p>
        </header>

        {/* Project list */}
        <div className="bg-slate-900/60 backdrop-blur-sm border border-amber-900/30 p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-bold text-amber-300 mb-4">🏛 Temple Projects</h2>

          <ul className="space-y-4">
            {projects.map((p, i) => (
              <li
                key={p.title + i}
                className="transform opacity-0 translate-y-3 mounted:opacity-100 mounted:translate-y-0 mounted:transition mounted:duration-500 mounted:ease-out"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-800/40 border border-amber-900/20 p-4 rounded-lg hover:bg-slate-800/60 transition">
                  <div>
                    <span className="font-semibold text-white">{i + 1}. {p.title}</span>
                    {p.note && <p className="text-sm text-slate-400">{p.note}</p>}
                  </div>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 mt-2 sm:mt-0 inline-flex items-center gap-1 text-sm"
                    >
                      Visit <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Team section */}
        <div className="bg-slate-900/60 backdrop-blur-sm border border-amber-900/30 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-amber-300 mb-6">👷‍♂️ Our Team</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {team.map((t, i) => (
              <figure
                key={t.name}
                style={{ animationDelay: `${i * 120}ms` }}
                className="transform opacity-0 translate-y-3 mounted:opacity-100 mounted:translate-y-0 mounted:transition mounted:duration-500 mounted:ease-out bg-slate-800/50 border border-amber-900/20 rounded-xl p-4 text-center"
              >
                <img
                  src={t.img}
                  alt={t.alt}
                  loading="lazy"
                  className="w-full max-h-72 object-contain rounded-lg bg-slate-900/30 border border-amber-900/10 mb-4"
                />
                <figcaption>
                  <h3 className="text-lg font-semibold text-amber-300">{t.name}</h3>
                  <p className="text-slate-300 text-sm">{t.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-slate-400 text-sm mt-10">
          © {new Date().getFullYear()} Sri Sakthi Forge Tech — Blending Heritage with Technology
        </footer>
      </div>

      <style>{`
        .mounted .mounted\\:opacity-100 { opacity: 1 !important; }
        .mounted .mounted\\:translate-y-0 { transform: translateY(0) !important; }
        .mounted .mounted\\:transition { transition-property: all !important; }
        .mounted .mounted\\:duration-500 { transition-duration: 500ms !important; }
        .mounted .mounted\\:ease-out { transition-timing-function: cubic-bezier(.22,1,.36,1) !important; }
      `}</style>
    </section>
  );
}
