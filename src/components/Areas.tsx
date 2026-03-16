"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Areas() {
  const t = useTranslations("areas");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const areas = t.raw("list") as string[];

  return (
    <section ref={ref} className="section-pad" style={{ background: "#1A1A1A", position: "relative", overflow: "hidden" }}>
      {/* Decorative gold element */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 300,
        height: 300,
        background: "radial-gradient(circle, rgba(200,169,126,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-qca">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 64 }}
        >
          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C8A97E",
            marginBottom: 16,
          }}>
            {locale === "pt" ? "Expertise" : "Practice Areas"}
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 300,
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
          }}>
            {t("heading")}
          </h2>
        </motion.div>

        {/* Areas list */}
        <div>
          {areas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={`/${locale}/areas`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "22px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  const heading = e.currentTarget.querySelector(".area-name") as HTMLElement;
                  const arrow = e.currentTarget.querySelector(".area-arrow") as HTMLElement;
                  if (heading) heading.style.color = "#C8A97E";
                  if (arrow) { arrow.style.opacity = "1"; arrow.style.transform = "translateX(6px)"; }
                  e.currentTarget.style.paddingLeft = "8px";
                }}
                onMouseLeave={(e) => {
                  const heading = e.currentTarget.querySelector(".area-name") as HTMLElement;
                  const arrow = e.currentTarget.querySelector(".area-arrow") as HTMLElement;
                  if (heading) heading.style.color = "#FFFFFF";
                  if (arrow) { arrow.style.opacity = "0.3"; arrow.style.transform = "translateX(0)"; }
                  e.currentTarget.style.paddingLeft = "0px";
                }}
              >
                <span
                  className="area-name"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    color: "#FFFFFF",
                    transition: "color 0.25s",
                  }}
                >
                  {area}
                </span>
                <span
                  className="area-arrow"
                  style={{
                    color: "#C8A97E",
                    fontSize: 20,
                    opacity: 0.3,
                    transition: "all 0.25s",
                  }}
                >
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginTop: 48 }}
        >
          <Link
            href={`/${locale}/areas`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C8A97E",
              textDecoration: "none",
              border: "1px solid rgba(200,169,126,0.4)",
              padding: "14px 28px",
              borderRadius: 2,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(200,169,126,0.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            {t("cta")} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
