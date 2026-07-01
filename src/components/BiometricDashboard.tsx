"use client";

import React, { useState, useEffect } from "react";
import { Heart, Activity, Moon, ShieldCheck, Flame, Compass } from "lucide-react";

export default function BiometricDashboard() {
  const [heartRate, setHeartRate] = useState(72);
  const [bloodOxygen, setBloodOxygen] = useState(98);
  const [sleepScore, setSleepScore] = useState(88);
  const [stressLevel, setStressLevel] = useState(24);
  const [isSimulating, setIsSimulating] = useState(true);

  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setHeartRate((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        const next = prev + change;
        return next > 120 ? 120 : next < 60 ? 60 : next;
      });
      setBloodOxygen((prev) => {
        const change = Math.random() > 0.85 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        const next = prev + change;
        return next > 100 ? 100 : next < 95 ? 95 : next;
      });
      setStressLevel((prev) => {
        const change = Math.floor(Math.random() * 3) - 1;
        const next = prev + change;
        return next > 90 ? 90 : next < 5 ? 5 : next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleInduceStress = () => {
    setHeartRate(112);
    setStressLevel(82);
  };

  const handleSimulateRest = () => {
    setHeartRate(62);
    setStressLevel(12);
    setSleepScore(94);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>LIVE BIOMETRIC TELEMETRY</h2>
          <p style={styles.subtitle}>Secured Aetheric data-link active</p>
        </div>
        <div style={styles.controls}>
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            style={{
              ...styles.controlBtn,
              background: isSimulating ? "rgba(255, 255, 255, 0.05)" : "var(--color-primary)",
              color: isSimulating ? "var(--color-primary)" : "var(--color-on-primary)",
            }}
          >
            {isSimulating ? "PAUSE STREAM" : "LIVE FEED"}
          </button>
        </div>
      </div>

      <div style={styles.grid}>
        {/* Heart Rate Card */}
        <div style={styles.card} className="glass-panel-elevated">
          <div style={styles.cardHeader}>
            <Heart size={20} color="#ffb4ab" />
            <span style={styles.cardTitle}>HEART RATE</span>
          </div>
          <div style={styles.cardContent}>
            <span style={styles.largeValue}>{heartRate}</span>
            <span style={styles.unit}>BPM</span>
          </div>
          <div style={styles.chartPlaceholder}>
            <svg viewBox="0 0 100 30" style={styles.sparkline}>
              <path
                d={`M 0 15 L 20 ${15 + (heartRate - 72) * 0.2} L 40 10 L 60 ${20 - (heartRate - 72) * 0.1} L 80 5 L 100 15`}
                fill="none"
                stroke="#ffb4ab"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        {/* Oxygen Saturation Card */}
        <div style={styles.card} className="glass-panel-elevated">
          <div style={styles.cardHeader}>
            <Activity size={20} color="#ffffff" />
            <span style={styles.cardTitle}>SPO2</span>
          </div>
          <div style={styles.cardContent}>
            <span style={styles.largeValue}>{bloodOxygen}</span>
            <span style={styles.unit}>%</span>
          </div>
          <div style={styles.radialContainer}>
            <svg width="60" height="60" viewBox="0 0 36 36" style={styles.radialSvg}>
              <path
                style={styles.radialBg}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                style={{
                  ...styles.radialValue,
                  strokeDasharray: `${bloodOxygen}, 100`,
                }}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
        </div>

        {/* Sleep Score Card */}
        <div style={styles.card} className="glass-panel-elevated">
          <div style={styles.cardHeader}>
            <Moon size={20} color="#c8c6c5" />
            <span style={styles.cardTitle}>SLEEP PERFORMANCE</span>
          </div>
          <div style={styles.cardContent}>
            <span style={styles.largeValue}>{sleepScore}</span>
            <span style={styles.unit}>/100</span>
          </div>
          <div style={styles.progressTrack}>
            <div style={{ ...styles.progressBar, width: `${sleepScore}%` }} />
          </div>
        </div>

        {/* Stress Index Card */}
        <div style={styles.card} className="glass-panel-elevated">
          <div style={styles.cardHeader}>
            <Flame size={20} color="#ffb4ab" />
            <span style={styles.cardTitle}>STRESS COEFFICIENT</span>
          </div>
          <div style={styles.cardContent}>
            <span style={styles.largeValue}>{stressLevel}</span>
            <span style={styles.unit}>/100</span>
          </div>
          <span style={styles.stressLabel}>
            {stressLevel > 70 ? "HIGH STRAIN" : stressLevel > 40 ? "MODERATE" : "CALM & FOCUSED"}
          </span>
        </div>
      </div>

      <div style={styles.actionRow}>
        <button onClick={handleInduceStress} style={styles.simulationBtn}>
          SIMULATE HIGH ACTIVITY
        </button>
        <button onClick={handleSimulateRest} style={styles.simulationBtn}>
          SIMULATE MEDITATION
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "24px",
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: "0.1em",
  },
  subtitle: {
    fontSize: "12px",
    color: "var(--color-outline)",
    marginTop: "4px",
  },
  controls: {
    display: "flex",
    gap: "12px",
  },
  controlBtn: {
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "8px 16px",
    borderRadius: "var(--radius-full)",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.05em",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "24px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
    minHeight: "180px",
    justifyContent: "space-between",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  cardTitle: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    color: "var(--color-outline)",
  },
  cardContent: {
    display: "flex",
    alignItems: "baseline",
    gap: "4px",
  },
  largeValue: {
    fontSize: "36px",
    fontWeight: 300,
  },
  unit: {
    fontSize: "14px",
    color: "var(--color-outline)",
  },
  chartPlaceholder: {
    height: "30px",
    width: "100%",
  },
  sparkline: {
    width: "100%",
    height: "100%",
  },
  radialContainer: {
    alignSelf: "flex-end",
  },
  radialSvg: {
    transform: "rotate(-90deg)",
  },
  radialBg: {
    fill: "none",
    stroke: "rgba(255, 255, 255, 0.05)",
    strokeWidth: 2.8,
  },
  radialValue: {
    fill: "none",
    stroke: "var(--color-primary)",
    strokeWidth: 2.8,
    strokeLinecap: "round" as const,
    transition: "stroke-dasharray 0.3s ease",
  },
  progressTrack: {
    width: "100%",
    height: "4px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "var(--radius-full)",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    background: "var(--color-primary)",
    transition: "width 0.5s ease",
  },
  stressLabel: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.05em",
    color: "var(--color-secondary)",
  },
  actionRow: {
    display: "flex",
    gap: "16px",
    marginTop: "8px",
  },
  simulationBtn: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "var(--color-outline)",
    padding: "10px 20px",
    borderRadius: "var(--radius-full)",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.05em",
    cursor: "pointer",
    transition: "all 0.3s ease",
    ":hover": {
      borderColor: "var(--color-primary)",
      color: "var(--color-primary)",
    },
  },
};
