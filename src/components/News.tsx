"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface NewsItem {
  category: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function News() {
  const t = useTranslations("news");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const items = t.raw("items") as NewsItem[];

  return (
    <section ref={ref} className="section-pad" style={{ background: "#FFFFFF" }}>
      <div className="container-qca">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 16 }}
        >
          <div>
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C8A97E",
              marginBottom: 12,
            }}>
              {locale === "pt" ? "Publicações" : "Latest"}
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 300,
              color: "#1A1A1A",
              letterSpacing: "-0.01em",
            }}>
              {t("heading")}
            </h2>
          </div>
          <Link
            href={`/${locale}/noticias`}
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
              transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A97E"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#1A1A1A"; }}
          >
            {t("cta")} →
          </Link>
        </motion.div>

        {/* News grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 32,
        }}>
          {items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector(".news-img") as HTMLElement;
                if (img) img.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector(".news-img") as HTMLElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* Image placeholder */}
              <div style={{
                aspectRatio: "16/9",
                background: "#EEEDE8",
                borderRadius: 4,
                overflow: "hidden",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <div
                  className="news-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.4s ease",
                  }}
                >
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 9,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#AAAAAA",
                  }}>
                    News Image — 640×360
                  </span>
                </div>
              </div>

              {/* Category badge */}
              <span style={{
                display: "inline-block",
                alignSelf: "flex-start",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#8B6914",
                background: "#F5EDD8",
                border: "0.5px solid #C8A97E",
                borderRadius: 2,
                padding: "3px 8px",
                marginBottom: 12,
              }}>
                {item.category}
              </span>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#1A1A1A",
                marginBottom: 10,
              }}>
                {item.title}
              </h3>

              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13,
                lineHeight: 1.7,
                color: "#555555",
                marginBottom: 12,
                flexGrow: 1,
              }}>
                {item.excerpt}
              </p>

              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                color: "#AAAAAA",
                letterSpacing: "0.05em",
              }}>
                {item.date}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
