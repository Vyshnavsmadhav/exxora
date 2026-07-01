"use client";

import React, { useState } from "react";
import { Cpu, ShieldCheck, Zap } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  specs: { icon: React.ReactNode; label: string; value: string }[];
  materials: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, selectedMaterial: string) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedMaterial, setSelectedMaterial] = useState(product.materials[0]);

  return (
    <div style={styles.card} className="glass-panel glow-on-hover">
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
      </div>

      <div style={styles.content}>
        <div style={styles.header}>
          <h3 style={styles.title}>{product.name}</h3>
          <span style={styles.price}>{product.price}</span>
        </div>

        <p style={styles.description}>{product.description}</p>

        {/* Material Selection */}
        <div style={styles.materialSection}>
          <span style={styles.sectionLabel}>FINISH</span>
          <div style={styles.materials}>
            {product.materials.map((material) => (
              <button
                key={material}
                onClick={() => setSelectedMaterial(material)}
                style={{
                  ...styles.materialBtn,
                  background: selectedMaterial === material ? "var(--color-primary)" : "transparent",
                  color: selectedMaterial === material ? "var(--color-on-primary)" : "var(--color-primary)",
                  borderColor: selectedMaterial === material ? "var(--color-primary)" : "var(--color-outline-variant)",
                }}
              >
                {material}
              </button>
            ))}
          </div>
        </div>

        {/* Key Specs */}
        <div style={styles.specsSection}>
          <span style={styles.sectionLabel}>DISCREET INTELLIGENCE</span>
          <div style={styles.specsGrid}>
            {product.specs.map((spec, index) => (
              <div key={index} style={styles.specCard} className="glass-panel-elevated">
                <div style={styles.specIcon}>{spec.icon}</div>
                <div style={styles.specMeta}>
                  <span style={styles.specLabel}>{spec.label}</span>
                  <span style={styles.specValue}>{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product, selectedMaterial)}
          style={styles.addButton}
          className="glow-on-hover"
        >
          ORDER CUSTOM SPECIFICATION
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "column" as const,
    overflow: "hidden",
    height: "100%",
  },
  imageContainer: {
    height: "360px",
    width: "100%",
    position: "relative" as const,
    background: "radial-gradient(circle, rgba(25,25,28,1) 0%, rgba(0,0,0,1) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "90%",
    height: "90%",
    objectFit: "contain" as const,
    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
    ":hover": {
      transform: "scale(1.05)",
    },
  },
  content: {
    padding: "32px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "24px",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  title: {
    fontSize: "24px",
    fontWeight: 500,
    letterSpacing: "-0.02em",
  },
  price: {
    fontSize: "20px",
    fontWeight: 300,
    color: "var(--color-secondary)",
  },
  description: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "var(--color-on-surface-variant)",
    fontWeight: 300,
  },
  materialSection: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  sectionLabel: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.15em",
    color: "var(--color-outline)",
  },
  materials: {
    display: "flex",
    gap: "12px",
  },
  materialBtn: {
    padding: "8px 16px",
    borderRadius: "var(--radius-full)",
    border: "1px solid",
    fontSize: "12px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  specsSection: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  specsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",
  },
  specCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderRadius: "var(--radius-md)",
  },
  specIcon: {
    color: "var(--color-primary)",
    opacity: 0.8,
  },
  specMeta: {
    display: "flex",
    flexDirection: "column" as const,
  },
  specLabel: {
    fontSize: "10px",
    color: "var(--color-outline)",
    fontWeight: 500,
  },
  specValue: {
    fontSize: "12px",
    fontWeight: 600,
  },
  addButton: {
    marginTop: "auto",
    width: "100%",
    padding: "16px",
    background: "var(--color-primary)",
    color: "var(--color-on-primary)",
    border: "none",
    borderRadius: "var(--radius-full)",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    cursor: "pointer",
  },
};
