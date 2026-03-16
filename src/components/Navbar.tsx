"use client";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLocale = locale === "pt" ? "en" : "pt";
  const otherLocalePath = locale === "pt" ? "/en" : "/pt";

  const navLinks = [
    { label: t("about"), href: `/${locale}/sobre` },
    { label: t("people"), href: `/${locale}/pessoas` },
    { label: t("areas"), href: `/${locale}/areas` },
    { label: t("diversity"), href: `/${locale}/diversidade` },
    { label: t("careers"), href: "https://qca.gupy.io/", external: true },
    { label: t("contact"), href: `/${locale}/contato` },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,1)",
        borderBottom: scrolled ? "1px solid #EEEDE8" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
        height: 72,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container-qca" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href={`/${locale}`} style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 22,
              fontWeight: 300,
              letterSpacing: "0.12em",
              color: "#1A1A1A",
              textTransform: "uppercase",
            }}>
              Queiroz Cavalcanti
            </span>
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              fontWeight: 500,
              letterSpacing: "0.25em",
              color: "#C8A97E",
              textTransform: "uppercase",
              marginTop: 2,
            }}>
              Advocacia
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "#1A1A1A",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A97E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "#1A1A1A",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A97E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
              >
                {link.label}
              </Link>
            )
          ))}
          {/* Lang toggle */}
          <Link
            href={otherLocalePath}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#C8A97E",
              textDecoration: "none",
              textTransform: "uppercase",
              border: "1px solid #C8A97E",
              padding: "4px 10px",
              borderRadius: 2,
              transition: "all 0.2s",
            }}
          >
            {otherLocale.toUpperCase()}
          </Link>
        </nav>

        {/* Mobile: lang + burger */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="show-mobile">
          <Link
            href={otherLocalePath}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#C8A97E",
              textDecoration: "none",
              textTransform: "uppercase",
              border: "1px solid #C8A97E",
              padding: "3px 8px",
              borderRadius: 2,
            }}
          >
            {otherLocale.toUpperCase()}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
            aria-label="Menu"
          >
            <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ display: "block", height: 1.5, background: "#1A1A1A", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
              <span style={{ display: "block", height: 1.5, background: "#1A1A1A", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", height: 1.5, background: "#1A1A1A", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              top: 72,
              left: 0,
              right: 0,
              background: "#fff",
              borderTop: "1px solid #EEEDE8",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    color: "#1A1A1A",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    color: "#1A1A1A",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
