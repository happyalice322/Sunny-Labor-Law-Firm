import React, { useState, useEffect } from "react";
import profilePic from "../assets/images/regenerated_image_1778827820473.jpg";
import serviceImage1 from "../assets/images/regenerated_image_1778833214016.jpg";
import serviceImage2 from "../assets/images/regenerated_image_1778833323660.jpg";
import serviceImage3 from "../assets/images/regenerated_image_1778833517265.jpg";
import serviceImage4 from "../assets/images/regenerated_image_1778833619093.png";
import serviceImage5 from "../assets/images/regenerated_image_1778834480025.jpg";
import serviceImage6 from "../assets/images/regenerated_image_1778834486759.jpg";
import serviceImage7 from "../assets/images/regenerated_image_1778834496719.jpg";
import serviceImage8 from "../assets/images/regenerated_image_1778835108164.jpg";
import serviceImage9 from "../assets/images/regenerated_image_1778835434752.jpg";
import serviceImage10 from "../assets/images/regenerated_image_1778835678711.jpg";
import headImage from "../assets/images/images/head1.jpg";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { SEO } from "../components/SEO";

const heroBg = headImage;

// Corporate Service Images
const corpHarassmentBg = serviceImage1;
const corpEducationBg = serviceImage8;
const corpRulesBg = serviceImage5;
const corpAdvisoryBg = serviceImage9;
const corpFlexibleBg = serviceImage7;
const corpFreelancerBg = serviceImage6;

// Worker Service Images
const workerHarassmentBg = serviceImage2;
const workerArrearsBg = serviceImage10;
const workerRemedyBg = serviceImage3;

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  details: string;
  image: string;
  hoveredIndex: number | null;
  setHoveredIndex: (idx: number | null) => void;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  index, 
  title, 
  description, 
  details, 
  image, 
  hoveredIndex, 
  setHoveredIndex,
  link 
}) => {
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  const CardContent = (
    <div className="flex flex-col h-full text-left">
      <div className="relative h-44 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-all duration-700 
            ${isHovered ? "grayscale-0 scale-105" : "grayscale opacity-50"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className={`font-bold transition-all duration-300 text-slate-900 ${isHovered ? "text-xl mb-4" : "text-lg mb-3"}`}>
          {title}
        </h3>
        <p className={`text-slate-600 leading-relaxed transition-all duration-300 ${isHovered ? "text-sm mb-6" : "text-sm line-clamp-2"}`}>
          {description}
        </p>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-6 border-t border-slate-100">
                <div className="text-xs text-slate-500 leading-relaxed mb-6">
                  {details}
                </div>
                <div className="inline-flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-lg font-bold text-xs shadow-lg shadow-brand-primary/20 hover:bg-brand-dark transition-all">
                  자세히 보기 <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Mobile touch indicator */}
        {!isHovered && link && (
          <div className="mt-auto pt-4 md:hidden text-brand-primary font-bold text-xs flex items-center gap-1">
            자세히 보기 <ArrowRight size={12} />
          </div>
        )}
      </div>
    </div>
  );

  const wrapperClass = `relative overflow-hidden rounded-[2rem] transition-all duration-300 bg-white border border-slate-100 shadow-sm
    ${isHovered ? "z-20 shadow-2xl ring-2 ring-brand-primary/20" : "z-10"}
    ${isOtherHovered ? "opacity-40 scale-95 blur-[1px]" : "opacity-100 scale-100"}
    ${link ? "cursor-pointer" : "cursor-default"}
  `;

  return (
    <motion.div 
      layout
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        layout: { duration: 0.3, ease: "easeOut" },
        duration: 0.4
      }}
      viewport={{ once: true }}
      className={wrapperClass}
    >
      {link ? (
        <Link to={link} className="block h-full">
          {CardContent}
        </Link>
      ) : CardContent}
    </motion.div>
  );
};

