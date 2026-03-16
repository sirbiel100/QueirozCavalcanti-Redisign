"use client";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Careers() {
  const t = useTranslations("careers");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: t("statsValues.years"),      label: t("stats.years") },
    { value: t("statsValues.members"),    label: t("stats.members") },
    { value: t("statsValues.female"),     label: t("stats.female") },
    { value: t("statsValues.committees"), label: t("stats.committees") },
  ];

  return (
    <section ref={ref} className="section-pad" style={{ background: "#2A3C5B", position: "relative", overflow: "hidden" }}>
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 360, height: 360, border: "1px solid rgba(200,169,126,0.12)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, border: "1px solid rgba(200,169,126,0.08)", borderRadius: "50%", pointerEvents: "none" }} />
      {/* Diagonal gold line */}
      <div style={{ position: "absolute", top: 0, left: "50%", width: 1, height: "100%", background: "linear-gradient(to bottom, transparent 0%, rgba(200,169,126,0.1) 50%, transparent 100%)", pointerEvents: "none" }} />

      <div className="container-qca">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="careers-grid">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A97E", marginBottom: 16 }}>
              {/* hardcoded inline for locale independence — you can move to messages if needed */}
              Carreiras
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "#FFFFFF", letterSpacing: "-0.01em", marginBottom: 24, lineHeight: 1.2 }}>
              {t("heading")}
            </h2>
            <div style={{ width: 40, height: 1, background: "#C8A97E", marginBottom: 28 }} />

            {[t("body"), t("body2"), t("body3")].map((para, i) => (
              <p key={i} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>
                {para}
              </p>
            ))}

            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 24, fontStyle: "italic", color: "#FFFFFF", margin: "32px 0 32px", lineHeight: 1.4 }}>
              "{t("believe")} <strong style={{ fontStyle: "normal", fontWeight: 600 }}>{t("believeBold")}</strong>"
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="#"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "#1A1A1A", background: "#C8A97E",
                  padding: "14px 28px", borderRadius: 2, textDecoration: "none", transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#b8976c"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#C8A97E"; }}
              >
                {t("diversity")} →
              </a>
              <a
                href="https://qca.gupy.io/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "#FFFFFF", background: "transparent",
                  border: "1px solid rgba(255,255,255,0.25)",
                  padding: "14px 28px", borderRadius: 2, textDecoration: "none", transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C8A97E"; e.currentTarget.style.color = "#C8A97E"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#FFFFFF"; }}
              >
                Candidatar-se →
              </a>
            </div>
          </motion.div>

          {/* Right: photos + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Photo grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
              {[
                { label: "Team Photo", dim: "400×480" },
                { label: "Office Photo", dim: "400×480", offset: true },
                { label: "Event Photo", dim: "400×240" },
                { label: "Diversity Photo", dim: "400×240" },
              ].map((ph, i) => (
                <div
                  key={i}
                  aria-label={`[${ph.label} — ${ph.dim}. Replace with <Image> from next/image]`}
                  style={{
                    aspectRatio: i < 2 ? "1/1.2" : "4/3",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 4,
                    border: "1px dashed rgba(200,169,126,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: ph.offset ? 28 : 0,
                  }}
                >
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(200,169,126,0.35)", textAlign: "center", padding: "0 8px" }}>
                    {ph.label}<br/>{ph.dim}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  style={{ padding: 20, background: "rgba(255,255,255,0.06)", borderRadius: 4, borderTop: "2px solid #C8A97E" }}
                >
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 36, fontWeight: 300, color: "#C8A97E", lineHeight: 1, marginBottom: 6 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .careers-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) { .careers-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
