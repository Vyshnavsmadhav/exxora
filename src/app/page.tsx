"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import BiometricDashboard from "@/components/BiometricDashboard";
import { Cpu, ShieldCheck, Zap, X, ShoppingBag, Eye, Fingerprint, Activity } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  specs: { icon: React.ReactNode; label: string; value: string }[];
  materials: string[];
}

interface CartItem {
  product: Product;
  material: string;
  quantity: number;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("wearables");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const products: Product[] = [
    {
      id: "aetheris-ring",
      name: "Aetheris Ring",
      price: "$599",
      description: "Machined from solid polished titanium. Packs advanced dual-sensor photoplethysmography and a 7-day battery into a 2.1mm ultra-thin ergonomic frame.",
      image: "/images/smart_ring.png",
      specs: [
        { icon: <Fingerprint size={16} />, label: "PROFILE", value: "2.1mm Thin" },
        { icon: <Activity size={16} />, label: "SENSORS", value: "Dual PPG" },
        { icon: <Zap size={16} />, label: "BATTERY", value: "7 Days" },
        { icon: <ShieldCheck size={16} />, label: "DEPTH", value: "100m Water-res" },
      ],
      materials: ["Polished Titanium", "Matte Onyx", "Brushed Platinum"],
    },
    {
      id: "aetheris-eyewear",
      name: "Aetheris Eyewear",
      price: "$899",
      description: "Discreet heads-up navigation and biometric eye-tracking inside bespoke custom frames. Hand-polished acetate housing a micro-laser retina projection display.",
      image: "/images/smart_glasses.png",
      specs: [
        { icon: <Eye size={16} />, label: "DISPLAY", value: "Retina HUD" },
        { icon: <Cpu size={16} />, label: "ENGINE", value: "Aetheric-S1" },
        { icon: <Zap size={16} />, label: "BATTERY", value: "12 Hours" },
        { icon: <ShieldCheck size={16} />, label: "LENS", value: "UV Zeiss AR" },
      ],
      materials: ["Obsidian Glass", "Frosted Silver", "Amber Shell"],
    },
  ];

