import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export const SEO = ({
  title = "노동법률사무소 맑은 | 노가영 공인노무사 - 현장 중심 인사노무 솔루션",
  description = "대기업 HR 실무 경험을 바탕으로 한 현장 중심의 고객 맞춤형 인사노무 솔루션을 제공하는 노동법률사무소 맑은입니다. 프리랜서 진단, 유연근무제 도입, 고객 중심 인사 노무 솔루션 전문.",
  keywords = "노동법률사무소 맑은, 노가영 공인노무사, 노가영 노무사, 공인노무사 노가영, 노동법률사무소, 노무사 추천, 인사자문, 직장내괴롭힘, 유연근무제, 노무컨설팅",
  ogTitle,
  ogDescription,
  ogType = "website",
  canonical = "https://sunny-labor.com"
}: SEOProps & { canonical?: string }) => {
  // Automatically enrich title for max SEO visibility
  let fullTitle = "";
  if (title === "노동법률사무소 맑은 | 노가영 공인노무사 - 현장 중심 인사노무 솔루션") {
    fullTitle = title;
  } else {
    fullTitle = title.includes("노동법률사무소 맑은")
      ? (title.includes("노가영") ? title : `${title} | 노가영 공인노무사`)
      : `${title} | 노동법률사무소 맑은 · 노가영 공인노무사`;
  }

  // Automatically merge and deduplicate keywords to guarantee primary targets are indexed on every single sub-page
  const baseKeywords = ["노동법률사무소 맑은", "노가영 공인노무사", "노가영 노무사", "공인노무사 노가영", "노동법률사무소", "노무사 추천", "인사자문"];
  const pageKeywords = keywords ? keywords.split(",").map(k => k.trim()).filter(Boolean) : [];
  const mergedKeywords = Array.from(new Set([...pageKeywords, ...baseKeywords])).join(", ");

  // Ensure description has brand context without being spammy
  const brandSuffix = " | 노동법률사무소 맑은 - 대표 노가영 공인노무사";
  const enrichedDescription = description.includes("노동법률사무소 맑은")
    ? description
    : `${description}${brandSuffix}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={enrichedDescription} />
      <meta name="keywords" content={mergedKeywords} />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || enrichedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content="/src/assets/images/logo_sunny_labor_1779178911264.png" />
      <meta property="og:site_name" content="노동법률사무소 맑은" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || enrichedDescription} />
      <meta name="twitter:image" content="/src/assets/images/logo_sunny_labor_1779178911264.png" />

      {/* Naver Specific */}
      <meta name="naver-site-verification" content="" />
    </Helmet>
  );
};
