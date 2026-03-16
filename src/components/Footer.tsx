"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/qcaoficial/" },
  { label: "Facebook", href: "https://www.facebook.com/QueirozCavalcantiAdvocacia" },
  { label: "Youtube", href: "https://www.youtube.com/channel/UCrmigf0TQpPiUsfydMRRHQA" },
  { label: "Spotify", href: "https://open.spotify.com/show/4JKI042kcjnTy66i4gIuRU" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/qcaoficial/" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const st = useTranslations("social");
  const nt = useTranslations("nav");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const cols = [
    {
      heading: locale === "pt" ? "O Escritório" : "The Firm",
      links: [
        { label: nt("about"), href: `/${locale}/sobre` },
        { label: nt("people"), href: `/${locale}/pessoas` },
        { label: nt("diversity"), href: `/${locale}/diversidade` },
        { label: nt("innovation"), href: `/${locale}/inovacao` },
        { label: nt("performa"), href: `/${locale}/performa` },
      ],
    },
    {
      heading: locale === "pt" ? "Publicações" : "Publications",
      links: [
        { label: nt("articles"), href: `/${locale}/artigos` },
        { label: nt("media"), href: `/${locale}/midia` },
        { label: nt("legalTalks"), href: `/${locale}/podcast` },
        { label: nt("ebooks"), href: `/${locale}/ebooks` },
      ],
    },
    {
      heading: locale === "pt" ? "Contato" : "Contact",
      links: [
        { label: nt("contact"), href: `/${locale}/contato` },
        { label: nt("careers"), href: "https://qca.gupy.io/", external: true },
        { label: t("privacy"), href: "https://www.qca.adv.br/aviso-de-privacidade/", external: true },
        { label: t("whistleblower"), href: "http://www.contatoseguro.com.br/qca", external: true },
      ],
    },
  ];

  return (
    <footer ref={ref} style={{ background: "#1A1A1A" }}>
      {/* Social band */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "48px 0",
      }}>
        <div className="container-qca" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(20px, 2.5vw, 28px)",
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
            }}
          >
            {st("heading")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", gap: 20, flexWrap: "wrap" }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A97E"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-qca" style={{ padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }} className="footer-grid">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: 24 }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                fontWeight: 300,
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                textTransform: "uppercase",
                marginBottom: 4,
              }}>
                Queiroz Cavalcanti
              </div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "0.25em",
                color: "#C8A97E",
                textTransform: "uppercase",
              }}>
                Advocacia
              </div>
            </div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 13,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 280,
            }}>
              {locale === "pt"
                ? "Aplicamos o Direito como ferramenta para soluções de negócio."
                : "We apply law as a business solution tool."}
            </p>
          </motion.div>

          {/* Nav columns */}
          {cols.map((col, ci) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (ci + 1) }}
            >
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C8A97E",
                marginBottom: 20,
              }}>
                {col.heading}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((link) => (
                  "external" in link && link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "20px 0",
      }}>
        <div className="container-qca" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.05em",
          }}>
            © {new Date().getFullYear()} Queiroz Cavalcanti Advocacia. {locale === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="https://www.qca.adv.br/aviso-de-privacidade/" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              color: "rgba(255,255,255,0.25)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A97E"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.25)"; }}
            >
              {t("privacy")}
            </a>
            <a href="https://www.qca.adv.br/wp-content/uploads/2025/12/Politica-de-Cookies-QCA-1.pdf" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              color: "rgba(255,255,255,0.25)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A97E"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.25)"; }}
            >
              {t("cookies")}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
