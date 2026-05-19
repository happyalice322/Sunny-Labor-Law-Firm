import { useEffect } from "react";
import solutionBg from "../assets/images/regenerated_image_1778835678711.jpg";
import { motion } from "motion/react";
import { ArrowRight, Scale, Calculator, ShieldAlert, FileText, Handshake, Landmark, Search, ClipboardList } from "lucide-react";
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

export const WageArrearsSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-primary/20">
      <SEO 
        title="임금체불 및 퇴직금 청구 대응"
        description="미지급된 임금, 퇴직금 등 정당한 권리를 찾기 위한 법적 절차와 임금 산정, 노동청 진정 대리를 지원합니다."
        keywords="임금체불, 퇴직금청구, 미지급임금, 노동청진정, 노무사대리, 근로자권리"
      />
      <Navbar />

      {/* Section 1: Hero & Hooking */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={solutionBg} 
            alt="임금체불 및 퇴직금 청구 대응"
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
              정당한 노동의 대가, <br />
              노동법률사무소 맑은이 되찾아드립니다
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Market Trend & Problem */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              혼자서는 어려운 절차, 전문가의 도움이 필요합니다
            </h2>
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-2xl font-bold text-lg mb-4">
              당신의 권리가 정직하게 인정받을 수 있도록 돕겠습니다
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
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">지연되는 임금, 깊어지는 고민</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                "회사가 어려우니 조금만 기다려달라"는 말에 차일피일 미뤄지는 임금과 퇴직금은 근로자의 생계를 위협하는 심각한 문제입니다.
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
                <Scale size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">당연한 권리가 부정당할 때</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                분명 지시를 받아서 일했는데 프리랜서나 도급이라는 이유로 임금을 받지 못한다는 말을 듣고 겁을 먹으셨나요? 노동법 전문가와 함께 근로기준법상 근로자 여부부터 검토해 체불된 임금을 받기 위한 전략을 검토합니다.
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
                <Calculator size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">홀로 감당하기 벅찬 과정</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                복잡한 수당 계산과 사업주와의 불편한 대면, 그리고 낯선 노동청 신고 절차 앞에서 막막함을 느끼는 당신을 위해 노동법률사무소 맑은이 든든한 조력자가 되어드리겠습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Solution */}
      <section className="py-24 px-6 bg-[#90caf9] text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">근로자성 검토부터 대지급금 절차까지, 면밀한 지원</h2>
            <div className="inline-block px-6 py-3 bg-white/40 border border-white/50 rounded-2xl font-bold text-lg text-slate-900 backdrop-blur-sm">
              "법적 논리와 실무 경험을 바탕으로, 받지 못한 임금의 마지막 1원까지 명확히 계산하여 청구합니다."
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <DrawnCheck className="text-brand-primary" />
                <span className="flex-1">근로자성 입증부터 검토</span>
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                프리랜서, 도급 등으로 노무를 제공했을 경우에는 근로기준법상 근로자임을 먼저 검토해야 합니다. 가장 기초적인 단계부터 면밀히 검토합니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <DrawnCheck className="text-brand-primary" />
                <span className="flex-1">체계적인 체불 임금 산정</span>
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                포괄임금제, 다양한 수당 등 임금체계가 복잡하더라도 걱정하지 마세요. 연장·야간·휴일수당, 누락된 연차수당과 퇴직금까지 법적 기준에 따라 정밀하게 산출합니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <DrawnCheck className="text-brand-primary" />
                <span className="flex-1">전과정 밀착 지원</span>
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                노동청 조사 동석, 증거 제출 및 사업주와의 협상까지 전 과정을 노무사가 직접 수행하여 고객의 법률적 방패가 되어드리고, '대지급금' 제도를 활용할 수 있도록 꼼꼼하게 도와드립니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action */}
      <ContactForm 
        title={
          <>
            미지급 임금 문제, 혼자 고민하면 시간만 늦춰질 뿐입니다. <br />
            노동법률사무소 맑은과 함께 지금 바로 해결책을 찾으세요.
          </>
        } 
        defaultInquiryType="임금 체불 사건 대리"
        defaultClientType="worker"
      />

      <Footer />
    </div>
  );
};
