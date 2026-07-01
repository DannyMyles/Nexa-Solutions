import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NexaGen Solutions Limited | ERPNext Implementation Partner in Kenya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top teal accent bar */}
        <div style={{ background: "#2F966E", height: "8px", width: "100%", display: "flex" }} />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "56px 80px",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          {/* Left: brand + headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px", flex: 1 }}>
            {/* Logo mark + name */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
              <div
                style={{
                  background: "#2F966E",
                  borderRadius: "14px",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "28px",
                  fontWeight: 800,
                }}
              >
                N
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "22px", fontWeight: 700, color: "#111827", lineHeight: 1 }}>
                  NexaGen Solutions
                </span>
                <span style={{ fontSize: "13px", color: "#9CA3AF" }}>nexagensolutions.com</span>
              </div>
            </div>

            {/* Main headline */}
            <div style={{ fontSize: "54px", fontWeight: 800, color: "#111827", lineHeight: 1.1, display: "flex" }}>
              ERPNext Implementation
            </div>
            <div style={{ fontSize: "54px", fontWeight: 800, color: "#2F966E", lineHeight: 1.1, display: "flex" }}>
              Partner in Kenya
            </div>

            {/* Services pills */}
            <div style={{ display: "flex", gap: "10px", marginTop: "24px", flexWrap: "wrap" }}>
              {["Accounting", "HR & Payroll", "M-Pesa", "KRA eTIMS", "Full ERP"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(47,150,110,0.08)",
                    border: "1px solid rgba(47,150,110,0.2)",
                    borderRadius: "999px",
                    padding: "6px 14px",
                    fontSize: "14px",
                    color: "#2F966E",
                    fontWeight: 600,
                    display: "flex",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: decorative circles */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "rgba(47,150,110,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "148px",
                  height: "148px",
                  borderRadius: "50%",
                  background: "rgba(47,150,110,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "96px",
                    height: "96px",
                    borderRadius: "50%",
                    background: "#2F966E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "42px",
                    fontWeight: 800,
                  }}
                >
                  N
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            background: "#F9FAFB",
            borderTop: "1px solid #E5E7EB",
            padding: "18px 80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "15px", color: "#6B7280" }}>
            Nairobi, Kenya · East Africa
          </span>
          <span style={{ fontSize: "15px", color: "#2F966E", fontWeight: 600 }}>
            nexagensolutions.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
