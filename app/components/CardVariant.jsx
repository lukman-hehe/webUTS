"use client";

import styled from "styled-components";
import { FaStar, FaMapMarkerAlt, FaWifi, FaBed } from "react-icons/fa";

const variantStyles = {
  elevated: {
    background: "#fff",
    color: "#0066cc",
  },
  bordered: {
    background: "#f8f9fa",
    color: "#0066cc",
  },
  gradient: {
    background: "linear-gradient(135deg, #0066cc 0%, #004080 100%)",
    color: "#fff",
  },
};

/* ====== VARIANT ELEVATED: Card dengan bayangan dan lencana ====== */
const ElevatedCard = styled.div`
  width: 100%;
  max-width: 350px;
  background: ${variantStyles.elevated.background};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  }
`;

const ElevatedImageWrapper = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
`;

const ElevatedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
  
  ${ElevatedCard}:hover & {
    transform: scale(1.1);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 102, 204, 0.95);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ElevatedContent = styled.div`
  padding: 1.5rem;
`;

const ElevatedTitle = styled.h3`
  margin: 0 0 0.8rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0066cc;
`;

const ElevatedFeatures = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 1rem 0;
  color: #7f8c8d;
  font-size: 14px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const ElevatedFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid #ecf0f1;
`;

const Price = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: #0066cc;
  
  span {
    font-size: 0.9rem;
    font-weight: 400;
    color: #95a5a6;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #f39c12;
  font-weight: 600;
`;

/* ====== VARIANT BORDERED: Card dengan outline dan ikon ====== */
const BorderedCard = styled.div`
  width: 100%;
  max-width: 380px;
  background: ${variantStyles.bordered.background};
  border: 3px solid #dee2e6;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #6c757d;
    box-shadow: 0 8px 24px rgba(108, 117, 125, 0.2);
  }
`;

const BorderedContent = styled.div`
  padding: 1.8rem;
`;

const BorderedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
`;

const BorderedTitle = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #0066cc;
`;

const BorderedLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #6c757d;
  font-size: 14px;
  margin: 0.5rem 0 1rem;
`;

const BorderedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin: 1rem 0;
`;

const BorderedDescription = styled.p`
  color: #495057;
  font-size: 14px;
  line-height: 1.6;
  margin: 1rem 0;
`;

const BorderedFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px solid #dee2e6;
`;

const BorderedPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0066cc;
`;

const BookButton = styled.button`
  background: #0066cc;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: #0052a3;
    transform: scale(1.05);
  }
`;

/* ====== VARIANT GRADIENT: Card gradien berwarna ====== */
const GradientCard = styled.div`
  width: 100%;
  max-width: 320px;
  background: ${variantStyles.gradient.background};
  border-radius: 24px;
  overflow: visible;
  position: relative;
  box-shadow: 0 15px 45px rgba(245, 87, 108, 0.4);
  transition: all 0.4s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05) rotate(2deg);
  }
`;

const GradientImageWrapper = styled.div`
  padding: 1.5rem 1.5rem 0;
`;

const GradientImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

const GradientContent = styled.div`
  padding: 1.5rem;
  color: white;
`;

const GradientTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.6rem;
  font-weight: 800;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const GradientDescription = styled.p`
  margin: 0.5rem 0 1rem;
  opacity: 0.95;
  font-size: 14px;
  line-height: 1.5;
`;

const GradientFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GradientPrice = styled.div`
  font-size: 2rem;
  font-weight: 900;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const GradientRating = styled.div`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export default function CardVariant({ variant = "elevated", data }) {
  switch (variant) {
    case "elevated":
      return (
        <ElevatedCard>
          <ElevatedImageWrapper>
            <ElevatedImage src={data.image} alt={data.title} />
            <Badge>{data.badge}</Badge>
          </ElevatedImageWrapper>
          <ElevatedContent>
            <ElevatedTitle>{data.title}</ElevatedTitle>
            <ElevatedFeatures>
              <Feature><FaBed /> Kasur Lembut</Feature>
              <Feature><FaWifi /> WiFi Gratis</Feature>
            </ElevatedFeatures>
            <ElevatedFooter>
              <Price>{data.price}<span>/malam</span></Price>
              <Rating><FaStar /> {data.rating}</Rating>
            </ElevatedFooter>
          </ElevatedContent>
        </ElevatedCard>
      );

    case "bordered":
      return (
        <BorderedCard>
          <BorderedContent>
            <BorderedHeader>
              <div>
                <BorderedTitle>{data.title}</BorderedTitle>
                <BorderedLocation>
                  <FaMapMarkerAlt /> {data.location}
                </BorderedLocation>
              </div>
            </BorderedHeader>
            <BorderedImage src={data.image} alt={data.title} />
            <BorderedDescription>{data.description}</BorderedDescription>
            <BorderedFooter>
              <BorderedPrice>{data.price}</BorderedPrice>
              <BookButton>Pesan Sekarang</BookButton>
            </BorderedFooter>
          </BorderedContent>
        </BorderedCard>
      );

    case "gradient":
      return (
        <GradientCard>
          <GradientImageWrapper>
            <GradientImage src={data.image} alt={data.title} />
          </GradientImageWrapper>
          <GradientContent>
            <GradientTitle>{data.title}</GradientTitle>
            <GradientDescription>{data.description}</GradientDescription>
            <GradientFooter>
              <GradientPrice>{data.price}</GradientPrice>
              <GradientRating>★ {data.rating}</GradientRating>
            </GradientFooter>
          </GradientContent>
        </GradientCard>
      );

    default:
      return null;
  }
}
