import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Scale, ShieldAlert, MessageCircle, Gavel, FileText, ClipboardList, PenTool } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { SEO } from "../components/SEO";

import serviceRemedyImage from "../assets/images/regenerated_image_1778833517265.jpg";

const solutionBg = serviceRemedyImage;

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

export const LaborRemedySupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-primary/20">
      <SEO 
        title="노동위원회 구제사건 대리"
        description="부당해고, 부당징계 등 부당한 인사 처분에 대해 노동위원회 구제신청을 대리하여 당신의 소중한 권리를 되찾아 드립니다."
        keywords="부당해고, 부당징계, 노동위원회, 구제신청, 노무사대리, 근로자권리"
      />
      <Navbar />

      {/* Section 1: Hero & Hooking */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={solutionBg} 
            alt="노동위원회 구제사건 대리"
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
              갑작스런 부당한 해고나 징계로 <br /> 막막하신가요?<br className="hidden md:block" />
              <span className="text-sky-300">잃어버린 일상의 권리를 되찾아 드립니다</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Problem & Empathy */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              당황스러운 마음은 가라앉히고, 침착하게 대응하세요
            </h2>
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-2xl font-bold text-lg mb-4">
              노동법 전문가와 함께 당신의 권리를 지키세요
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-2">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">부당해고 구제신청</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                혹시 구두로 해고 통보를 받으셨나요? 잘못한 것도 없는데 사장님이 갑자기 내일부터 나오지 말라고 하셨나요? 해고는 사유, 절차가 모두 정당해야 합니다. 억울한 해고에 대한 이야기를 경청하고 부당해고임을 인정받을 전략을 제시합니다.
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
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">부당징계 구제신청</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                잘못한 것에 비해 너무 과한 징계 양정을 받으셨나요? 혹은 잘못한 것도 없는데 징계가 결정되었나요? 징계의 사유, 절차, 양정이 정당한지 검토하고 부당징계임을 인정받을 수 있는 전략을 제시합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Solution */}
      <section className="py-24 px-6 bg-[#90caf9] text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">어려운 건 노동법률 사무소 맑은에 맡겨주세요</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <DrawnCheck className="text-brand-primary" />
                혼자서는 대응이 어렵습니다
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                노동위원회 사건은 해고나 징계의 부당함을 주장함과 동시에 사용자의 주장에 대한 반박이 오가는 치열한 과정입니다. 법률 지식이 적은 근로자 개인이 기업의 논리를 상대하기에는 현실적인 어려움이 큽니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <DrawnCheck className="text-brand-primary" />
                사실관계 분석 및 전략 수립
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                사건의 핵심 쟁점과 사실관계를 명확하게 파악합니다. 단순한 감정적 호소가 아닌, 객관적인 데이터와 정황을 바탕으로 고객에게 유리한 결과를 얻을 수 있는 전략을 세웁니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <DrawnCheck className="text-brand-primary" />
                증빙자료 확보와 이유서 제출
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                법적 요건에 맞춰 해고나 징계 등의 부당성을 입증할 증빙자료를 체계적으로 정리합니다. 논리적인 이유서 작성을 통해 노동위원회 위원들을 설득하고, 고객의 주장이 법적으로 타당함을 증명합니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <DrawnCheck className="text-brand-primary" />
                최선의 결과 도출
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                원직복직이든 금전보상이든 고객이 가장 원하는 결과를 얻으실 수 있도록 이유서 작성부터 심문회의 참석까지 전 과정을 책임지고 도와드리겠습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action */}
      <ContactForm 
        title="갑작스런 해고나 징계 등으로 고민하고 계신다면 주저하지 말고 문의해주세요"
        description="" 
        defaultInquiryType="노동위원회 구제사건 대리"
        defaultClientType="worker"
      />

      <Footer />
    </div>
  );
};