export const Home: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<"company" | "worker">("company");

  const companyServices = [
    {
      title: "직장 내 괴롭힘·성희롱 조사",
      description: "객관적인 조사로 조직의 안정을 돕고 법적 분쟁에 전문적으로 대응합니다.",
      details: "기업 내 직장 내 괴롭힘 및 성희롱 신고가 발생할 경우, 전문적인 외부 조사를 통해 객관성과 투명성을 확보합니다. 사건의 실체를 파악하고 조직 회복을 위한 구체적인 가이드를 제시합니다.",
      image: corpHarassmentBg,
      link: "/harassment-investigation"
    },
    {
      title: "법정의무교육 등 강의",
      description: "직장 내 성희롱 예방 교육 등 법정의무 교육과 실무 중심 노동법 강의, 저연차 대상 온보딩 교육을 진행합니다.",
      details: "직장 내 성희롱 예방 교육, 괴롭힘 방지 교육 등 법정 의무 교육을 포함하여, 관리자와 실무자를 위한 사례 중심 노동법 강의와 신입사원의 연착륙을 돕는 온보딩 교육을 진행합니다.",
      image: corpEducationBg,
      link: "/education-training"
    },
    {
      title: "취업규칙 및 인사규정 정비",
      description: "최신 법령과 기업의 인사 전략을 반영하여 제반 규정을 제·개정합니다.",
      details: "근로 계약서, 취업규칙, 인사 규정 등 기업 운영의 근간이 되는 서류를 최신 법령에 맞춰 정비합니다. 단순한 서식 작성을 넘어 기업의 특성에 맞는 맞춤형 규정 설계를 지원합니다.",
      image: corpRulesBg,
      link: "/employment-rules-consulting"
    },
    {
      title: "노무 자문",
      description: "인사 노무 실무 중 발생하는 현안에 대하여 즉각적이고 적법한 솔루션을 제공합니다.",
      details: "채용부터 퇴직까지 발생하는 다양한 노무 현안에 대해 상시적인 상담과 자문을 제공합니다. 실무 현장에서 발생할 수 있는 법적 리스크를 실시간으로 차단하고 안전한 인사 관리 가이드 제시를 통해 경영 효율성을 높입니다.",
      image: corpAdvisoryBg,
      link: "/labor-advisory"
    },
    {
      title: "유연근무제도 도입 컨설팅",
      description: "조직의 생산성과 몰입을 높이는 맞춤형 근무 제도를 적법하게 설계합니다.",
      details: "선택적 근로시간제, 재택근무, 시차출퇴근제 등 기업 문화와 생산성을 고려한 유연근무제를 설계하고 취업규칙 변경, 노사서면 합의서 작성 등 적법한 절차로 도입합니다.",
      image: corpFlexibleBg,
      link: "/flexible-work-consulting"
    },
    {
      title: "프리랜서 고용형태 적법 진단 컨설팅",
      description: "프리랜서, 용역 계약의 실질을 점검하여 노무 관리의 적법성을 확보합니다.",
      details: "프리랜서, 용역 계약 등으로 고용된 인원들의 근로기준법상 근로자 여부를 진단하고 조직 특성에 맞춰 적법하게 인력운영을 할 수 있는 방법을 제시합니다.",
      image: corpFreelancerBg,
      link: "/freelancer-consulting"
    }
  ];

  const workerServices = [
    {
      title: "직장 내 괴롭힘 · 성희롱 노동청 진정 등 대리",
      description: "직장 내 괴롭힘 · 성희롱 피해를 입은 근로자에 대한 전문적인 법률 지원을 제공합니다.",
      details: "직장 내 괴롭힘 또는 성희롱 피해를 입은 근로자를 대리하여 노동청 진정 제기부터 조사 동석, 의견서 작성 등 전 과정을 전문적으로 지원합니다.",
      image: workerHarassmentBg,
      link: "/harassment-proxy"
    },
    {
      title: "임금 체불 사건 대리",
      description: "체불된 임금을 지급 받기 위한 법적 절차를 지원합니다.",
      details: "월급여, 퇴직금, 연차미사용수당 등 미지급된 금품에 대해 객관적인 산정 및 노동청 진정 대리를 통해 근로자의 정당한 권리를 확보합니다.",
      image: workerArrearsBg,
      link: "/wage-arrears-support"
    },
    {
      title: "노동위원회 구제사건 대리",
      description: "부당해고, 부당징계 등 노동위원회 구제신청을 대리합니다.",
      details: "정당한 이유 없는 해고, 징계, 전보 등에 대하여 노동위원회 구제신청을 통해 원직 복직 또는 금전 보상을 이끌어냅니다.",
      image: workerRemedyBg,
      link: "/labor-remedy-support"
    }
  ];

  const currentServices = activeCategory === "company" ? companyServices : workerServices;

  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary/20">
      <SEO />
      <Navbar />

      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url("${heroBg}")`,
              backgroundPosition: 'right center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent" />
        </div>

        <div className="section-padding relative z-10 w-full max-w-7xl mx-auto py-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold mb-6 tracking-wider uppercase">
              Labor Law & HR Partnership
            </div>
            <h1 className="heading-lg mb-8 text-slate-900">
              고객의 내일을 <br />
              <span className="text-brand-primary">맑게 비추는</span> <br />
              진심 어린 HR 파트너
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              노동법률사무소 맑은은 정직과 투명을 바탕으로 <br />
              고객이 안심하고 핵심 가치에 집중할 수 있는 환경을 만듭니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/#contact" 
                className="bg-brand-primary hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-brand-primary/30 transition-all flex items-center gap-2 group"
              >
                상담문의
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/#services" 
                className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-bold border border-slate-200 transition-all"
              >
                서비스 영역 보기
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto relative z-10 py-32 px-6">
          <div className="flex flex-col gap-32">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-slate-800"
              >
                <h4 className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-4">Philosophy & Vision</h4>
                <h2 className="heading-md mb-8 text-slate-900 leading-snug">
                  원칙을 지키는 것이 <br className="hidden md:block" />
                  가장 큰 가치를 만드는 길임을 믿습니다.
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    노동법률사무소 맑은은 기업과 근로자가 신뢰하며 성장할 수 있도록, <br className="hidden md:block" /> 가장 정직하고 투명한 길을 안내합니다.
                  </p>
                  <p>
                    원칙을 지키는 것이 경영 리스크를 줄이고 근로자와 기업이 서로 win-win 할 수 있어 <br className="hidden md:block" /> 가장 큰 가치를 만드는 길임을 믿기에, 고객의 미래를 생각하는 긴 호흡으로 소통하겠습니다.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-16 relative"
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-[40rem] h-[40rem] bg-gradient-to-bl from-brand-primary/5 via-brand-primary/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-20 right-20 w-[20rem] h-[20rem] bg-gradient-to-bl from-white/40 via-white/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start text-slate-800">
                <div className="w-64 h-80 md:w-80 md:h-[28rem] flex-shrink-0 rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-white">
                  <img 
                    src={profilePic} 
                    alt="노가영 노무사" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-10">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                      노가영 <span className="text-lg font-medium text-slate-400 ml-4 tracking-wide">대표 공인노무사</span>
                    </h3>
                    <div className="w-20 h-1.5 bg-brand-primary rounded-full" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <h4 className="font-extrabold text-brand-primary text-sm uppercase tracking-widest flex items-center gap-2">
                          <div className="w-2 h-2 bg-brand-primary rounded-full" /> 경력 및 학력
                        </h4>
                        <ul className="text-[15px] text-slate-600 space-y-3.5 leading-relaxed">
                          <li className="flex gap-2"><span>•</span> <span>서강대학교 신문방송학·심리학 학사</span></li>
                          <li className="flex gap-2"><span>•</span> <span>여성노동법률지원센터 직장 내 성희롱 예방 교육 강사 및 전문가 양성과정 수료</span></li>
                          <li className="flex gap-2"><span>•</span> <span>청소년 · 청년 근로권익 보호를 위한 상담 · 권리구제 사업 수행 노무사</span></li>
                          <li className="flex gap-2"><span>•</span> <span>노무법인 에이치 공인노무사</span></li>
                          <li className="flex gap-2"><span>•</span> <span>동화노무법인 공인노무사</span></li>
                          <li className="flex gap-2"><span>•</span> <span>삼양그룹(삼양홀딩스) HRC HRD</span></li>
                          <li className="flex gap-2"><span>•</span> <span>삼양그룹(삼양사) 화학마케팅PU 친환경마케팅팀</span></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <h4 className="font-extrabold text-brand-primary text-sm uppercase tracking-widest flex items-center gap-2">
                          <div className="w-2 h-2 bg-brand-primary rounded-full" /> 주요 프로젝트
                        </h4>
                        <ul className="text-[15px] text-slate-600 space-y-3.5 leading-relaxed">
                          <li className="flex gap-2"><span>•</span> <span>방송업, 외국계 및 공공부문 직장 내 괴롭힘·성희롱 조사 다수</span></li>
                          <li className="flex gap-2"><span>•</span> <span>공공, 광고, 방송 등 기업 성희롱 예방 교육 및 강의 다수</span></li>
                          <li className="flex gap-2"><span>•</span> <span>방송, 게임, 광고, 캐릭터업 등 기업 노무 컨설팅 다수</span></li>
                          <li className="flex gap-2"><span>•</span> <span>근로자성 노동청 사건 및 부당징계·해고 사용자 대리 다수</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 pt-10 border-t border-slate-200">
                    <div className="space-y-4 text-slate-800">
                      <h4 className="font-bold text-lg flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-brand-primary rounded-full" /> 현장 중심 인사 전문가
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed pl-4">
                        3년 이상 기업 HRD팀으로서 교육, 평가 등 인사 실무를 수행한 경험을 바탕으로, 조직 내부의 고충과 인사 운영의 생리를 깊이 이해하는 맞춤형 솔루션을 제안합니다.
                      </p>
                    </div>
                    <div className="space-y-4 text-slate-800">
                      <h4 className="font-bold text-lg flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-brand-primary rounded-full" /> 꼼꼼함과 공감력 바탕 최적 솔루션
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed pl-4">
                        나의 가족, 친구, 회사라는 마음으로 고객의 상황을 공감하고 하나하나 세밀하고 꼼꼼하게 사안을 다룹니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h4 className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-4">Core Services</h4>
            <h2 className="heading-md text-slate-900 mb-10">전문적인 인사노무 솔루션</h2>
            
            {/* Toggle Switches */}
            <div className="inline-flex p-1 bg-slate-100 rounded-2xl mb-12">
              <button 
                onClick={() => setActiveCategory("company")}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeCategory === "company" ? "bg-white text-brand-primary shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                기업 대상
              </button>
              <button 
                onClick={() => setActiveCategory("worker")}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeCategory === "worker" ? "bg-white text-brand-primary shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                근로자 대상
              </button>
            </div>
            
            <div className="w-12 h-1 bg-brand-primary mx-auto opacity-30 rounded-full" />
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          >
            <AnimatePresence mode="popLayout">
              {currentServices.map((service, idx) => (
                <ServiceCard 
                   key={`${activeCategory}-${idx}`}
                   index={idx}
                   title={service.title}
                   description={service.description}
                   details={service.details}
                   image={service.image}
                   link={service.link}
                   hoveredIndex={hoveredIndex}
                   setHoveredIndex={setHoveredIndex}
                />
              ))}
            </AnimatePresence>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className={`bg-brand-primary p-12 rounded-[2.5rem] shadow-xl shadow-brand-primary/20 flex flex-col md:flex-row justify-between items-center gap-8 transition-all duration-500 lg:col-span-3
                ${hoveredIndex !== null ? "opacity-40 scale-95 blur-[1px]" : "opacity-100 scale-100"}
              `}
            >
              <div className="text-white text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold mb-3">지속 가능한 성장을 위해</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                  제공되는 서비스 외에 다양한 인사 노무 솔루션 제공이 가능합니다. <br className="hidden md:block" />
                  당장의 문제 해결을 넘어, 고객의 미래 가치를 함께 만드는 든든한 조력자가 되어드리겠습니다.
                </p>
              </div>
              <a href="/#contact" className="bg-white text-brand-primary px-10 py-4 rounded-xl font-bold text-center hover:bg-brand-light transition-all shadow-lg whitespace-nowrap">
                상세 문의하기
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactForm defaultClientType={activeCategory} />

      <Footer />
    </div>
  );
};
