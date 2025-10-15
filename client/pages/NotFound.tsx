import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ShieldAlert } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center bg-gradient-to-b from-white via-secondary/40 to-white px-4 py-16">
      <div className="mx-auto w-full max-w-lg rounded-[2.5rem] bg-white p-10 text-center shadow-2xl shadow-primary/10 ring-1 ring-border/60">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ShieldAlert className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-display text-4xl text-foreground">Page Not Found</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The story you were looking for has moved or no longer exists. Continue exploring our
          wellness insights and discover the latest on restorative sleep below.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary/90"
        >
          <ArrowLeft className="h-5 w-5" />
          Return to the feature
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
