"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface Article {
  area: string;
  title: string;
  excerpt: string;
  author: string;
}

export default function Articles() {
  const t = useTranslations("articles");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const items = t.raw("items") as Article[];

  return (
    <section ref={ref} className="section-pad" style={{ background: "#F7F7F5" }}>
      <div className="container-qca">
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
              {locale === "pt" ? "Conhecimento" : "Knowledge"}
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
            href={`/${locale}/artigos`}
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
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A97E"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#1A1A1A"; }}
          >
            {t("cta")} →
          </Link>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {items.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr auto",
                gap: 32,
                alignItems: "center",
                padding: "28px 0",
                borderBottom: "1px solid #EEEDE8",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              className="article-row"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.paddingLeft = "12px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.paddingLeft = "0px";
              }}
            >
              <div>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C8A97E",
                  marginBottom: 4,
                }}>
                  {article.area}
                </div>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 11,
                  color: "#AAAAAA",
                }}>
                  {article.author}
                </div>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 400,
                  color: "#1A1A1A",
                  lineHeight: 1.3,
                  marginBottom: 6,
                }}>
                  {article.title}
                </h3>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  color: "#555555",
                  lineHeight: 1.6,
                }}>
                  {article.excerpt}
                </p>
              </div>
              <span style={{ color: "#C8A97E", fontSize: 18, flexShrink: 0 }}>→</span>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .article-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
