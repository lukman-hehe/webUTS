"use client";

import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

const variantStyles = {
  stacked: { background: "#0a2e5a", color: "#ecf0f1" },
  columns: { background: "linear-gradient(135deg, #0066cc 0%, #004080 100%)", color: "#fff" },
  centered: { background: "#0a2e5a", color: "#eee" },
};

/* ====== VARIANT STACKED: Vertical sections ====== */
const StackedFooter = styled.footer`
  background: ${variantStyles.stacked.background};
  color: ${variantStyles.stacked.color};
  padding: 3rem 2rem 1.5rem;
  font-family: "Inter", sans-serif;
  border-top: 4px solid #0066cc;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 1rem 0.5rem 0.8rem;
  }
`;

const StackedSection = styled.div`
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    margin: 0 auto 1rem;
    padding-bottom: 1rem;
  }
`;

const StackedBrand = styled.div`
  margin-bottom: 1.5rem;
  
  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 0.5rem;
    color: #3498db;
  }
  
  p {
    margin: 0;
    opacity: 0.8;
    font-size: 14px;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1rem;
    
    h2 {
      font-size: 1.3rem;
    }

    p {
      max-width: 100%;
      font-size: 12px;
    }
  }
`;

const StackedLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin: 1rem 0;
    text-align: center;
    justify-items: center;
  }
`;

const LinkGroup = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  a {
    display: block;
    color: inherit;
    text-decoration: none;
    margin: 0.6rem 0;
    opacity: 0.8;
    font-size: 14px;
    transition: all 0.3s;
    
    &:hover {
      opacity: 1;
      padding-left: 5px;
      color: #3498db;
    }
  }
  
  @media (max-width: 576px) {
    h4 {
      font-size: 0.75rem;
      margin: 0 0 0.5rem;
    }
    
    a {
      margin: 0.3rem 0;
      font-size: 11px;
    }
  }
`;

const StackedBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  font-size: 13px;
  opacity: 0.7;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
    font-size: 10px;
    padding-top: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: inherit;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
    
    &:hover {
      background: #3498db;
      transform: translateY(-3px);
    }
  }
  
  @media (max-width: 576px) {
    gap: 0.5rem;
    
    a {
      width: 28px;
      height: 28px;
      font-size: 12px;
    }
  }
`;

/* ====== VARIANT COLUMNS: Multi-column layout ====== */
const ColumnsFooter = styled.footer`
  background: ${variantStyles.columns.background};
  color: ${variantStyles.columns.color};
  padding: 4rem 3rem 2rem;
  font-family: "Poppins", sans-serif;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem 0.8rem;
  }
`;

const ColumnsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ColumnBox = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0 1.5rem;
    position: relative;
    padding-bottom: 0.8rem;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #667eea, #764ba2);
    }
  }
  
  p {
    margin: 0.8rem 0;
    opacity: 0.85;
    font-size: 14px;
    line-height: 1.7;
  }
  
  a {
    display: block;
    color: inherit;
    text-decoration: none;
    margin: 0.7rem 0;
    opacity: 0.8;
    font-size: 14px;
    transition: all 0.3s;
    
    &:hover {
      opacity: 1;
      color: #667eea;
      transform: translateX(5px);
    }
  }
  
  @media (max-width: 576px) {
    h3 {
      font-size: 0.9rem;
      margin: 0 0 0.8rem;
      padding-bottom: 0.5rem;
      
      &::after {
        width: 30px;
        height: 2px;
      }
    }
    
    p {
      font-size: 11px;
      margin: 0.4rem 0;
      line-height: 1.5;
    }
    
    a {
      font-size: 11px;
      margin: 0.4rem 0;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 1rem 0;
  font-size: 14px;
  
  svg {
    color: #667eea;
    font-size: 16px;
  }
`;

const ColumnsDivider = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  opacity: 0.7;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

