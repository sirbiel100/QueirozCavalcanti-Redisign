"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-pad" style={{ background: "#F7F7F5" }}>
      <div className="container-qca">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }} className="about-grid">

          {/* Left: image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{
              position: "relative",
              aspectRatio: "4/5",
            }}
          >
            {/* Main image placeholder */}
            <div
              aria-label="[About section image — professional office or team photo, 800×1000. Replace with <Image> from next/image]"
              style={{
                width: "100%",
                height: "100%",
                background: "#EEEDE8",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#AAAAAA",
                textAlign: "center",
              }}>
                About Image<br/>800 × 1000
              </span>
            </div>
            {/* Gold corner accents */}
            <div style={{ position: "absolute", top: 16, left: 16, width: 36, height: 36, borderTop: "2px solid #C8A97E", borderLeft: "2px solid #C8A97E" }} />
            <div style={{ position: "absolute", bottom: 16, right: 16, width: 36, height: 36, borderBottom: "2px solid #C8A97E", borderRight: "2px solid #C8A97E" }} />
            {/* Floating map/secondary image placeholder */}
            <div
              aria-label="[Secondary image — map of Brazil or office locations, 320×200]"
              style={{
                position: "absolute",
                bottom: -24,
                right: -24,
                width: 160,
                height: 120,
                background: "#1A1A1A",
                borderRadius: 4,
                border: "3px solid #F7F7F5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 8,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(200,169,126,0.6)",
                textAlign: "center",
              }}>
                Map / Locations<br/>320 × 200
              </span>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C8A97E",
              marginBottom: 20,
            }}>
              QCA
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#1A1A1A",
              marginBottom: 24,
            }}>
              {t("heading")}
            </h2>
            <div style={{ width: 40, height: 1, background: "#C8A97E", marginBottom: 28 }} />
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
              color: "#555555",
              marginBottom: 20,
            }}>
              {t("body")}
            </p>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
              color: "#555555",
              marginBottom: 40,
            }}>
              {t("body2")}
            </p>
            <Link
              href={`/${locale}/sobre`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#1A1A1A",
                textDecoration: "none",
                borderBottom: "1px solid #C8A97E",
                paddingBottom: 2,
                transition: "color 0.2s, letter-spacing 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A97E"; e.currentTarget.style.letterSpacing = "0.16em"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#1A1A1A"; e.currentTarget.style.letterSpacing = "0.12em"; }}
            >
              {t("cta")} →
            </Link>
          </motion.div>
        </div>
      </div>
      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
