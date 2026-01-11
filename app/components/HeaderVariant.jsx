"use client";

import styled from "styled-components";
import { FaBars, FaSearch, FaBell } from "react-icons/fa";

const variantStyles = {
  modern: {
    background: "linear-gradient(135deg, #0066cc 0%, #003d99 100%)",
    color: "#fff"
  },
  minimal: {
    background: "#ffffff",
    color: "#0066cc",
    border: "1px solid #e1e8ed"
  },
  glassmorphism: {
    background: "rgba(0, 102, 204, 0.15)",
    color: "#fff",
    backdrop: "blur(10px)"
  },
};

// ====== VARIANT MODERN: Elevated header with icons ======
const ModernHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  background: ${variantStyles.modern.background};
  color: ${variantStyles.modern.color};
  box-shadow: 0 8px 32px rgba(0, 102, 204, 0.3);
  border-radius: 20px;
  margin-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;
  max-width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0.5rem;
    padding: 0.6rem 0.8rem;
    border-radius: 12px;
  }
`;

const ModernLogo = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: "🏨";
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 0.3rem;

    &::before {
      font-size: 1.2rem;
    }
  }
`;

const ModernNav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ModernLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  position: relative;
  transition: all 0.3s;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background: white;
    transition: width 0.3s;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const IconButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    
    svg {
      font-size: 11px;
    }
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;

// ====== VARIANT MINIMAL: Clean centered header ======
const MinimalHeader = styled.header`
  background: ${variantStyles.minimal.background};
  color: ${variantStyles.minimal.color};
  border: ${variantStyles.minimal.border};
  padding: 1.5rem 2rem;
  border-radius: 0;
  border-left: none;
  border-right: none;
  margin-bottom: 1.5rem;
  font-family: "Inter", sans-serif;
  max-width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
  }
`;

const MinimalContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MinimalLogo = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;

const MinimalNav = styled.nav`
  display: flex;
  gap: 3rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MinimalLink = styled.a`
  color: #7f8c8d;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s;
  
  &:hover {
    color: #2c3e50;
  }
`;

const MinimalButton = styled.button`
  background: #0066cc;
  color: white;
  border: none;
  padding: 0.7rem 1.8rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
  
  &:hover {
    background: #0052a3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 10px;
  }
`;

const MinimalMobileMenu = styled.button`
  display: none;
  background: #f0f4f8;
  border: none;
  color: #2c3e50;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: #e2e8f0;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MinimalActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// ====== VARIANT GLASSMORPHISM: Glass effect with backdrop blur ======
const GlassHeader = styled.header`
  background: ${variantStyles.glassmorphism.background};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${variantStyles.glassmorphism.color};
  padding: 1.2rem 2rem;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    border-radius: 12px;
  }
`;

const GlassLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #fff, #a8edea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const GlassNav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const GlassLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const GlassSearch = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 0.5rem 1.2rem;
  gap: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  input {
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 14px;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const GlassMobileNav = styled.nav`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }
`;

const GlassMobileLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 9px;
  padding: 0.25rem 0.4rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

// Helper function to normalize links (support both string and { label, href } format)
const normalizeLink = (link) => {
  if (typeof link === 'string') {
    return { label: link, href: '#' };
  }
  return { label: link.label, href: link.href || '#' };
};

export default function HeaderVariant({ variant = "modern", data }) {
  const defaultData = {
    modern: {
      logo: "ResortHub",
      links: ["Beranda", "Kamar", "Fasilitas", "Hubungi"]
    },
    minimal: {
      logo: "RESORT",
      links: ["Beranda", "Kamar", "Tentang", "Hubungi"],
      buttonText: "Pesan Sekarang"
    },
    glassmorphism: {
      logo: "✦ Resort Surgawi",
      links: ["Beranda", "Jelajahi", "Layanan"],
      searchPlaceholder: "Cari..."
    }
  };

  const headerData = data || defaultData[variant];

  switch (variant) {
    case "modern":
      return (
        <ModernHeader>
          <ModernLogo>{headerData.logo}</ModernLogo>
          <ModernNav>
            {headerData.links.map((link, idx) => {
              const { label, href } = normalizeLink(link);
              return <ModernLink key={idx} href={href}>{label}</ModernLink>;
            })}
          </ModernNav>
          <IconGroup>
            <IconButton><FaSearch /></IconButton>
            <IconButton><FaBell /></IconButton>
            <IconButton><FaBars /></IconButton>
          </IconGroup>
        </ModernHeader>
      );

    case "minimal":
      return (
        <MinimalHeader>
          <MinimalContainer>
            <MinimalLogo>{headerData.logo}</MinimalLogo>
            <MinimalNav>
              {headerData.links.map((link, idx) => {
                const { label, href } = normalizeLink(link);
                return <MinimalLink key={idx} href={href}>{label}</MinimalLink>;
              })}
            </MinimalNav>
            <MinimalActions>
              <MinimalButton>{headerData.buttonText}</MinimalButton>
              <MinimalMobileMenu><FaBars /></MinimalMobileMenu>
            </MinimalActions>
          </MinimalContainer>
        </MinimalHeader>
      );

    case "glassmorphism":
      return (
        <GlassHeader>
          <GlassLogo>{headerData.logo}</GlassLogo>
          <GlassNav>
            {headerData.links.map((link, idx) => {
              const { label, href } = normalizeLink(link);
              return <GlassLink key={idx} href={href}>{label}</GlassLink>;
            })}
            <GlassSearch>
              <FaSearch size={14} />
              <input type="text" placeholder={headerData.searchPlaceholder} />
            </GlassSearch>
          </GlassNav>
          <GlassMobileNav>
            {headerData.links.map((link, idx) => {
              const { label, href } = normalizeLink(link);
              return <GlassMobileLink key={idx} href={href}>{label}</GlassMobileLink>;
            })}
          </GlassMobileNav>
        </GlassHeader>
      );

    default:
      return null;
  }
}
