import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Scale, Search, ShieldAlert, MessageCircle, FileText, HeartPulse } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { SEO } from "../components/SEO";

const solution3Bg = "/images/harassment-investigation.jpg";

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

export const HarassmentProxy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-primary/20">
      <SEO 
        title="직장 내 괴롭힘 · 성희롱 노동청 진정 등 대리"
        description="직장 내 괴롭힘 · 성희롱 피해를 입은 근로자의 일상 회복을 위해 전문적인 법률 지원과 노동청 대리를 제공합니다."
        keywords="직장내괴롭힘, 성희롱, 노동청진정, 근로자대리, 노무사, 노가영노무사"
      />
      <Navbar />

      {/* Section 1: Hero & Hooking */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={solution3Bg} 
            alt="직장 내 괴롭힘 · 성희롱 대응"
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
              다시 평온한 일상으로 돌아갈 수 있도록<br className="hidden md:block" />
              <span className="text-sky-300">노동법률사무소 맑은이 함께하겠습니다.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Problem & Empathy */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-2">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">말하기 어려운 고민의 무게</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                직장 내 괴롭힘이나 성희롱은 누구에게나 일어날 수 있는 일이지만, 막상 닥치면 어떻게 대응해야 할지 막막한 법입니다. 혼자 고민하며 마음의 짐을 지고 계시지는 않나요?
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
              <h3 className="text-xl font-bold text-slate-900">정확한 진단이 필요한 순간</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                내가 겪은 상황이 법적인 보호를 받을 수 있는 사안인지, 혹시나 하는 우려 때문에 망설여질 때가 있습니다. 객관적인 시각에서 현 상황을 짚어줄 전문가의 조력이 필요합니다.
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
                <HeartPulse size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">든든한 조력자와의 동행</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                당신의 용기가 헛되지 않도록, 노동법률사무소 맑은은 당신의 일상이 다시 평온해지는 과정을 처음부터 끝까지 정직하게 함께하겠습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: The Malgeun Solution (Worker focus) */}
      <section className="py-24 px-6 bg-[#90caf9] text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">체계적이고 전문적인 조력</h2>
            <div className="inline-block px-6 py-3 bg-white/40 border border-white/50 rounded-2xl font-bold text-lg text-slate-900 backdrop-blur-sm">
              복잡한 법리 싸움은 노무사에게 맡기고, 당신은 오직 일상의 회복에만 전념하세요.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl flex flex-col"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                <span className="flex-1">노동청 및 노동위원회 사건 대리</span>
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm">
                지방고용노동관서(노동청) 진정, 노동위원회 구제신청을 대리합니다. 고객의 권리보호를 위한 최적의 전략을 제시합니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl flex flex-col"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                <span className="flex-1">체계적인 사내 조사 대응</span>
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm">
                진정 사건 대리 중 진행되는 사내 조사 과정을 꼼꼼히 조력합니다. 조사 시 유의사항을 안내하고 서면을 통해 본인의 입장을 명확히 전달할 수 있도록 돕습니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl flex flex-col"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                <span className="flex-1">법적 요건 해당함을 주장하는 전문 의견서</span>
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm">
                근로기준법 상 '직장 내 괴롭힘'이나 남녀고용평등법 상 '직장 내 성희롱' 에 해당함을 주장하는 논리적인 전문 법률 의견서를 작성합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action */}
      <ContactForm 
        title={
          <>
            지금 마주한 어려움, 노동법률사무소 맑은이 함께 나누겠습니다. <br />
            당신의 평온한 일상을 되찾는 길, 저희가 든든한 버팀목이 되어드리겠습니다.
          </>
        } 
        defaultInquiryType="직장 내 괴롭힘 · 성희롱 노동청 진정 등 대리"
        defaultClientType="worker"
      />

      <Footer />
    </div>
  );
};
