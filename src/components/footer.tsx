import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex h-10 w-full items-center justify-center border-t border-border text-xs text-muted-foreground">
      <Link
        to="https://github.com/castor12m"
        target="_blank"
        className="hover:text-foreground transition-colors"
      >
        castor12m
      </Link>
      <span className="mx-2">·</span>
      <span>NARA SPACE</span>
    </footer>
  );
}
