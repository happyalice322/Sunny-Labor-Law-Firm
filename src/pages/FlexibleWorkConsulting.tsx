import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ShieldAlert, Scale, Search, PenTool, BarChart3, Users } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { SEO } from "../components/SEO";

const solution2Bg = "/images/flexible-work.jpg";

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

export const FlexibleWorkConsulting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-primary/20">
      <SEO 
        title="유연근무제 도입 컨설팅"
        description="시차출퇴근제, 재택근무제 등 우리 조직에 꼭 맞는 유연근무제 도입을 통해 업무 효율성과 직원 만족도를 높입니다."
        keywords="유연근무제, 재택근무, 시차출퇴근, 노무컨설팅, 인사자문, 노가영노무사"
      />
      <Navbar />

      {/* Section 1: Hero & Hooking */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={solution2Bg} 
            alt="유연근무제도 도입 컨설팅"
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
              주 4.5일제(주 4일제) 시대 <br />
              조직의 <span className="text-sky-300">건강한 유연함</span>을 설계합니다.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Market Trend & Problem */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              변화하는 업무 환경, 유연근무제 도입의 필요성
            </h2>
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-2xl font-bold text-lg mb-4">
              "조직의 경쟁력은 건강한 유연함에서 시작됩니다"
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary mb-2">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">변화하는 일의 기준, 주 4.5일제</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                일과 삶의 균형을 중시하는 정책 방향에 따라 많은 기업이 주 4.5일제나 다양한 유연근무 도입을 검토하고 있습니다. 이는 단순한 유행이 아닌, 우수한 인재와 함께 성장하기 위한 시대적 흐름입니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary mb-2">
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">보이지 않는 리스크의 관리</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                우리 기업의 직무 특성을 충분히 고려하지 않은 채 제도를 도입할 경우, 의도치 않은 연장근로 수당 발생이나 근로시간 산정의 어려움으로 인해 노사 간의 오해가 생길 수 있습니다.
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
                <Scale size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">법적 절차 준수의 필요성</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                선택적 근로시간제나 탄력적 근로시간제와 같은 유연근무제를 안정적으로 운영하기 위해서는 근로자대표와의 서면 합의 등 법에서 정한 요건을 꼼꼼히 갖추어야 합니다. 전문가의 진단은 이러한 절차적 정당성을 확보하는 가장 확실한 방법입니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: The Malgeun Solution */}
      <section className="py-24 px-6 bg-[#90caf9] text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">조직 구성원의 니즈를 반영한 최적의 유연근무제 설계</h2>
            <div className="inline-block px-6 py-3 bg-white/40 border border-white/50 rounded-2xl font-bold text-lg text-slate-900 backdrop-blur-sm">
              규제를 따르는 것을 넘어, 조직의 활력을 높이는 '맞춤형 유연근무'를 제안합니다.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                미래를 위한 선제적인 준비
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                변화된 환경에 맞추어 제도를 미리 정비하는 것은 경영의 불확실성을 제거하는 가장 지혜로운 투자입니다. 노동법률사무소 맑은은 기업이 변화의 흐름을 주도하며 안정적으로 성장할 수 있는 기반을 만들어 드립니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                현장의 목소리를 담은 설계
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                기업 HR 실무와 근로자로서 유연근무를 경험해본 통찰을 바탕으로, 서류상의 규정을 넘어 실제 현장에서 구성원들이 만족하며 일할 수 있는 살아있는 제도를 설계합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Detailed Process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">노동법률사무소 맑은이 제시하는 컨설팅 프로세스</h2>
            <div className="w-12 h-1.5 bg-brand-primary rounded-full mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative h-full hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                <Search size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Phase 01: 계획 (Plan)</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">우리 조직에 필요한 방향 설정</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                경영진의 철학과 구성원의 요구사항을 분석하고, <br /> 심층적인 도입 방향을 설정합니다.
              </p>
              
              <div className="flex flex-col gap-3 w-full text-left">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-brand-primary" /> 운영 Needs 파악
                  </h4>
                  <p className="text-xs text-slate-600">경영진의 철학과 구성원의 요구사항 다각도 청취</p>
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
              className="group flex flex-col items-center text-center bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative h-full hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                <BarChart3 size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Phase 02: 진단 (Diagnosis)</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">근로시간 운영 현황 정밀 점검</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                서면 자료와 실태 데이터를 분석하고 핵심 관계자와의 인터뷰를 통해 애로사항을 파악합니다.
              </p>

              <div className="flex flex-col gap-3 w-full text-left">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-brand-primary" /> 기초 서면 분석
                  </h4>
                  <p className="text-xs text-slate-600">근로계약서, 취업규칙 등 기존 규정의 적정성 검토</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-brand-primary" /> 근로실태 데이터 분석
                  </h4>
                  <p className="text-xs text-slate-600">부서/직종별 실제 근무 패턴 및 관리 시스템 운영 현황 정밀 분석</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-brand-primary" /> 핵심 관계자 인터뷰
                  </h4>
                  <p className="text-xs text-slate-600">제도 도입 시 예상되는 애로사항 사전 파악</p>
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
              className="group flex flex-col items-center text-center bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative h-full hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                <PenTool size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Phase 03: 설계 (Design)</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">최적의 유연근무 제도 도출, 적법 도입</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">조직 특성에 맞는 유연근무안을 설계하고 제도 운영을 위한 제반 서류와 가이드라인을 확립합니다.</p>
              
              <div className="flex flex-col gap-3 w-full text-left">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-brand-primary" /> 맞춤 모델 도출
                  </h4>
                  <p className="text-xs text-slate-600">시차출퇴근제 등 조직 특성에 최적화된 유연근무안 제시</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-brand-primary" /> 법적 서식 지원
                  </h4>
                  <p className="text-xs text-slate-600">근로자대표 서면 합의서, 취업규칙 개정안 등 작성</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-brand-primary" /> 관리 기준 정립
                  </h4>
                  <p className="text-xs text-slate-600">임금 산정 기준 및 근로시간 관리 가이드 마련</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <ContactForm 
        title="우리 조직에 꼭 맞는 유연근무제 도입, 노동법률사무소 맑은과 함께 시작하세요." 
        defaultInquiryType="유연근무제도 도입 컨설팅"
        defaultClientType="company"
      />

      <Footer />
    </div>
  );
};