/* ====== VARIANT CENTERED: Center-aligned footer ====== */
const CenteredFooter = styled.footer`
  background: ${variantStyles.centered.background};
  color: ${variantStyles.centered.color};
  padding: 3rem 2rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

const CenteredContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CenteredLogo = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CenteredTagline = styled.p`
  font-size: 16px;
  opacity: 0.8;
  margin: 1rem 0 2rem;
  line-height: 1.6;
`;

const CenteredNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    transition: all 0.3s;
    
    &:hover {
      color: #667eea;
    }
  }
`;

const CenteredSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2.5rem 0;
  
  a {
    color: inherit;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s;
    font-size: 18px;
    
    &:hover {
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-color: transparent;
      transform: scale(1.1);
    }
  }
`;

const CenteredCopyright = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 13px;
  opacity: 0.6;
`;

// Helper function to normalize links (support both string and { label, href } format)
const normalizeLink = (link) => {
  if (typeof link === 'string') {
    return { label: link, href: '#' };
  }
  return { label: link.label, href: link.href || '#' };
};

export default function FooterVariant({ variant = "stacked", data }) {
  const defaultData = {
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

  const footerData = data || defaultData[variant];

  switch (variant) {
    case "stacked":
      return (
        <StackedFooter>
          <StackedSection>
            <StackedBrand>
              <h2>{footerData.brandName}</h2>
              <p>{footerData.brandDesc}</p>
            </StackedBrand>
            <StackedLinks>
              {footerData.linkGroups.map((group, idx) => (
                <LinkGroup key={idx}>
                  <h4>{group.title}</h4>
                  {group.links.map((link, linkIdx) => {
                    const { label, href } = normalizeLink(link);
                    return <a key={linkIdx} href={href}>{label}</a>;
                  })}
                </LinkGroup>
              ))}
            </StackedLinks>
          </StackedSection>
          <StackedBottom>
            <div>{footerData.copyright}</div>
            <SocialIcons>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </SocialIcons>
          </StackedBottom>
        </StackedFooter>
      );

    case "columns":
      return (
        <ColumnsFooter>
          <ColumnsGrid>
            <ColumnBox>
              <h3>{footerData.aboutTitle}</h3>
              <p>{footerData.aboutDesc}</p>
              <ContactItem>
                <FaPhone />
                <span>{footerData.phone}</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span>{footerData.email}</span>
              </ContactItem>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>{footerData.address}</span>
              </ContactItem>
            </ColumnBox>
            {footerData.columns.map((col, idx) => (
              <ColumnBox key={idx}>
                <h3>{col.title}</h3>
                {col.links && col.links.map((link, linkIdx) => {
                  const { label, href } = normalizeLink(link);
                  return <a key={linkIdx} href={href}>{label}</a>;
                })}
                {col.desc && <p>{col.desc}</p>}
                {idx === footerData.columns.length - 1 && (
                  <SocialIcons style={{ justifyContent: 'flex-start', marginTop: '1.5rem' }}>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                  </SocialIcons>
                )}
              </ColumnBox>
            ))}
          </ColumnsGrid>
          <ColumnsDivider>
            <div>© 2025 Paradise Resort. Hak Cipta Dilindungi.</div>
            <div>Dirancang dengan ❤️ untuk pengalaman mewah</div>
          </ColumnsDivider>
        </ColumnsFooter>
      );

    case "centered":
      return (
        <CenteredFooter>
          <CenteredContent>
            <CenteredLogo>{footerData.logo}</CenteredLogo>
            <CenteredTagline>{footerData.tagline}</CenteredTagline>
            <CenteredNav>
              {footerData.links.map((link, idx) => {
                const { label, href } = normalizeLink(link);
                return <a key={idx} href={href}>{label}</a>;
              })}
            </CenteredNav>
            <CenteredSocial>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </CenteredSocial>
            <CenteredCopyright>{footerData.copyright}</CenteredCopyright>
          </CenteredContent>
        </CenteredFooter>
      );

    default:
      return null;
  }
}
