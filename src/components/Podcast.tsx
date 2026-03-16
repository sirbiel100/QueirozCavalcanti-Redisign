"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface PodcastItem {
  guest: string;
  title: string;
}

export default function Podcast() {
  const t = useTranslations("podcast");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const items = t.raw("items") as PodcastItem[];

  return (
    <section ref={ref} className="section-pad" style={{ background: "#F7F7F5" }}>
      <div className="container-qca">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }} className="podcast-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ position: "sticky", top: 100 }}
          >
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C8A97E",
              marginBottom: 12,
            }}>
              Podcast
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 300,
              color: "#1A1A1A",
              lineHeight: 1.2,
              marginBottom: 8,
            }}>
              {t("heading")}
            </h2>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 18,
              fontStyle: "italic",
              color: "#555555",
              marginBottom: 32,
            }}>
              {t("subheading")}
            </p>
            <div style={{ width: 40, height: 1, background: "#C8A97E", marginBottom: 32 }} />
            {/* Podcast icon */}
            <div style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "#1A1A1A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" fill="#C8A97E"/>
                <path d="M12 3C7.03 3 3 7.03 3 12" stroke="#C8A97E" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 3C16.97 3 21 7.03 21 12" stroke="#C8A97E" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 7C9.24 7 7 9.24 7 12" stroke="rgba(200,169,126,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 7C14.76 7 17 9.24 17 12" stroke="rgba(200,169,126,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="12" y1="15" x2="12" y2="21" stroke="#C8A97E" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="9" y1="21" x2="15" y2="21" stroke="#C8A97E" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <Link
              href={`/${locale}/podcast`}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#1A1A1A",
                textDecoration: "none",
                borderBottom: "1px solid #C8A97E",
                paddingBottom: 2,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A97E"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#1A1A1A"; }}
            >
              {t("cta")} →
            </Link>
          </motion.div>

          {/* Right: episodes */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  padding: "28px 0",
                  borderBottom: "1px solid #EEEDE8",
                  cursor: "pointer",
                  transition: "padding-left 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "8px"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "0px"; }}
              >
                {/* Episode number */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "1px solid #EEEDE8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 18,
                  fontWeight: 300,
                  color: "#C8A97E",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#C8A97E",
                    marginBottom: 6,
                  }}>
                    {item.guest}
                  </div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 20,
                    fontWeight: 400,
                    color: "#1A1A1A",
                    lineHeight: 1.3,
                  }}>
                    {item.title}
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="10" cy="10" r="9" stroke="#C8A97E" strokeWidth="1"/>
                  <polygon points="8,7 14,10 8,13" fill="#C8A97E"/>
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .podcast-grid {
          grid-template-columns: 1fr 2fr;
        }
        @media (max-width: 768px) {
          .podcast-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
