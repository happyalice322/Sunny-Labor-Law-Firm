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
  title = "노동법률사무소 맑은 | 현장 중심 고객 맞춤형 인사노무 솔루션",
  description = "대기업 HR 실무 경험을 바탕으로 한 현장 중심의 고객 맞춤형 인사노무 솔루션을 제공하는 노동법률사무소 맑은입니다. 프리랜서 진단, 유연근무제 도입, 고객 중심 인사 노무 솔루션 전문.",
  keywords = "노동법률사무소, 노무사, 인사자문, 직장내괴롭힘, 유연근무제, 노무컨설팅, 노가영노무사",
  ogTitle,
  ogDescription,
  ogType = "website",
  canonical = "https://sunny-labor.com"
}: SEOProps & { canonical?: string }) => {
  const fullTitle = title.includes("노동법률사무소 맑은") ? title : `${title} | 노동법률사무소 맑은`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content="/src/assets/images/logo_sunny_labor_1779178911264.png" />
      <meta property="og:site_name" content="노동법률사무소 맑은" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content="/src/assets/images/logo_sunny_labor_1779178911264.png" />

      {/* Naver Specific */}
      <meta name="naver-site-verification" content="" />
    </Helmet>
  );
};
