import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ShieldAlert, Scale, Search, PenTool, BarChart3, Users } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { SEO } from "../components/SEO";

const solution1Bg = "/images/employment-consulting.jpg";

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

export const FreelancerConsulting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-primary/20">
      <SEO 
        title="프리랜서 고용형태 적법 진단 컨설팅"
        description="위장 프리랜서 리스크를 사전에 진단하고, 적법한 고용 형태와 계약 구조를 설계하여 노동법적 분쟁을 예방합니다."
        keywords="프리랜서, 고용형태진단, 노동자성분별, 인사컨설팅, 노무사, 노가영노무사"
      />
      <Navbar />

      {/* Section 1: Hero & Hooking */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={solution1Bg} 
            alt="프리랜서 컨설팅"
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
              불확실한 고용 리스크를 넘어, <br className="hidden md:block" />
              <span className="text-sky-300">기업의 성장을 뒷받침하는 단단한 인사 원칙</span>을 세웁니다.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Market Trend & Problem */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              변화하는 노동법 환경과 기업의 과제
            </h2>
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-2xl font-bold text-lg mb-4">
              입증의 무게가 기업으로 옮겨오고 있습니다
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
                <Scale size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">노동자 추정제 도입 논의와 입증 책임의 변화</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                현재 국회에서는 근로기준법상 '근로자 추정제' 도입이 심도 있게 논의되고 있습니다. 법안이 시행되면 분쟁 발생 시 근로자가 본인의 신분을 증명하던 기존 방식과 달리, 기업이 해당 인력이 '근로자가 아님'을 직접 입증해야 합니다. 미리 대비하지 않은 기업에는 큰 부담이 될 수밖에 없습니다.
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
                <Search size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">고용노동부의 '가짜 3.3' 집중 점검</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                정부는 실질적으로는 근로자임에도 세무상 프리랜서(3.3%)로 위장 고용하는 관행을 근절하기 위해 근로감독을 대폭 강화하고 있습니다. 재직자 익명 신고센터 운영 등을 통해 현장의 실태를 예리하게 파악하고 있습니다.
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
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">계약의 제목보다 중요한 '실질'</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                용역 계약서나 3.3% 원천징수라는 형식이 법적 안전판이 되어주지는 않습니다. 실질적인 지휘·감독이 존재하는 것으로 판단될 경우, 기업은 퇴직금, 각종 수당 소급분 지급은 물론 4대 보험료 추징과 형사 처벌 리스크까지 고스란히 안게 됩니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: The Malgeun Solution */}
      <section className="py-24 px-6 bg-[#90caf9] text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">지속 가능한 성장을 위한 정공법</h2>
            <div className="inline-block px-6 py-3 bg-white/40 border border-white/50 rounded-2xl font-bold text-lg text-slate-900 backdrop-blur-sm">
              단기적인 방어는 기업의 성장에는 도움이 되지 않습니다
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
                악순환 끊어내기
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                근로자성을 숨기기 위해 계약서 형식만 바꾸고 실질이 바뀌지 않는 방식은 아무것도 달라지는 것이 없습니다. 이는 결국 예기치 못한 시점에 법적 분쟁으로 돌아오는 악순환을 만듭니다.
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
                비즈니스 모델에 맞는 '적법한 설계'
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                노동법률사무소 맑은은 HR 실무경험을 바탕으로 기업의 운영 구조를 입체적으로 분석합니다. 단순히 법 조문만 읊는 것이 아니라, 기업의 사업 특성에 가장 적합하면서도 적법한 고용 형태가 무엇인지 함께 고민하고 답을 찾아드립니다.
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
                <BarChart3 size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Step 01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">기업 사업 구조 및 인력 현황 분석</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                기업의 수익 구조와 업무 프로세스를 철저히 분석합니다. 어떤 지점에서 인적 자원이 투입되고, 협업이 어떤 방식으로 일어나는지 경영진의 관점에서 파악합니다.
              </p>
              
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
                <PenTool size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Step 02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">실무 데이터 기반 적법성 정밀 진단</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                계약서 검토는 기본입니다. 실제 업무 지시 채널(메신저, 이메일), 근태 관리 실태, 비품 및 장비 제공 현황 등 실무 데이터를 바탕으로 근로자성 인정 위험도를 정밀하게 점검합니다.
              </p>
              
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
                <Users size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Step 03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">맞춤형 거버넌스 수립</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">진단 결과에 따라 각 기업 상황에 최적화된 가이드를 제공합니다.</p>
              
              <div className="flex flex-col gap-3 w-full text-left">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-brand-primary" /> 전환
                  </h4>
                  <p className="text-xs text-slate-600">근로자 인정 불가피 시 체계 및 임금 설계</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-brand-primary" /> 독립성 강화
                  </h4>
                  <p className="text-xs text-slate-600">프리랜서 구조 유지 시 업무 프로세스 재설계</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <ContactForm 
        title={
          <>
            경영의 불확실성을 확신으로 바꾸고 싶다면, <br />
            지금 노동법률사무소 맑은과 상의하세요.
          </>
        } 
        defaultInquiryType="프리랜서 고용형태 적법 진단 컨설팅"
        defaultClientType="company"
      />

      <Footer />
    </div>
  );
};
