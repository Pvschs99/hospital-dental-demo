import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-soft px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-medium text-deep">404</h1>
        <h2 className="mt-4 font-display text-2xl text-deep">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-deep text-deep-foreground px-6 py-3 text-sm font-medium hover:shadow-glow transition-smooth"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lumière Dental Care — Premium Dentistry" },
      { name: "description", content: "Premium dental clinic offering gentle, modern care — implants, aligners, cosmetic dentistry and more." },
      { name: "author", content: "Lumière Dental" },
      { property: "og:title", content: "Incisors Dental Care — Premium Dentistry" },
      { property: "og:description", content: "Premium dental clinic offering gentle, modern care — implants, aligners, cosmetic dentistry and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Lumière Dental Care — Premium Dentistry" },
      { name: "twitter:description", content: "Premium dental clinic offering gentle, modern care — implants, aligners, cosmetic dentistry and more." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f8964a67-9ace-4699-b800-b176e04bf2d4/id-preview-3be7024a--0bdf2460-5a83-4a9d-bce8-8226612e60f3.lovable.app-1777206940174.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f8964a67-9ace-4699-b800-b176e04bf2d4/id-preview-3be7024a--0bdf2460-5a83-4a9d-bce8-8226612e60f3.lovable.app-1777206940174.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  // Static HTML/CSS site is served from /public — each route renders an iframe
  // pointing to the matching .html file. No React chrome around it.
  return <Outlet />;
}
