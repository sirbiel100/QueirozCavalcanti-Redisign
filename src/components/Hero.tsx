"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";

const awards = ["Legal 500", "Chambers", "Leaders League", "Latin Lawyer"];

export default function Hero() {
  const t = useTranslations("hero");
  const at = useTranslations("about");
  const locale = useLocale();

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      overflow: "hidden",
      background: "#1A1A1A",
    }}>
      {/* Background image placeholder */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(120deg, #1A1A1A 0%, #2A2A2A 40%, #1f2d40 100%)",
      }} />

      {/* Subtle grain overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        opacity: 0.4,
        pointerEvents: "none",
      }} />

      {/* Image placeholder — replace with next/image */}
      <div
        aria-label="[Hero background — full-bleed office/team photo, 1920×1080. Replace with <Image> from next/image]"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "55%",
          height: "100%",
          background: "linear-gradient(to left, rgba(42,60,91,0.35), transparent)",
          borderLeft: "1px dashed rgba(200,169,126,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <span style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(200,169,126,0.2)",
          writingMode: "vertical-rl",
        }}>
          Hero Image — 1920 × 1080
        </span>
      </div>

      {/* Animated gold vertical accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.0, 0.0, 0.2, 1] }}
        style={{
          position: "absolute",
          left: "calc(50% - 600px)",
          top: 80,
          width: 1,
          height: 120,
          background: "linear-gradient(to bottom, transparent, #C8A97E, transparent)",
          transformOrigin: "top",
          opacity: 0.6,
        }}
      />

      {/* Animated gold horizontal rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.0, ease: [0.0, 0.0, 0.2, 1] }}
        style={{
          position: "absolute",
          top: "42%",
          right: 0,
          width: "35vw",
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(200,169,126,0.4))",
          transformOrigin: "right",
        }}
      />

      <div className="container-qca" style={{ position: "relative", zIndex: 2, paddingBottom: 80, paddingTop: 160 }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.25em",
            color: "#C8A97E",
            textTransform: "uppercase",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span style={{ display: "block", width: 32, height: 1, background: "#C8A97E", opacity: 0.6 }} />
          Queiroz Cavalcanti Advocacia
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.0, 0.0, 0.2, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(52px, 8.5vw, 108px)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
            color: "#FFFFFF",
            maxWidth: 760,
            marginBottom: 0,
          }}
        >
          {t("tagline")}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          style={{
            width: 64,
            height: 1,
            background: "#C8A97E",
            margin: "40px 0",
            transformOrigin: "left",
          }}
        />

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 520,
            marginBottom: 48,
          }}
        >
          {at("body")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 80 }}
        >
          <a
            href="https://www.qca.adv.br/wp-content/uploads/2022/12/Manifesto-QCA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#1A1A1A",
              background: "#C8A97E",
              padding: "15px 28px",
              borderRadius: 2,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#b8976c"; e.currentTarget.style.letterSpacing = "0.18em"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#C8A97E"; e.currentTarget.style.letterSpacing = "0.14em"; }}
          >
            {t("manifesto")} →
          </a>
          <Link
            href={`/${locale}/performa`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "15px 28px",
              borderRadius: 2,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C8A97E"; e.currentTarget.style.color = "#C8A97E"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#FFFFFF"; }}
          >
            {t("performa")}
          </Link>
        </motion.div>

        {/* Award logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap" }}
        >
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 8,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginRight: 28,
            whiteSpace: "nowrap",
          }}>
            {locale === "pt" ? "Reconhecido por" : "Recognised by"}
          </span>
          {awards.map((award, i) => (
            <motion.div
              key={award}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 + i * 0.1, duration: 0.5 }}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "rgba(200,169,126,0.55)",
                borderLeft: "1px solid rgba(200,169,126,0.15)",
                paddingLeft: 20,
                marginLeft: 20,
                whiteSpace: "nowrap",
                transition: "color 0.2s",
                cursor: "default",
              }}
              whileHover={{ color: "rgba(200,169,126,1)" } as never}
            >
              {award}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: 32,
          right: 32,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, transparent, rgba(200,169,126,0.6))",
          }}
        />
      </motion.div>

      {/* Bottom gradient */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        background: "linear-gradient(to top, rgba(26,26,26,0.5), transparent)",
        pointerEvents: "none",
      }} />
    </section>
  );
}