  const handleAddToCart = (product: Product, material: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.material === material);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.material === material
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, material, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail) return;
    setOrderPlaced(true);
    setCart([]);
  };

  const totalCartPrice = cart.reduce((total, item) => {
    const priceNum = parseInt(item.product.price.replace("$", ""));
    return total + priceNum * item.quantity;
  }, 0);

  return (
    <main style={styles.main}>
      {/* Background radial gradient glow */}
      <div style={styles.backgroundGlow} />

      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Hero Header */}
      <section style={styles.heroSection}>
        <div style={styles.heroTextContainer}>
          <span style={styles.heroOverline}>STITCH LUXE SMART WEARABLES</span>
          <h1 style={styles.heroHeading}>DISCREET INTELLIGENCE</h1>
          <p style={styles.heroDescription}>
            Technology engineered to be felt, not seen. Luxury aesthetics fusing advanced biometrics with artisanal craftsmanship.
          </p>
        </div>

        {/* Featured Lifestyle Banner */}
        <div style={styles.lifestyleBanner} className="glass-panel">
          <img src="/images/lifestyle.png" alt="Stitch Luxe Lifestyle" style={styles.lifestyleImage} />
          <div style={styles.lifestyleOverlay}>
            <span style={styles.lifestyleTag}>CURRENT STATE</span>
            <h2 style={styles.lifestyleHeading}>CONNECTED LIVING</h2>
          </div>
        </div>
      </section>

      {/* Content Areas */}
      <section style={styles.contentSection}>
        {activeTab === "wearables" ? (
          <div style={styles.productsContainer}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>THE COLLECTION</h2>
              <p style={styles.sectionSubtitle}>Selected bespoke finishes and specifications</p>
            </div>
            <div style={styles.productsGrid}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </div>
        ) : (
          <div style={styles.dashboardContainer} className="glass-panel">
            <BiometricDashboard />
          </div>
        )}
      </section>

      {/* Sidebar Shopping Cart */}
      {isCartOpen && (
        <div style={styles.cartOverlay}>
          <div style={styles.cartBackdrop} onClick={() => { setIsCartOpen(false); setOrderPlaced(false); }} />
          <div style={styles.cartDrawer} className="glass-panel-elevated">
            <div style={styles.cartHeader}>
              <h2 style={styles.cartTitle}>CART SPECIFICATION</h2>
              <button style={styles.closeBtn} onClick={() => { setIsCartOpen(false); setOrderPlaced(false); }}>
                <X size={20} />
              </button>
            </div>

            {orderPlaced ? (
              <div style={styles.successContainer}>
                <div style={styles.successIcon}>✓</div>
                <h3 style={styles.successTitle}>ORDER TRANSMITTED</h3>
                <p style={styles.successText}>
                  Your custom order has been compiled and transmitted to our artisans. You will receive an encrypted verification email shortly.
                </p>
                <div style={styles.serialBox} className="glass-panel">
                  <span style={styles.serialLabel}>ORDER SIGNATURE:</span>
                  <span style={styles.serialVal}>
                    {Math.random().toString(36).substring(2, 10).toUpperCase()}-
                    {Math.random().toString(36).substring(2, 10).toUpperCase()}
                  </span>
                </div>
                <button
                  style={styles.continueBtn}
                  onClick={() => {
                    setIsCartOpen(false);
                    setOrderPlaced(false);
                  }}
                >
                  RETURN TO STORE
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div style={styles.emptyCart}>
                <ShoppingBag size={48} strokeWidth={1} style={{ opacity: 0.3, marginBottom: "16px" }} />
                <p>No specs selected.</p>
              </div>
            ) : (
              <div style={styles.cartBody}>
                <div style={styles.cartList}>
                  {cart.map((item, index) => (
                    <div key={index} style={styles.cartItem} className="glass-panel">
                      <div style={styles.cartItemMeta}>
                        <h4>{item.product.name}</h4>
                        <span style={styles.cartItemSpec}>
                          Finish: {item.material} | Qty: {item.quantity}
                        </span>
                      </div>
                      <div style={styles.cartItemRight}>
                        <span>{item.product.price}</span>
                        <button style={styles.removeItemBtn} onClick={() => handleRemoveFromCart(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={styles.cartSummary}>
                  <div style={styles.totalRow}>
                    <span>TOTAL ESTIMATED COST</span>
                    <span style={styles.totalPrice}>${totalCartPrice}</span>
                  </div>

                  <form onSubmit={handleCheckout} style={styles.checkoutForm}>
                    <div style={styles.formField}>
                      <label style={styles.formLabel}>YOUR NAME</label>
                      <input
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Elizabeth Vance"
                        style={styles.formInput}
                      />
                    </div>
                    <div style={styles.formField}>
                      <label style={styles.formLabel}>SECURE EMAIL</label>
                      <input
                        type="email"
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="elizabeth@aether.luxury"
                        style={styles.formInput}
                      />
                    </div>
                    <button type="submit" style={styles.checkoutBtn} className="glow-on-hover">
                      CONFIRM ORDER & GENERATE KEY
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <span>STITCH LUXE SYSTEM INC © 2026</span>
          <div style={styles.footerLinks}>
            <span>PRIVACY DISCLOSURE</span>
            <span>AETHERIC PROTOCOL</span>
            <span>SECURE GATEWAY</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    position: "relative" as const,
    paddingTop: "120px",
  },
  backgroundGlow: {
    position: "absolute" as const,
    top: "-10%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    height: "600px",
    background: "radial-gradient(circle, rgba(0,0,0,0.015) 0%, rgba(255,255,255,0) 80%)",
    zIndex: -1,
    pointerEvents: "none" as const,
  },
  heroSection: {
    maxWidth: "var(--container-max)",
    width: "100%",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "48px",
  },
  heroTextContainer: {
    textAlign: "center" as const,
    marginTop: "24px",
  },
  heroOverline: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.2em",
    color: "var(--color-outline)",
    display: "block",
    marginBottom: "12px",
  },
  heroHeading: {
    fontSize: "56px",
    fontWeight: 600,
    letterSpacing: "-0.03em",
    lineHeight: "1.1",
    marginBottom: "24px",
  },
  heroDescription: {
    fontSize: "18px",
    color: "var(--color-secondary)",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
    fontWeight: 300,
  },
  lifestyleBanner: {
    position: "relative" as const,
    height: "400px",
    width: "100%",
    overflow: "hidden",
    borderRadius: "var(--radius-xl)",
  },
  lifestyleImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    opacity: 0.85,
  },
  lifestyleOverlay: {
    position: "absolute" as const,
    bottom: "40px",
    left: "40px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  lifestyleTag: {
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.15em",
    color: "var(--color-primary)",
    opacity: 0.6,
  },
  lifestyleHeading: {
    fontSize: "28px",
    fontWeight: 500,
    letterSpacing: "0.1em",
  },
  contentSection: {
    maxWidth: "var(--container-max)",
    width: "100%",
    margin: "80px auto 120px auto",
    padding: "0 24px",
  },
  productsContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "40px",
  },
  sectionHeader: {
    textAlign: "left" as const,
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: 500,
    letterSpacing: "0.05em",
  },
  sectionSubtitle: {
    fontSize: "14px",
    color: "var(--color-outline)",
    marginTop: "4px",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
    gap: "40px",
  },
  dashboardContainer: {
    padding: "40px",
  },
  footer: {
    marginTop: "auto",
    borderTop: "1px solid rgba(0, 0, 0, 0.05)",
    padding: "40px 0",
  },
  footerContainer: {
    maxWidth: "var(--container-max)",
    width: "100%",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "11px",
    color: "var(--color-outline)",
    letterSpacing: "0.05em",
  },
  footerLinks: {
    display: "flex",
    gap: "24px",
  },
  cartOverlay: {
    position: "fixed" as const,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2000,
    display: "flex",
    justifyContent: "flex-end",
  },
  cartBackdrop: {
    position: "absolute" as const,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(8px)",
  },
  cartDrawer: {
    position: "relative" as const,
    width: "100%",
    maxWidth: "480px",
    height: "100%",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(40px)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.08)",
    padding: "40px",
    display: "flex",
    flexDirection: "column" as const,
    boxShadow: "-10px 0 30px rgba(0,0,0,0.05)",
    color: "var(--color-primary)",
  },
  cartHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
  },
  cartTitle: {
    fontSize: "18px",
    fontWeight: 600,
    letterSpacing: "0.1em",
  },
  closeBtn: {
    background: "none",
    border: "none",
    color: "var(--color-primary)",
    cursor: "pointer",
    padding: "8px",
  },
  emptyCart: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    color: "var(--color-outline)",
    fontSize: "14px",
  },
  cartBody: {
    display: "flex",
    flexDirection: "column" as const,
    flexGrow: 1,
    overflowY: "auto" as const,
  },
  cartList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
    overflowY: "auto" as const,
    flexGrow: 1,
    paddingRight: "8px",
    marginBottom: "32px",
  },
  cartItem: {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartItemMeta: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
  },
  cartItemSpec: {
    fontSize: "12px",
    color: "var(--color-outline)",
  },
  cartItemRight: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-end",
    gap: "8px",
  },
  removeItemBtn: {
    background: "none",
    border: "none",
    color: "var(--color-error)",
    fontSize: "11px",
    cursor: "pointer",
  },
  cartSummary: {
    borderTop: "1px solid rgba(0,0,0,0.08)",
    paddingTop: "24px",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "24px",
  },
  totalPrice: {
    fontSize: "24px",
    fontWeight: 500,
  },
  checkoutForm: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
  },
  formField: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
  },
  formLabel: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    color: "var(--color-outline)",
  },
  formInput: {
    background: "rgba(0,0,0,0.02)",
    border: "1px solid rgba(0,0,0,0.1)",
    padding: "12px 16px",
    borderRadius: "var(--radius-default)",
    color: "var(--color-primary)",
    fontFamily: "var(--font-family)",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s ease",
    ":focus": {
      borderColor: "var(--color-primary)",
    },
  },
  checkoutBtn: {
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
    marginTop: "8px",
  },
  successContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    textAlign: "center" as const,
    gap: "16px",
  },
  successIcon: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.03)",
    border: "1px solid var(--color-primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    color: "var(--color-primary)",
    marginBottom: "16px",
  },
  successTitle: {
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: "0.1em",
  },
  successText: {
    fontSize: "14px",
    color: "var(--color-outline)",
    lineHeight: "1.6",
    fontWeight: 300,
  },
  serialBox: {
    padding: "16px",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
    marginTop: "16px",
  },
  serialLabel: {
    fontSize: "9px",
    color: "var(--color-outline)",
    letterSpacing: "0.1em",
  },
  serialVal: {
    fontFamily: "monospace",
    fontSize: "14px",
    letterSpacing: "0.05em",
  },
  continueBtn: {
    width: "100%",
    padding: "16px",
    background: "transparent",
    border: "1px solid rgba(0,0,0,0.15)",
    color: "var(--color-primary)",
    borderRadius: "var(--radius-full)",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    cursor: "pointer",
    marginTop: "24px",
    transition: "all 0.3s ease",
  },
};
