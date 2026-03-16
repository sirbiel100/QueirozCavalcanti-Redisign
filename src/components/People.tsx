"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface Person {
  name: string;
  role: string;
}

export default function People() {
  const t = useTranslations("people");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const list = t.raw("list") as Person[];

  return (
    <section ref={ref} className="section-pad" style={{ background: "#FFFFFF" }}>
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
              {locale === "pt" ? "Equipe" : "Team"}
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
            href={`/${locale}/pessoas`}
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

        {/* People grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 24,
        }}>
          {list.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector(".person-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector(".person-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "0";
              }}
            >
              {/* Photo placeholder */}
              <div style={{
                position: "relative",
                aspectRatio: "3/4",
                background: "#EEEDE8",
                borderRadius: 4,
                overflow: "hidden",
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 8,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#AAAAAA",
                  textAlign: "center",
                  padding: "0 12px",
                }}>
                  Photo<br/>300×400
                </span>
                <div
                  className="person-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(200,169,126,0.15)",
                    opacity: 0,
                    transition: "opacity 0.25s",
                  }}
                />
              </div>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 17,
                fontWeight: 400,
                color: "#1A1A1A",
                lineHeight: 1.2,
                marginBottom: 4,
              }}>
                {person.name}
              </div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#C8A97E",
              }}>
                {person.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
