"use client";

import styled from "styled-components";
import Link from "next/link";
import {
  FaHome,
  FaBed,
  FaConciergeBell,
  FaInfoCircle,
  FaUser,
  FaChevronRight,
} from "react-icons/fa";

const variantStyles = {
  compact: {
    background: "#2c3e50",
    color: "#ecf0f1",
    hover: "#34495e",
    title: "Menu",
  },
  expanded: {
    background: "linear-gradient(180deg, #232526 0%, #414345 100%)",
    color: "#fff",
    hover: "rgba(255,255,255,0.1)",
    title: "Navigation",
  },
  floating: {
    background: "rgba(255, 255, 255, 0.95)",
    color: "#2c3e50",
    hover: "#f0f0f0",
    title: "Components",
  },
};

// Default icons mapping
const defaultIcons = {
  header: <FaHome />,
  card: <FaBed />,
  button: <FaConciergeBell />,
  footer: <FaInfoCircle />,
  sidebar: <FaUser />,
};

// Default items fallback
const defaultItems = [
  { name: "Header", href: "#", icon: <FaHome /> },
  { name: "Card", href: "#", icon: <FaBed /> },
  { name: "Button", href: "#", icon: <FaConciergeBell /> },
  { name: "Footer", href: "#", icon: <FaInfoCircle /> },
  { name: "Sidebar", href: "#", icon: <FaUser /> },
];

const CompactSidebar = styled.aside`
  font-family: "Inter", sans-serif;
  background: ${variantStyles.compact.background};
  color: ${variantStyles.compact.color};
  width: 70px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
  gap: 0.5rem;
  position: sticky;
  top: 0;
  border-right: 3px solid #3498db;

  @media (max-width: 768px) {
    min-height: auto;
    height: 100%;
    padding: 1rem 0;
  }
`;

const CompactTitle = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  color: #3498db;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const CompactItemLink = styled(Link)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: inherit;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;
  
  svg {
    font-size: 22px;
  }
  
  &:hover {
    background: ${variantStyles.compact.hover};
    transform: scale(1.1);
  }
  
  &::after {
    content: attr(data-label);
    position: absolute;
    left: 70px;
    background: #2c3e50;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    z-index: 1000;
  }
  
  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    
    svg {
      font-size: 18px;
    }

    &::after {
      display: none;
    }
  }
`;

const CompactItemButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: inherit;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  svg {
    font-size: 22px;
  }
  
  &:hover {
    background: ${variantStyles.compact.hover};
    transform: scale(1.1);
  }
  
  &::after {
    content: attr(data-label);
    position: absolute;
    left: 70px;
    background: #2c3e50;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    z-index: 1000;
  }
  
  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    
    svg {
      font-size: 18px;
    }

    &::after {
      display: none;
    }
  }
`;

const ExpandedSidebar = styled.aside`
  font-family: "Poppins", sans-serif;
  background: ${variantStyles.expanded.background};
  color: ${variantStyles.expanded.color};
  width: 260px;
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: sticky;
  top: 0;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 400px) {
    width: 100%;
    min-height: auto;
  }
`;

const ExpandedTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 0 2rem 1rem;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ExpandedSection = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionLabel = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0.5;
  margin: 1rem 0 0.5rem 1rem;
  font-weight: 700;
`;

const ExpandedItemLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.2rem;
  background: none;
  border: none;
  color: inherit;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 15px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    background: ${variantStyles.expanded.hover};
    transform: translateX(5px);
  }
`;

const ExpandedItemButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.2rem;
  background: none;
  border: none;
  color: inherit;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 15px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    background: ${variantStyles.expanded.hover};
    transform: translateX(5px);
  }
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    font-size: 18px;
    opacity: 0.8;
  }
`;

const FloatingSidebar = styled.aside`
  font-family: "Poppins", sans-serif;
  background: ${variantStyles.floating.background};
  color: ${variantStyles.floating.color};
  width: 240px;
  min-height: calc(100vh - 40px);
  margin: 20px;
  padding: 2rem 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: sticky;
  top: 20px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 400px) {
    width: calc(100% - 40px);
  }
`;

const FloatingTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 1.5rem 1rem;
  color: #2c3e50;
`;

const FloatingItemLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: none;
  border: none;
  color: inherit;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  
  svg {
    font-size: 20px;
    padding: 8px;
    background: linear-gradient(135deg, #667eea20, #764ba220);
    border-radius: 10px;
    color: #667eea;
    transition: all 0.3s;
  }
  
  &:hover {
    background: ${variantStyles.floating.hover};
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  &:hover svg {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    transform: rotate(10deg);
  }
`;

const FloatingItemButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: none;
  border: none;
  color: inherit;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  font-size: 15px;
  font-weight: 600;
  
  svg {
    font-size: 20px;
    padding: 8px;
    background: linear-gradient(135deg, #667eea20, #764ba220);
    border-radius: 10px;
    color: #667eea;
    transition: all 0.3s;
  }
  
  &:hover {
    background: ${variantStyles.floating.hover};
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  &:hover svg {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    transform: rotate(10deg);
  }
`;

// Helper function to get icon for an item
const getItemIcon = (item) => {
  if (item.icon) return item.icon;
  const name = (item.name || item.label || "").toLowerCase();
  return defaultIcons[name] || <FaHome />;
};

// Helper function to get item display name
const getItemName = (item) => {
  return item.name || item.label || "Menu";
};

export default function SidebarVariant({ variant = "compact", items, onSelect, title }) {
  // Use provided items or fallback to defaults
  const menuItems = items && items.length > 0 ? items : defaultItems;

  // Get title based on variant or use custom title
  const sidebarTitle = title || variantStyles[variant]?.title || "Menu";

  const renderCompactItem = (item, index) => {
    const icon = getItemIcon(item);
    const name = getItemName(item);
    const hasHref = item.href && item.href !== "";

    if (hasHref) {
      return (
        <CompactItemLink
          key={item.name || item.label || index}
          href={item.href}
          data-label={name}
          onClick={() => onSelect?.(name.toLowerCase())}
        >
          {icon}
        </CompactItemLink>
      );
    }

    return (
      <CompactItemButton
        key={item.name || item.label || index}
        data-label={name}
        onClick={() => onSelect?.(name.toLowerCase())}
      >
        {icon}
      </CompactItemButton>
    );
  };

  const renderExpandedItem = (item, index) => {
    const icon = getItemIcon(item);
    const name = getItemName(item);
    const hasHref = item.href && item.href !== "";

    if (hasHref) {
      return (
        <ExpandedItemLink
          key={item.name || item.label || index}
          href={item.href}
          onClick={() => onSelect?.(name.toLowerCase())}
        >
          <ItemLeft>
            {icon}
            <span>{name}</span>
          </ItemLeft>
          <FaChevronRight size={14} style={{ opacity: 0.5, marginRight: '8px' }} />
        </ExpandedItemLink>
      );
    }

    return (
      <ExpandedItemButton
        key={item.name || item.label || index}
        onClick={() => onSelect?.(name.toLowerCase())}
      >
        <ItemLeft>
          {icon}
          <span>{name}</span>
        </ItemLeft>
        <FaChevronRight size={14} style={{ opacity: 0.5, marginRight: '8px' }} />
      </ExpandedItemButton>
    );
  };

  const renderFloatingItem = (item, index) => {
    const icon = getItemIcon(item);
    const name = getItemName(item);
    const hasHref = item.href && item.href !== "";

    if (hasHref) {
      return (
        <FloatingItemLink
          key={item.name || item.label || index}
          href={item.href}
          onClick={() => onSelect?.(name.toLowerCase())}
        >
          {icon}
          <span>{name}</span>
        </FloatingItemLink>
      );
    }

    return (
      <FloatingItemButton
        key={item.name || item.label || index}
        onClick={() => onSelect?.(name.toLowerCase())}
      >
        {icon}
        <span>{name}</span>
      </FloatingItemButton>
    );
  };

  switch (variant) {
    case "compact":
      return (
        <CompactSidebar>
          <CompactTitle>{sidebarTitle}</CompactTitle>
          {menuItems.map((item, index) => renderCompactItem(item, index))}
        </CompactSidebar>
      );

    case "expanded":
      return (
        <ExpandedSidebar>
          <ExpandedTitle>{sidebarTitle}</ExpandedTitle>
          <ExpandedSection>
            <SectionLabel>Components</SectionLabel>
            {menuItems.map((item, index) => renderExpandedItem(item, index))}
          </ExpandedSection>
        </ExpandedSidebar>
      );

    case "floating":
      return (
        <FloatingSidebar>
          <FloatingTitle>{sidebarTitle}</FloatingTitle>
          {menuItems.map((item, index) => renderFloatingItem(item, index))}
        </FloatingSidebar>
      );

    default:
      return null;
  }
}
