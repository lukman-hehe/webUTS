"use client";

import styled from "styled-components";
import { FaCheck, FaChevronRight, FaDownload } from "react-icons/fa";

const variantStyles = {
  solid: {
    background: "#0066cc",
    color: "#fff",
    hover: "#0052a3",
  },
  outline: {
    background: "transparent",
    color: "#0066cc",
    border: "#0066cc",
    hover: "#0066cc",
  },
  pill: {
    background: "linear-gradient(135deg, #0066cc 0%, #004080 100%)",
    color: "#fff",
    hover: "linear-gradient(135deg, #0052a3 0%, #003366 100%)",
  },
};

/* ====== VARIANT SOLID: Tombol solid dengan ikon ====== */
const SolidButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 2.2rem;
  font-size: 16px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Poppins", sans-serif;
  background: ${variantStyles.solid.background};
  color: ${variantStyles.solid.color};
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: ${variantStyles.solid.hover};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 102, 204, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  svg {
    font-size: 18px;
    transition: transform 0.3s;
    flex-shrink: 0;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 13px;
    gap: 0.5rem;
    width: 100%;

    svg {
      font-size: 14px;
    }
  }
`;

/* ====== VARIANT OUTLINE: Tombol dengan border dan efek fill saat hover ====== */
const OutlineButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 2rem;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid ${variantStyles.outline.border};
  background: ${variantStyles.outline.background};
  color: ${variantStyles.outline.color};
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${variantStyles.outline.hover};
    transition: left 0.4s ease;
    z-index: 0;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover {
    color: white;
    border-color: ${variantStyles.outline.hover};
  }
  
  span, svg {
    position: relative;
    z-index: 1;
  }
  
  svg {
    transition: transform 0.3s;
    flex-shrink: 0;
  }
  
  &:hover svg {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
    font-size: 13px;
    gap: 0.5rem;
    width: 100%;
  }
`;

/* ====== VARIANT PILL: Tombol bulat dengan gradien ====== */
const PillButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 1.1rem 2.5rem;
  font-size: 15px;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  font-family: "Poppins", sans-serif;
  background: ${variantStyles.pill.background};
  color: ${variantStyles.pill.color};
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover::after {
    width: 300px;
    height: 300px;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 35px rgba(0, 102, 204, 0.6);
  }
  
  span, svg {
    position: relative;
    z-index: 1;
  }
  
  svg {
    animation: bounce 2s infinite;
    flex-shrink: 0;
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 13px;
    gap: 0.5rem;
    width: 100%;
  }
`;

export default function ButtonVariant({ variant = "solid", onClick, data }) {
  switch (variant) {
    case "solid":
      return (
        <SolidButton onClick={onClick}>
          <span>{data?.label || "Konfirmasi Pemesanan"}</span>
          {data?.icon || <FaChevronRight />}
        </SolidButton>
      );

    case "outline":
      return (
        <OutlineButton onClick={onClick}>
          {data?.icon || <FaCheck />}
          <span>{data?.label || "Tambah ke Favorit"}</span>
        </OutlineButton>
      );

    case "pill":
      return (
        <PillButton onClick={onClick}>
          {data?.icon || <FaDownload />}
          <span>{data?.label || "Unduh"}</span>
        </PillButton>
      );

    default:
      return null;
  }
}
