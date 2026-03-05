"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { i18n, type Locale } from "../../../i18n-config";

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState<Locale>(
    i18n.defaultLocale
  );

  useEffect(() => {
    const segments = pathname?.split("/") || [];
    const urlLocale = segments[1] as Locale;
    if (i18n.locales.includes(urlLocale)) {
      setCurrentLocale(urlLocale);
    }
  }, [pathname]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale;
    setCurrentLocale(newLocale);

    const segments = pathname?.split("/") || [];
    if (i18n.locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/") || `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <select
      value={currentLocale}
      onChange={handleChange}
      className="p-2 border border-transparent rounded-full focus:ring-1 focus:ring-[--lima] focus:outline-none text-black "
    >
      {i18n.locales.map((locale) => (
        <option
          key={locale}
          value={locale}
          className="placeholder-black text-black"
        >
          {locale === "pt" ? "PT" : "EN"}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
