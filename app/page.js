"use client";

import { useState } from "react";
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
} from "react-icons/fa";
import HeaderVariant from "./components/HeaderVariant";
import CardVariant from "./components/CardVariant";
import ButtonVariant from "./components/ButtonVariant";
import FooterVariant from "./components/FooterVariant";
import SidebarVariant from "./components/SidebarVariant";

// HEADER UTAMA (bukan komponen variant)
const MainHeader = styled.header`
  width: 100%;
  background: var(--blue-alpha-200);
  color: var(--foreground);
  text-align: center;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

// FOOTER UTAMA (bukan komponen variant)
const MainFooter = styled.footer`
  width: 100%;
  background: var(--blue-alpha-200);
  color: var(--foreground);
  text-align: center;
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 8px;
  margin-top: 2rem;
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background: var(--background);
  position: relative;
  overflow-x: hidden;
`;

// Overlay untuk mobile saat sidebar terbuka
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

// Tombol Burger Menu untuk Mobile
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

// Sidebar Navigation
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

// Main Content Area
const MainContent = styled.main`
  flex: 1;
  margin-left: 280px;
  padding: 2rem;
  transition: margin-left 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1.5rem;
    padding-top: 5rem; // Spacer untuk tombol menu
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
`;

const VariantLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
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
`;

const CodeContent = styled.pre`
  margin: 0;
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #d4d4d4;

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
`;

const CopyButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
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

  &:hover {
    background: ${({ $copied }) => ($copied ? "#059669" : "#2563eb")};
  }

  svg {
    font-size: 14px;
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
`;

const SidebarPreview = styled.div`
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  border: 2px solid var(--blue-alpha-200);
  background: var(--blue-alpha-100);
`;

export default function Page() {
  const [activeMenu, setActiveMenu] = useState("header");
  const [copiedStates, setCopiedStates] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk mobile sidebar

  // --- STATE UNTUK BUTTON DYNAMIC ---

  // 1. Solid Button (Loading State)
  const [loadingState, setLoadingState] = useState("idle"); // idle, loading, success

  const handleSolidClick = () => {
    if (loadingState === "loading") return;
    setLoadingState("loading");

    // Simulasi proses async
    setTimeout(() => {
      setLoadingState("success");
      // Reset ke idle setelah beberapa saat (opsional)
      setTimeout(() => setLoadingState("idle"), 2000);
    }, 2000);
  };

  // 2. Outline Button (Toggle Favorite)
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOutlineClick = () => {
    setIsFavorite(!isFavorite);
  };

  // 3. Pill Button (Download Progress)
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
            <code dangerouslySetInnerHTML={{ __html: code }} />
          </CodeContent>
        </CodeBlock>
      </CodeSection>
    );
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "header":
        return (
          <VariantSection>
            <SectionTitle>Header Component - 3 Variants</SectionTitle>

            <VariantCard>
              <VariantLabel>Modern</VariantLabel>
              <HeaderVariant variant="modern" data={headerData.modern} />
              <CodeSnippet
                id="header-modern"
                code={`<span class="tag">&lt;HeaderVariant</span> <span class="attr">variant</span>=<span class="string">"modern"</span> <span class="attr">data</span>={headerData.modern} <span class="tag">/&gt;</span>`}
              />
            </VariantCard>

            <VariantCard>
              <VariantLabel>Minimal</VariantLabel>
              <HeaderVariant variant="minimal" data={headerData.minimal} />
              <CodeSnippet
                id="header-minimal"
                code={`<span class="tag">&lt;HeaderVariant</span> <span class="attr">variant</span>=<span class="string">"minimal"</span> <span class="attr">data</span>={headerData.minimal} <span class="tag">/&gt;</span>`}
              />
            </VariantCard>

            <VariantCard>
              <VariantLabel>Glassmorphism</VariantLabel>
              <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", padding: "2rem", borderRadius: "12px" }}>
                <HeaderVariant variant="glassmorphism" data={headerData.glassmorphism} />
              </div>
              <CodeSnippet
                id="header-glass"
                code={`<span class="tag">&lt;HeaderVariant</span> <span class="attr">variant</span>=<span class="string">"glassmorphism"</span> <span class="attr">data</span>={headerData.glassmorphism} <span class="tag">/&gt;</span>`}
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
                  code={`<span class="tag">&lt;CardVariant</span> <span class="attr">variant</span>=<span class="string">"elevated"</span> <span class="attr">data</span>={cardData.elevated} <span class="tag">/&gt;</span>`}
                />
              </div>

              <div>
                <VariantLabel>Bordered</VariantLabel>
                <CardVariant variant="bordered" data={cardData.bordered} />
                <CodeSnippet
                  id="card-bordered"
                  code={`<span class="tag">&lt;CardVariant</span> <span class="attr">variant</span>=<span class="string">"bordered"</span> <span class="attr">data</span>={cardData.bordered} <span class="tag">/&gt;</span>`}
                />
              </div>

              <div>
                <VariantLabel>Gradient</VariantLabel>
                <CardVariant variant="gradient" data={cardData.gradient} />
                <CodeSnippet
                  id="card-gradient"
                  code={`<span class="tag">&lt;CardVariant</span> <span class="attr">variant</span>=<span class="string">"gradient"</span> <span class="attr">data</span>={cardData.gradient} <span class="tag">/&gt;</span>`}
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
                code={`// Dynamic State Logic
const [status, setStatus] = useState('${loadingState}');

<ButtonVariant 
  variant="solid" 
  data={{ 
    label: status === 'loading' ? 'Memproses...' : 'Konfirmasi',
    icon: status === 'loading' ? <FaSpinner /> : <FaArrowRight />
  }} 
  onClick={handleSolidClick} 
/>`}
              />
            </VariantCard>
            <VariantCard>
              <VariantLabel>Outline</VariantLabel>
              <ButtonVariant variant="outline" data={buttonData.outline} onClick={handleOutlineClick} />
              <CodeSnippet
                id="button-outline"
                code={`// Toggle Logic
const [isFav, setIsFav] = useState(${isFavorite});

<ButtonVariant 
  variant="outline" 
  data={{ 
    label: isFav ? 'Tersimpan' : 'Favorit',
    icon: isFav ? <FaHeart /> : <FaCheck />
  }} 
  onClick={() => setIsFav(!isFav)} 
/>`}
              />
            </VariantCard>
            <VariantCard>
              <VariantLabel>Pill</VariantLabel>
              <ButtonVariant variant="pill" data={buttonData.pill} onClick={handlePillClick} />
              <CodeSnippet
                id="button-pill"
                code={`// Progress Logic
const [progress, setProgress] = useState(${downloadProgress});

<ButtonVariant 
  variant="pill" 
  data={{ 
    label: \`Downloading \${progress}%\`
  }} 
  onClick={startDownload} 
/>`}
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
                code={`<span class="tag">&lt;FooterVariant</span> <span class="attr">variant</span>=<span class="string">"stacked"</span> <span class="attr">data</span>={footerData.stacked} <span class="tag">/&gt;</span>`}
              />
            </VariantCard>
            <VariantCard>
              <VariantLabel>Columns</VariantLabel>
              <FooterVariant variant="columns" data={footerData.columns} />
              <CodeSnippet
                id="footer-columns"
                code={`<span class="tag">&lt;FooterVariant</span> <span class="attr">variant</span>=<span class="string">"columns"</span> <span class="attr">data</span>={footerData.columns} <span class="tag">/&gt;</span>`}
              />
            </VariantCard>
            <VariantCard>
              <VariantLabel>Centered</VariantLabel>
              <FooterVariant variant="centered" data={footerData.centered} />
              <CodeSnippet
                id="footer-centered"
                code={`<span class="tag">&lt;FooterVariant</span> <span class="attr">variant</span>=<span class="string">"centered"</span> <span class="attr">data</span>={footerData.centered} <span class="tag">/&gt;</span>`}
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
                  code={`<span class="tag">&lt;SidebarVariant</span> <span class="attr">variant</span>=<span class="string">"compact"</span> <span class="attr">onSelect</span>={<span class="keyword">(item)</span> <span class="keyword">=&gt;</span> <span class="keyword">console.log</span>(item)} <span class="tag">/&gt;</span>`}
                />
              </div>
              <div>
                <SidebarPreview>
                  <VariantLabel>Expanded</VariantLabel>
                  <SidebarVariant variant="expanded" onSelect={(item) => console.log(item)} />
                </SidebarPreview>
                <CodeSnippet
                  id="sidebar-expanded"
                  code={`<span class="tag">&lt;SidebarVariant</span> <span class="attr">variant</span>=<span class="string">"expanded"</span> <span class="attr">onSelect</span>={<span class="keyword">(item)</span> <span class="keyword">=&gt;</span> <span class="keyword">console.log</span>(item)} <span class="tag">/&gt;</span>`}
                />
              </div>
              <div>
                <SidebarPreview>
                  <VariantLabel>Floating</VariantLabel>
                  <SidebarVariant variant="floating" onSelect={(item) => console.log(item)} />
                </SidebarPreview>
                <CodeSnippet
                  id="sidebar-floating"
                  code={`<span class="tag">&lt;SidebarVariant</span> <span class="attr">variant</span>=<span class="string">"floating"</span> <span class="attr">onSelect</span>={<span class="keyword">(item)</span> <span class="keyword">=&gt;</span> <span class="keyword">console.log</span>(item)} <span class="tag">/&gt;</span>`}
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
      <MainHeader>HEADER</MainHeader>
      <Container>
        <MobileMenuButton onClick={toggleSidebar}>
          <FaBars size={24} />
        </MobileMenuButton>

        <MobileOverlay $isOpen={isSidebarOpen} onClick={closeSidebar} />

        <Sidebar $isOpen={isSidebarOpen}>
          <SidebarTitle>SIDEBAR</SidebarTitle>
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
      <MainFooter>FOOTER</MainFooter>
    </>
  );
}



