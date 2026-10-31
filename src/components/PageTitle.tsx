import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../functions/siteConfig";

export default function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      "/": "Home",
      "/work": "My Works",
      "/contact": "Contact",
      "/privacy-policy": "Privacy Policy",
    };

    const pageTitle = pageTitles[location.pathname] ?? "";

    document.title = pageTitle
      ? `${pageTitle} | ${siteConfig.title}`
      : siteConfig.title;
  }, [location.pathname]);

  return null;
}