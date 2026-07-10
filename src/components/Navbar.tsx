"use client";

import React from "react";
import { ShoppingBag, Radio, Home } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ cartCount, onCartClick, activeTab, setActiveTab }: NavbarProps) {
  return (
    <header style={styles.header} className="glass-panel-elevated">
      <div style={styles.container}>
        <div style={styles.logoGroup}>
          <button
            onClick={() => setActiveTab("wearables")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={styles.logo}>STITCH LUXE</span>
          </button>
          <div style={styles.statusBadge}>
            <div className="status-pulse-dot" />
            <span style={styles.statusText}>OS-CONNECT v2.4</span>
          </div>
        </div>

        <nav style={styles.nav}>
          <button
            onClick={() => setActiveTab("wearables")}
            style={{
              ...styles.navLink,
              color: activeTab === "wearables" ? "var(--color-primary)" : "var(--color-outline)",
              borderBottom: activeTab === "wearables" ? "1px solid var(--color-primary)" : "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Home size={14} strokeWidth={1.5} />
            HOME
          </button>
          {["wearables", "ai-glasses", "telemetry"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.navLink,
                color: activeTab === tab ? "var(--color-primary)" : "var(--color-outline)",
                borderBottom: activeTab === tab ? "1px solid var(--color-primary)" : "none",
              }}
            >
              {tab.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </nav>

        <div style={styles.actions}>
          <button style={styles.cartButton} onClick={onCartClick}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && <span style={styles.cartBadge}>{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed" as const,
    top: "24px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "calc(100% - 48px)",
    maxWidth: "var(--container-max)",
    height: "64px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    padding: "0 var(--spacing-unit) * 3",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0 24px",
  },
  logoGroup: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  logo: {
    fontFamily: "var(--font-family)",
    fontWeight: 600,
    fontSize: "20px",
    letterSpacing: "0.2em",
    color: "var(--color-primary)",
  },
  statusBadge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "4px 10px",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "var(--radius-full)",
  },
  statusText: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    color: "rgba(255, 255, 255, 0.7)",
  },
  nav: {
    display: "flex",
    gap: "32px",
  },
  navLink: {
    background: "none",
    border: "none",
    fontFamily: "var(--font-family)",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    cursor: "pointer",
    padding: "8px 0",
    transition: "color 0.3s ease",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  cartButton: {
    background: "none",
    border: "none",
    color: "var(--color-primary)",
    cursor: "pointer",
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
    borderRadius: "var(--radius-full)",
    transition: "background 0.3s ease",
    ":hover": {
      background: "rgba(255, 255, 255, 0.05)",
    },
  },
  cartBadge: {
    position: "absolute" as const,
    top: "0",
    right: "0",
    background: "var(--color-primary)",
    color: "var(--color-on-primary)",
    fontSize: "10px",
    fontWeight: 700,
    borderRadius: "50%",
    width: "16px",
    height: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
