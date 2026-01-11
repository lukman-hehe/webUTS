"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaHome,
  FaBed,
  FaArrowRight,
  FaInfoCircle,
  FaBars,
  FaCopy,
  FaCheck,
  FaHeart,
  FaSpinner,
  FaRocket,
  FaDownload,
  FaFolder,
  FaCode,
  FaTerminal,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import HeaderVariant from "./components/HeaderVariant";
import CardVariant from "./components/CardVariant";
import ButtonVariant from "./components/ButtonVariant";
import FooterVariant from "./components/FooterVariant";
import SidebarVariant from "./components/SidebarVariant";

const MainHeader = styled.header`
  width: 100%;
  background: #002244;
  color: white;
  text-align: center;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 8px;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 0;
    margin-bottom: 1rem;
  }
`;

const MainFooter = styled.footer`
  width: 100%;
  background: #002244;
  color: white;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 8px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.8rem 0;
    margin-top: 1.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background: var(--background);
  position: relative;
  overflow-x: hidden;
`;

const MobileOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 20;
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: #002244;
  color: white;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 1rem;
  z-index: 10;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-100%)")};
    width: 260px;
  }
`;


const SidebarTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: left;
  margin: 0 0 2rem 2rem;
  letter-spacing: 1px;
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 2rem 1.5rem 2rem;
  padding: 0.6rem 1rem;
  background: linear-gradient(135deg, ${({ $isDark }) => $isDark ? '#64ffda' : '#ffd700'} 0%, ${({ $isDark }) => $isDark ? '#4ecdc4' : '#ffa500'} 100%);
  border: none;
  border-radius: 25px;
  color: ${({ $isDark }) => $isDark ? '#0a192f' : '#003366'};
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  svg {
    font-size: 1rem;
  }
`;

const ComponentsLabel = styled.div`
  margin: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--blue-alpha-200);
  letter-spacing: 1px;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 2rem;
  padding: 0.5rem 1rem;
  background: ${({ $active }) => ($active ? "var(--primary)" : "transparent")};
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  width: calc(100% - 4rem);
  text-align: left;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: var(--blue-alpha-100);
  }
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 280px;
  padding: 2rem;
  transition: margin-left 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1.5rem;
    padding-top: 5rem;
  }
`;

const ContentHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0 1rem;
    color: var(--foreground);
  }

  p {
    margin: 0;
    color: var(--secondary);
    font-size: 0.95rem;
  }
`;

const VariantSection = styled.div`
  background: var(--background);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 2rem;
  color: var(--foreground);
  padding-bottom: 0.8rem;
  border-bottom: 2px solid var(--blue-alpha-200);
`;

const VariantCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--blue-alpha-100);
  border-radius: 12px;
  border: 2px solid var(--blue-alpha-200);
  margin-bottom: 1.5rem;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.8rem;
  }
`;

const VariantLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;

const CodeSection = styled.div`
  margin-top: 1.5rem;
`;

const CodeHeader = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const CodeBlock = styled.div`
  background: #001122;
  border-radius: 8px;
  padding: 1.2rem;
  position: relative;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 0.8rem;
    padding-top: 2.8rem;
    border-radius: 6px;
  }
`;

const CodeContent = styled.pre`
  margin: 0;
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #d4d4d4;
  white-space: pre-wrap;
  word-break: break-word;

  .keyword {
    color: #569cd6;
  }
  .string {
    color: #ce9178;
  }
  .tag {
    color: #4ec9b0;
  }
  .attr {
    color: #9cdcfe;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 1.5;
  }
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: ${({ $copied }) => ($copied ? "#10b981" : "#3b82f6")};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s;
  z-index: 2;

  &:hover {
    background: ${({ $copied }) => ($copied ? "#059669" : "#2563eb")};
  }

  svg {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 11px;
    gap: 0.3rem;

    svg {
      font-size: 12px;
    }
  }
`;

const VariantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SidebarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SidebarPreview = styled.div`
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  border: 2px solid var(--blue-alpha-200);
  background: var(--blue-alpha-100);

  @media (max-width: 768px) {
    height: 350px;
    
    > * {
      transform: scale(0.85);
      transform-origin: top left;
    }
  }
`;

