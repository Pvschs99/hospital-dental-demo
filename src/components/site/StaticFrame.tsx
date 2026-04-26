/**
 * Renders a static HTML page (from /public) inside a full-viewport iframe.
 * The Lovable preview shows the pure HTML/CSS site.
 */
export function StaticFrame({ src, title }: { src: string; title: string }) {
  return (
    <iframe
      src={src}
      title={title}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
        margin: 0,
        padding: 0,
        display: "block",
        background: "#fff",
      }}
    />
  );
}
