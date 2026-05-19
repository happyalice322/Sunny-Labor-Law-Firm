import { useEffect } from "react";
import solutionBg from "../assets/images/regenerated_image_1778834480025.jpg";
import { motion } from "motion/react";
import { ArrowRight, FileCheck, AlertTriangle, Gavel, LayoutGrid, RefreshCw, ClipboardCheck, MessageSquare, ShieldCheck, Users } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { SEO } from "../components/SEO";

const DrawnCheck = ({ className = "w-7 h-7 text-brand-primary" }: { className?: string }) => (
  <div className="relative flex items-center justify-center shrink-0 w-8 h-8 mr-2">
    <div className="absolute w-5 h-5 border-2 border-inherit rounded-[3px] opacity-70" style={{ borderColor: 'currentColor' }} />
    <svg 
      className={`absolute z-10 -top-1 -right-1 transform rotate-6 ${className}`} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M4 12c1.5 1.5 3.5 3.5 4.5 4.5c2.5 -4 7.5 -10 11 -12" />
    </svg>
  </div>
);

export const EmploymentRulesConsulting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-primary/20">
      <SEO 
        title="취업규칙 및 인사규정 정비 컨설팅"
        description="법 개정 등 변화하는 시대에 맞춘 최적의 인사 규정, 취업규칙 정비를 통해 기업의 법적 리스크를 관리합니다."
        keywords="취업규칙, 인사규정, 취업규칙정비, 노무컨설팅, 인사자문, 노가영노무사"
      />
      <Navbar />

      {/* Section 1: Hero & Hooking */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={solutionBg} 
            alt="취업규칙 인사규정 정비"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/70 mix-blend-multiply" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8 drop-shadow-sm">
              혹시 몇 년 전에 만들어둔 취업규칙을 <br className="hidden md:block" />
              <span className="text-sky-300">아직도 그대로 사용하고 계신가요?</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Market Trend & Problem */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              우리 기업의 '취업규칙', 안녕하십니까?
            </h2>
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-2xl font-bold text-lg mb-4">
              "법개정 등 변화에 맞춰 규정도 변화가 필요합니다"
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-2">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">법령 개정에 따른 규정 업데이트 필요</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                노동법은 매년 빠르게 변화합니다. 모성보호 등 개정된 법령에 맞춰 규정을 최신화 하는 것이 필요합니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-2">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">10인 이상 사업장의 필수 의무</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                상시 근로자 10인 이상임에도 아직 우리 회사만의 취업규칙이 없으신가요? 취업규칙 미작성 및 미신고 시 500만 원 이하의 과태료가 부과될 수 있는 법적 의무 사항입니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-2">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">불명확한 규정이 부르는 갈등</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                현장의 실무와 동떨어진 규정을 그대로 복사해 온 규정은 오히려 노사 간의 오해와 불필요한 비용을 발생시키는 원인이 됩니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: The Malgeun Solution */}
      <section className="py-24 px-6 bg-[#90caf9] text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">적법하고 맞춤형 규정 설계</h2>
            <div className="inline-block px-6 py-3 bg-white/40 border border-white/50 rounded-2xl font-bold text-lg text-slate-900 backdrop-blur-sm">
              최신 법령 반영은 기본이고 우리 기업의 '색깔'과 '특성'에 맞는 살아있는 규정을 만듭니다.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                적법성 확보
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm">
                노동법률 전문가인 공인노무사가 최신 개정 법령과 판례를 꼼꼼히 반영하여, 적법한 규정을 수립해 드립니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                기업 맞춤형 설계
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm">
                업종, 규모, 조직 문화를 고려하여 기업의 사업 운영 방식에 가장 최적화된 인사 규정 체계를 설계합니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                체계적 정비
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm">
                취업규칙, 인사규정, 급여규정 등 여러 규정이 얽혀 있는 경우, 상호 충돌을 방지하고 체계적으로 통합 관리할 수 있는 가이드를 제시합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Detailed Process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">규정정비 진행 절차</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              노동법률사무소 맑은은 서류상의 검토를 넘어, <br />
              현장의 니즈를 반영하는 3단계 정비 프로세스를 수행합니다.
            </p>
            <div className="w-12 h-1.5 bg-brand-primary rounded-full mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative h-full hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                <RefreshCw size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Step 01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">정밀 진단 (Diagnosis)</h3>
              
              <div className="flex flex-col gap-4 w-full text-left">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <ShieldCheck size={16} className="text-brand-primary" /> 현행 규정 적법성 분석
                  </h4>
                  <p className="text-xs text-slate-600">현재 사용 중인 취업규칙이 최신 노동법령을 준수하고 있는지 전수 조사합니다.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <RefreshCw size={16} className="text-brand-primary" /> 규정 간 충돌 여부 분석
                  </h4>
                  <p className="text-xs text-slate-600">인사규정, 복리후생 규정 등 여러 규정 조항 간의 모순이나 충돌이 있는지 분석하여 법적 불확실성을 제거합니다.</p>
                </div>
              </div>
              
              {/* Arrow for Desktop */}
              <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg text-slate-300">
                <ArrowRight size={24} />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative h-full hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                <LayoutGrid size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Step 02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">맞춤 설계 (Design)</h3>
              
              <div className="flex flex-col gap-4 w-full text-left">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <MessageSquare size={16} className="text-brand-primary" /> 기업 니즈 청취
                  </h4>
                  <p className="text-xs text-slate-600">경영진이 지향하는 인사 관리 방향과 현장의 애로사항을 깊이 있게 듣습니다.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <PenTool size={16} className="text-brand-primary" /> 적법한 변경안 제시
                  </h4>
                  <p className="text-xs text-slate-600">기업의 니즈를 법적 테두리 안에서 구현할 수 있는 최적의 규정 개정안을 도출합니다.</p>
                </div>
              </div>
              
              {/* Arrow for Desktop */}
              <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg text-slate-300">
                <ArrowRight size={24} />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative h-full hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                <ClipboardCheck size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Step 03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">제도 안착 (Delivery)</h3>
              
              <div className="flex flex-col gap-4 w-full text-left">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <Users size={16} className="text-brand-primary" /> 적법한 변경 절차 안내
                  </h4>
                  <p className="text-xs text-slate-600">취업규칙 변경 시 필수적인 '근로자 의견 청취' 또는 '불이익 변경 시 동의 절차'를 적법하게 진행할 수 있도록 모든 과정을 가이드해 드립니다.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <FileCheck size={16} className="text-brand-primary" /> 자문
                  </h4>
                  <p className="text-xs text-slate-600">최종 확정된 규정의 고용노동부 신고 업무를 지원하고, 향후 운영 시 유의사항에 대해 전문적인 자문을 제공합니다.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <ContactForm 
        title="우리기업만의 적법한 규정, 노동법률사무소 맑은과 함께하세요" 
        defaultInquiryType="취업규칙 및 인사규정 정비"
        defaultClientType="company"
      />

      <Footer />
    </div>
  );
};

// Add missing imports that were used in Step 2 but not in standard imports if necessary
const PenTool = ({ size, className }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.5 1.5" />
    <path d="M7.5 9.5L9 11" />
  </svg>
);