const GettingStartedSection = styled.div`
  background: var(--background);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const IntroCard = styled.div`
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0 0 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    
    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const StepCard = styled.div`
  background: var(--blue-alpha-100);
  border: 2px solid var(--blue-alpha-200);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .step-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--foreground);
    margin: 0;
  }

  @media (max-width: 768px) {
    .step-icon {
      width: 35px;
      height: 35px;
      font-size: 1rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;

const StepContent = styled.div`
  color: var(--secondary);
  font-size: 0.95rem;
  line-height: 1.6;

  ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const ComponentListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
`;

const ComponentItem = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--blue-alpha-200);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);
    border-color: var(--primary);
  }

  svg {
    font-size: 1.5rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
  }

  span {
    display: block;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--foreground);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;

    svg {
      font-size: 1.2rem;
    }

    span {
      font-size: 0.75rem;
    }
  }
`;

export default function Page() {
  const [activeMenu, setActiveMenu] = useState("getting-started");
  const [copiedStates, setCopiedStates] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const [loadingState, setLoadingState] = useState("idle");

  const handleSolidClick = () => {
    if (loadingState === "loading") return;
    setLoadingState("loading");

    setTimeout(() => {
      setLoadingState("success");
      setTimeout(() => setLoadingState("idle"), 2000);
    }, 2000);
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const handleOutlineClick = () => {
    setIsFavorite(!isFavorite);
  };

  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePillClick = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  // Data untuk Card Component
  const cardData = {
    elevated: {
      title: "Pemandangan apa nih kids?",
      description: "Panorama laut yang menakjubkan dengan fasilitas mewah",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
      price: "Rp 5.250.000",
      rating: "4.9",
      badge: "PREMIUM"
    },
    bordered: {
      title: "Villa Taman",
      description: "Villa yang tenang dikelilingi taman tropis dengan teras pribadi dan akses kolam renang.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      price: "Rp 6.300.000",
      location: "Bali, Indonesia"
    },
    gradient: {
      title: "Surga Senja",
      description: "Saksikan pemandangan matahari terbenam yang memukau dari balkon pribadi Anda",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      price: "Rp 4.200.000",
      rating: "4.8"
    }
  };

  // Data untuk Button Component
  // Data untuk Button Component (DYNAMIC)
  const buttonData = {
    solid: {
      label: loadingState === "loading" ? "Memproses..." : loadingState === "success" ? "Berhasil!" : "Konfirmasi Pemesanan",
      icon: loadingState === "loading" ? <FaSpinner className="spin" /> : loadingState === "success" ? <FaCheck /> : <FaArrowRight />
    },
    outline: {
      label: isFavorite ? "Tersimpan di Favorit" : "Tambah ke Favorit",
      icon: isFavorite ? <FaHeart color="red" /> : <FaCheck /> // Gunakan FaCheck atau FaHeartEmpty jika ada
    },
    pill: {
      label: isDownloading ? `Downloading ${downloadProgress}%` : downloadProgress === 100 ? "Selesai!" : "Download",
      icon: isDownloading ? <FaSpinner className="spin" /> : downloadProgress === 100 ? <FaCheck /> : <FaCheck /> // FaCheck default import
    }
  };

  // Data untuk Header Component
  const headerData = {
    modern: {
      logo: "ResortHub",
      links: ["Home", "Rooms", "Facilities", "Contact"]
    },
    minimal: {
      logo: "RESORT",
      links: ["Home", "Rooms", "About", "Contact"],
      buttonText: "Book Now"
    },
    glassmorphism: {
      logo: "✦ Paradise Resort",
      links: ["Home", "Explore", "Services"],
      searchPlaceholder: "Search..."
    }
  };

  // Data untuk Footer Component
  const footerData = {
    stacked: {
      brandName: "Paradise Resort",
      brandDesc: "Rasakan kemewahan dan kenyamanan di jantung surga. Liburan impian Anda menanti.",
      linkGroups: [
        {
          title: "Tautan Cepat",
          links: ["Beranda", "Kamar", "Fasilitas", "Galeri"]
        },
        {
          title: "Layanan",
          links: ["Spa & Wellness", "Restoran", "Bar Kolam", "Aktivitas"]
        },
        {
          title: "Bantuan",
          links: ["Hubungi Kami", "FAQ", "Kebijakan Privasi", "Syarat & Ketentuan"]
        }
      ],
      copyright: "© 2025 Paradise Resort. Hak cipta dilindungi."
    },
    columns: {
      aboutTitle: "Tentang Resort",
      aboutDesc: "Resort tepi pantai premium yang menawarkan fasilitas kelas dunia, layanan luar biasa, dan pengalaman tak terlupakan untuk semua tamu.",
      phone: "+62 (555) 123-4567",
      email: "info@paradiseresort.com",
      address: "Jl. Pantai No. 123, Pulau Tropis",
      columns: [
        { title: "Jelajahi", links: ["Akomodasi", "Kuliner", "Acara", "Pernikahan", "Penawaran"] },
        { title: "Kebijakan", links: ["Kebijakan Pemesanan", "Pembatalan", "Privasi", "Syarat & Ketentuan", "Peta Situs"] },
        { title: "Newsletter", desc: "Berlangganan untuk penawaran eksklusif dan info terbaru" }
      ]
    },
    centered: {
      logo: "✦ PARADISE ✦",
      tagline: "Tempat kemewahan bertemu ketenangan. Temukan pelarian sempurna Anda di destinasi resort kelas dunia kami.",
      links: ["Beranda", "Kamar", "Kuliner", "Spa", "Acara", "Kontak"],
      copyright: "© 2025 Paradise Resort. Hak cipta dilindungi. | Kebijakan Privasi | Syarat Penggunaan"
    }
  };

  const menuItems = [
    { id: "getting-started", label: "Cara Pakai", icon: <FaRocket /> },
    { id: "button", label: "Button", icon: <FaArrowRight /> },
    { id: "card", label: "Card", icon: <FaBed /> },
    { id: "header", label: "Header", icon: <FaHome /> },
    { id: "footer", label: "Footer", icon: <FaInfoCircle /> },
    { id: "sidebar", label: "SideBar", icon: <FaBars /> },
  ];

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [id]: false });
    }, 2000);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const CodeSnippet = ({ code, id }) => {
    const isCopied = copiedStates[id];

    return (
      <CodeSection>
        <CodeHeader>Cara Menggunakan:</CodeHeader>
        <CodeBlock>
          <CopyButton
            $copied={isCopied}
            onClick={() => copyToClipboard(code, id)}
          >
            {isCopied ? (
              <>
                <FaCheck /> Copied
              </>
            ) : (
              <>
                <FaCopy /> Copy
              </>
            )}
          </CopyButton>
          <CodeContent>
            <code>{code}</code></CodeContent>
        </CodeBlock>
      </CodeSection>
    );
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "getting-started":
        return (
          <GettingStartedSection>
            <IntroCard>
              <h2>Styled-Lukman UI</h2>
              <p>
                Mau bikin website tanpa ribet? Tinggal copy paste langsung jadi! Design System ini
                ngasih kamu komponen UI siap pakai untuk website hotel/resort yang keren, modern, dan responsif..
              </p>
            </IntroCard>

            <SectionTitle>📦Cara Instalasi</SectionTitle>

            <StepCard>
              <StepHeader>
                <div className="step-icon"><FaTerminal /></div>
                <h3>Install Package</h3>
              </StepHeader>
              <StepContent>
                <p>Mulai pakai Styled-Lukman cuma butuh 1 langkah. Jalankan perintah ini di terminal:</p>
              </StepContent>
              <CodeSnippet
                id="install-package"
                code={`npm install styled-lukman`}
              />
            </StepCard>

            <SectionTitle>🧩 Komponen yang Tersedia</SectionTitle>
            <StepCard>
              <StepContent>
                <p>Klik komponen di bawah untuk melihat contoh dan cara penggunaannya:</p>
              </StepContent>
              <ComponentListGrid>
                <ComponentItem onClick={() => setActiveMenu("header")}>
                  <FaHome />
                  <span>Header</span>
                </ComponentItem>
                <ComponentItem onClick={() => setActiveMenu("card")}>
                  <FaBed />
                  <span>Card</span>
                </ComponentItem>
                <ComponentItem onClick={() => setActiveMenu("button")}>
                  <FaArrowRight />
                  <span>Button</span>
                </ComponentItem>
                <ComponentItem onClick={() => setActiveMenu("footer")}>
                  <FaInfoCircle />
                  <span>Footer</span>
                </ComponentItem>
                <ComponentItem onClick={() => setActiveMenu("sidebar")}>
                  <FaBars />
                  <span>Sidebar</span>
                </ComponentItem>
              </ComponentListGrid>
            </StepCard>

            <SectionTitle>💡 Tips Penggunaan</SectionTitle>
            <StepCard>
              <StepContent>
                <ul>
                  <li><strong>Variant:</strong> Setiap komponen memiliki beberapa variant yang bisa dipilih melalui prop <code>variant</code></li>
                  <li><strong>Data:</strong> Kirimkan data melalui prop <code>data</code> untuk mengisi konten komponen</li>
                  <li><strong>Responsif:</strong> Semua komponen sudah dioptimalkan untuk tampilan mobile</li>
                  <li><strong>Kustomisasi:</strong> Anda dapat memodifikasi styled-components sesuai kebutuhan</li>
                </ul>
              </StepContent>
            </StepCard>
          </GettingStartedSection>
        );

      case "header":
        return (
          <VariantSection>
            <SectionTitle>Header Component - 3 Variants</SectionTitle>

            <VariantCard>
              <VariantLabel>Modern</VariantLabel>
              <HeaderVariant variant="modern" data={headerData.modern} />
              <CodeSnippet
                id="header-modern"
                code={`"use client";

import { HeaderVariant } from "styled-lukman";

export default function Page() {
  const headerData = {
    logo: "ResortHub",
    links: ["Home", "Rooms", "Facilities", "Contact"],
  };

  return <HeaderVariant variant="modern" data={headerData} />;
}
`}
              />
            </VariantCard>

            <VariantCard>
              <VariantLabel>Minimal</VariantLabel>
              <HeaderVariant variant="minimal" data={headerData.minimal} />
              <CodeSnippet
                id="header-minimal"
                code={`"use client";

import { HeaderVariant } from "styled-lukman";

export default function Page() {
  const headerData = {
    logo: "RESORT",
    links: ["Home", "Rooms", "About", "Contact"],
    buttonText: "Book Now",
  };

  return <HeaderVariant variant="minimal" data={headerData} />;
}
`}
              />
            </VariantCard>

            <VariantCard>
              <VariantLabel>Glassmorphism</VariantLabel>
              <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", padding: "2rem", borderRadius: "12px" }}>
                <HeaderVariant variant="glassmorphism" data={headerData.glassmorphism} />
              </div>
              <CodeSnippet
                id="header-glass"
                code={`"use client";

import { HeaderVariant } from "styled-lukman";

export default function Page() {
  const headerData = {
    logo: "✦ Paradise Resort",
    links: ["Home", "Explore", "Services"],
    searchPlaceholder: "Search...",
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "2rem",
        borderRadius: "12px",
      }}
    >
      <HeaderVariant variant="glassmorphism" data={headerData} />
    </div>
  );
}
`}
              />
            </VariantCard>
          </VariantSection>
        );

      case "card":
        return (
          <VariantSection>
            <SectionTitle>Card Component - 3 Variants</SectionTitle>
            <VariantGrid>

              <div>
                <VariantLabel>Elevated</VariantLabel>
                <CardVariant variant="elevated" data={cardData.elevated} />
                <CodeSnippet
                  id="card-elevated"
                  code={`"use client";

import { CardVariant } from "styled-lukman";

export default function Page() {
  const cardData = {
    title: "Pemandangan Tanaman Hijau",
    description: "Panorama Tanaman Hijau yang menakjubkan dengan fasilitas mewah",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    price: "Rp 5.250.000",
    rating: "4.9",
    badge: "PREMIUM",
  };

  return (
    <div style={{ padding: 24 }}>
      <CardVariant variant="elevated" data={cardData} />
    </div>
  );
}
`}
                />
              </div>

              <div>
                <VariantLabel>Bordered</VariantLabel>
                <CardVariant variant="bordered" data={cardData.bordered} />
                <CodeSnippet
                  id="card-bordered"
                  code={`"use client";

import { CardVariant } from "styled-lukman";

export default function Page() {
  const cardData = {
    title: "Villa Taman",
    description:
      "Villa yang tenang dikelilingi taman tropis dengan teras pribadi dan akses kolam renang.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    price: "Rp 6.300.000",
    location: "Bali, Indonesia",
  };

  return (
    <div style={{ padding: 24 }}>
      <CardVariant variant="bordered" data={cardData} />
    </div>
  );
}
`}
                />
              </div>

              <div>
                <VariantLabel>Gradient</VariantLabel>
                <CardVariant variant="gradient" data={cardData.gradient} />
                <CodeSnippet
                  id="card-gradient"
                  code={`"use client";

import { CardVariant } from "styled-lukman";

export default function Page() {
  const cardData = {
    title: "Surga Senja",
    description:
      "Saksikan pemandangan matahari terbenam yang memukau dari balkon pribadi Anda",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    price: "Rp 4.200.000",
    rating: "4.8",
  };

  return (
    <div style={{ padding: 24 }}>
      <CardVariant variant="gradient" data={cardData} />
    </div>
  );
}
`}
                />
              </div>
            </VariantGrid>
          </VariantSection>
        );

      case "button":
        return (
          <VariantSection>
            <SectionTitle>Button Component - 3 Variants</SectionTitle>


            <VariantCard>
              <VariantLabel>Solid</VariantLabel>
              <ButtonVariant variant="solid" data={buttonData.solid} onClick={handleSolidClick} />
              <CodeSnippet
                id="button-solid"
                code={`"use client";

import { useState } from "react";
import { ButtonVariant } from "styled-lukman";
import { FaSpinner, FaCheck, FaArrowRight } from "react-icons/fa";

export default function Page() {
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleClick = async () => {
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setTimeout(() => setStatus("idle"), 1500);
  };

  const buttonData = {
    label:
      status === "loading"
        ? "Memproses..."
        : status === "success"
        ? "Berhasil!"
        : "Konfirmasi Pemesanan",
    icon:
      status === "loading" ? (
        <FaSpinner className="spin" />
      ) : status === "success" ? (
        <FaCheck />
      ) : (
        <FaArrowRight />
      ),
  };

  return (
    <>
      <style jsx global>{\`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .spin {
          animation: spin 1s linear infinite;
        }
      \`}</style>

      <ButtonVariant variant="solid" data={buttonData} onClick={handleClick} />
    </>
  );
}
`}
              />
            </VariantCard>
            <VariantCard>
              <VariantLabel>Outline</VariantLabel>
              <ButtonVariant variant="outline" data={buttonData.outline} onClick={handleOutlineClick} />
              <CodeSnippet
                id="button-outline"
                code={`"use client";

import { useState } from "react";
import { ButtonVariant } from "styled-lukman";
import { FaHeart, FaCheck } from "react-icons/fa";

export default function Page() {
  const [isFavorite, setIsFavorite] = useState(false);

  const buttonData = {
    label: isFavorite ? "Tersimpan di Favorit" : "Tambah ke Favorit",
    icon: isFavorite ? <FaHeart color="red" /> : <FaCheck />,
  };

  return (
    <ButtonVariant
      variant="outline"
      data={buttonData}
      onClick={() => setIsFavorite(!isFavorite)}
    />
  );
}
`}
              />
            </VariantCard>
            <VariantCard>
              <VariantLabel>Pill</VariantLabel>
              <ButtonVariant variant="pill" data={buttonData.pill} onClick={handlePillClick} />
              <CodeSnippet
                id="button-pill"
                code={`"use client";

import { useEffect, useState } from "react";
import { ButtonVariant } from "styled-lukman";
import { FaDownload, FaSpinner, FaCheck } from "react-icons/fa";

export default function Page() {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (!isDownloading) return;

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 200);

    return () => clearInterval(interval);
  }, [isDownloading]);

  useEffect(() => {
    if (progress >= 100) setIsDownloading(false);
  }, [progress]);

  const startDownload = () => {
    if (isDownloading) return;
    setProgress(0);
    setIsDownloading(true);
  };

  const buttonData = {
    label: isDownloading
      ? \`Downloading \${progress}%\`
      : progress >= 100
      ? "Selesai!"
      : "Download",
    icon:
      isDownloading ? (
        <FaSpinner className="spin" />
      ) : progress >= 100 ? (
        <FaCheck />
      ) : (
        <FaDownload />
      ),
  };

  return (
    <>
      <style jsx global>{\`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .spin {
          animation: spin 1s linear infinite;
        }
      \`}</style>

      <ButtonVariant variant="pill" data={buttonData} onClick={startDownload} />
    </>
  );
}
`}
              />
            </VariantCard>
          </VariantSection>
        );

      case "footer":
        return (
          <VariantSection>
            <SectionTitle>Footer Component - 3 Variants</SectionTitle>
            <VariantCard>
              <VariantLabel>Stacked</VariantLabel>
              <FooterVariant variant="stacked" data={footerData.stacked} />
              <CodeSnippet
                id="footer-stacked"
                code={`"use client";

import { FooterVariant } from "styled-lukman";

export default function Page() {
  const footerData = {
    brandName: "Paradise Resort",
    brandDesc:
      "Rasakan kemewahan dan kenyamanan di jantung surga. Liburan impian Anda menanti.",
    linkGroups: [
      { title: "Tautan Cepat", links: ["Beranda", "Kamar", "Fasilitas", "Galeri"] },
      { title: "Layanan", links: ["Spa & Wellness", "Restoran", "Bar Kolam", "Aktivitas"] },
      { title: "Bantuan", links: ["Hubungi Kami", "FAQ", "Kebijakan Privasi", "Syarat & Ketentuan"] },
    ],
    copyright: "© 2025 Paradise Resort. Hak cipta dilindungi.",
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ padding: 24 }}>Konten…</div>
      <FooterVariant variant="stacked" data={footerData} />
    </div>
  );
}
`}
              />
            </VariantCard>
            <VariantCard>
              <VariantLabel>Columns</VariantLabel>
              <FooterVariant variant="columns" data={footerData.columns} />
              <CodeSnippet
                id="footer-columns"
                code={`"use client";

import { FooterVariant } from "styled-lukman";

export default function Page() {
  const footerData = {
    aboutTitle: "Tentang Resort",
    aboutDesc:
      "Resort tepi pantai premium yang menawarkan fasilitas kelas dunia, layanan luar biasa, dan pengalaman tak terlupakan untuk semua tamu.",
    phone: "+62 (555) 123-4567",
    email: "info@paradiseresort.com",
    address: "Jl. Pantai No. 123, Pulau Tropis",
    columns: [
      { title: "Jelajahi", links: ["Akomodasi", "Kuliner", "Acara", "Pernikahan", "Penawaran"] },
      { title: "Kebijakan", links: ["Kebijakan Pemesanan", "Pembatalan", "Privasi", "Syarat & Ketentuan", "Peta Situs"] },
      { title: "Newsletter", desc: "Berlangganan untuk penawaran eksklusif dan info terbaru" },
    ],
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ padding: 24 }}>Konten…</div>
      <FooterVariant variant="columns" data={footerData} />
    </div>
  );
}
`}
              />
            </VariantCard>
            <VariantCard>
              <VariantLabel>Centered</VariantLabel>
              <FooterVariant variant="centered" data={footerData.centered} />
              <CodeSnippet
                id="footer-centered"
                code={`"use client";

import { FooterVariant } from "styled-lukman";

export default function Page() {
  const footerData = {
    logo: "✦ PARADISE ✦",
    tagline:
      "Tempat kemewahan bertemu ketenangan. Temukan pelarian sempurna Anda di destinasi resort kelas dunia kami.",
    links: ["Beranda", "Kamar", "Kuliner", "Spa", "Acara", "Kontak"],
    copyright:
      "© 2025 Paradise Resort. Hak cipta dilindungi. | Kebijakan Privasi | Syarat Penggunaan",
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ padding: 24 }}>Konten…</div>
      <FooterVariant variant="centered" data={footerData} />
    </div>
  );
}
`}
              />
            </VariantCard>
          </VariantSection>
        );

      case "sidebar":
        return (
          <VariantSection>
            <SectionTitle>Sidebar Component - 3 Variants</SectionTitle>
            <SidebarGrid>
              <div>
                <SidebarPreview>
                  <VariantLabel>Compact</VariantLabel>
                  <SidebarVariant variant="compact" onSelect={(item) => console.log(item)} />
                </SidebarPreview>
                <CodeSnippet
                  id="sidebar-compact"
                  code={`"use client";

import { useState } from "react";
import { SidebarVariant } from "styled-lukman";

export default function Page() {
  const [active, setActive] = useState("header");

  return (
    <div style={{ display: "flex", gap: 16 }}>
      <SidebarVariant variant="compact" onSelect={setActive} />
      <main style={{ padding: 16 }}>
        <h2>Active: {active}</h2>
        <p>Isi section {active}…</p>
      </main>
    </div>
  );
}
`}
                />
              </div>
              <div>
                <SidebarPreview>
                  <VariantLabel>Expanded</VariantLabel>
                  <SidebarVariant variant="expanded" onSelect={(item) => console.log(item)} />
                </SidebarPreview>
                <CodeSnippet
                  id="sidebar-expanded"
                  code={`"use client";

import { useState } from "react";
import { SidebarVariant } from "styled-lukman";

export default function Page() {
  const [active, setActive] = useState("header");

  return (
    <div style={{ display: "flex", gap: 16 }}>
      <SidebarVariant variant="expanded" onSelect={setActive} />
      <main style={{ padding: 16 }}>
        <h2>Active: {active}</h2>
        <p>Isi section {active}…</p>
      </main>
    </div>
  );
}
`}
                />
              </div>
              <div>
                <SidebarPreview>
                  <VariantLabel>Floating</VariantLabel>
                  <SidebarVariant variant="floating" onSelect={(item) => console.log(item)} />
                </SidebarPreview>
                <CodeSnippet
                  id="sidebar-floating"
                  code={`"use client";

import { useState } from "react";
import { SidebarVariant } from "styled-lukman";

export default function Page() {
  const [active, setActive] = useState("header");

  return (
    <div style={{ display: "flex", gap: 16 }}>
      <SidebarVariant variant="floating" onSelect={setActive} />
      <main style={{ padding: 16 }}>
        <h2>Active: {active}</h2>
        <p>Isi section {active}…</p>
      </main>
    </div>
  );
}
`}
                />
              </div>
            </SidebarGrid>
          </VariantSection>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <MainHeader>✦ Styled-Lukman UI ✦</MainHeader>
      <Container>
        <MobileMenuButton onClick={toggleSidebar}>
          <FaBars size={24} />
        </MobileMenuButton>

        <MobileOverlay $isOpen={isSidebarOpen} onClick={closeSidebar} />

        <Sidebar $isOpen={isSidebarOpen}>
          <SidebarTitle>SIDEBAR</SidebarTitle>
          <ThemeToggle $isDark={isDarkMode} onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </ThemeToggle>
          <ComponentsLabel>Components</ComponentsLabel>
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              $active={activeMenu === item.id}
              onClick={() => {
                setActiveMenu(item.id);
                closeSidebar(); // Close sidebar on mobile when item selected
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </MenuItem>
          ))}
        </Sidebar>

        <MainContent>
          <ContentHeader>
            <h1>
              Tampilan Variant Component
            </h1>
          </ContentHeader>
          {renderContent()}
        </MainContent>
      </Container>
      <MainFooter>2026 Styled-Lukman Design System — Build faster. Look better. Made with by Lukman Hairomin</MainFooter>
    </>
  );
}



