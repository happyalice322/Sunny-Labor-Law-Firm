import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ShieldAlert, Scale, Search, PenTool, BarChart3, Users, MessageSquare } from "lucide-react";
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

export const HarassmentInvestigation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-primary/20">
      <SEO 
        title="직장 내 괴롭힘·성희롱 조사 전문"
        description="직장 내 괴롭힘 및 성희롱 사건 발생 시 공정하고 객관적인 조사를 통해 조직 갈등을 해결하고 리스크를 최소화합니다."
        keywords="직장내괴롭힘, 성희롱조사, 괴롭힘조사, 인사위원회, 징계자문, 노가영노무사"
      />
      <Navbar />

      {/* Section 1: Hero & Hooking */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={solution3Bg} 
            alt="직장 내 괴롭힘·성희롱 조사"
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
              법적 의무를 넘어, <br />
              조직의 신뢰를 회복하는 첫걸음, <br className="hidden md:block" />
              <span className="text-sky-300">객관적이고 투명한 조사가 정답</span>입니다.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Market Trend & Problem */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              공정하고 전문적인 조사가 필요한 이유
            </h2>
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-2xl font-bold text-lg mb-4">
              객관적인 조사는 조직 안정의 최소한의 장치입니다
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
              <h3 className="text-xl font-bold text-slate-900">지체 없는 조사 실시의 의무</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                근로기준법 제76조의3 제2항에 따라, 사용자는 직장 내 괴롭힘 발생 사실을 신고받거나 인지한 경우 지체 없이 사실 확인을 위한 객관적인 조사를 실시해야 합니다. 이를 위반할 경우 500만 원 이하의 과태료가 부과될 수 있습니다. <br /><br />
                마찬가지로 직장 내 성희롱도 남녀고용평등법 제14조 제2항에 따르면 신고를 받거나 직장 내 성희롱 발생 사실을 알게 된 경우에는 지체 없이 그 사실 확인을 위한 조사를 하여야 하고, 이를 위반하게 되면 500만원 이하 과태료가 부과됩니다.
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
              <h3 className="text-xl font-bold text-slate-900">기업 내부 조사의 한계</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                기업 내에서 자체적으로 조사를 진행하기에는 법률적 전문성을 갖추기가 쉽지 않으며, 조사 과정에서의 공정성 이슈나 2차 가해 리스크를 완전히 배제하기 어렵습니다.
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
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">전문가의 도움이 필요한 이유</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                조사과정이 공정성과 객관성이 낮다고 인식되면 오히려 조직 내 갈등이 심화될 수 있고 노동청 진정 등 분쟁으로 이어질 가능성도 무시할 수 없습니다. 그렇기 때문에 전문가의 도움을 받는 것이 필요합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: The Malgeun Solution */}
      <section className="py-24 px-6 bg-[#90caf9] text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">조사를 넘어 조직 갈등 해결로</h2>
            <div className="inline-block px-6 py-3 bg-white/40 border border-white/50 rounded-2xl font-bold text-lg text-slate-900 backdrop-blur-sm">
              사실확인, 직장 내 괴롭힘이나 성희롱 판단을 넘어, 숨겨진 갈등의 실타래를 푸는 '경청의 솔루션'을 제공합니다.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                갈등의 표면화, 그 너머를 봅니다
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                직장 내 괴롭힘이나 성희롱 신고는 단순히 한 사건의 발생이 아니라, 조직 내에 쌓여온 갈등이 표면으로 드러난 결과입니다. 우리는 이 지점을 해결의 시작으로 삼습니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                모두의 목소리에 귀를 기울입니다
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                신고인, 피신고인, 그리고 참고인까지 모든 당사자의 말을 편견 없이 경청합니다. 정중하고 세밀한 인터뷰 과정을 통해 사건의 실체를 파악하고, 당사자들이 납득할 수 있는 과정과 결과를 도출합니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                조직 회복을 위한 제언
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                조사는 끝이 아닌 새로운 시작이어야 합니다. 노동법률사무소 맑은은 조사 결과에 따른 법적 판단은 물론, 재발 방지를 위한 조직 문화 개선안과 구체적인 인사 관리 방안을 함께 제언하여 조직이 다시 건강하게 작동할 수 있도록 돕습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Detailed Process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">조사 수행 절차</h2>
            <div className="w-12 h-1.5 bg-brand-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              노동법률사무소 맑은은 객관성과 공정성을 바탕으로 아래와 같은 단계별 프로세스를 수행합니다.
            </p>
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
              <div className="font-bold text-brand-primary/80 mb-2">Step 01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">신고 내용 및 제반 정보 파악</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                신고서와 사전 제출된 증빙 자료등을 통해 신고 내용을 정확하게 이해하고 취업규칙 등 관련 제규정을 파악하여 조사 방향을 설정합니다.
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
                <Users size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Step 02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">심층 조사 진행 (인터뷰)</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                신고인, 참고인, 피신고인을 대상으로 면밀한 조사를 진행하고 사실관계를 확정합니다.
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
                <PenTool size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Step 03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">조사 보고서 작성 및 법률 제언</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                확정된 사실관계를 바탕으로 직장 내 괴롭힘·성희롱 해당 여부를 판단하고 보고서를 통해 조사 결과를 제시합니다. 이후 징계 양정 가이드나 후속 조치에 대한 구체적인 법률 자문을 제공합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <ContactForm 
        title={
          <>
            조직 갈등에 대한 현명한 해결책이 필요하다면, <br />
            지금 노동법률사무소 맑은에 도움을 요청하세요
          </>
        } 
        defaultInquiryType="직장 내 괴롭힘·성희롱 조사"
        defaultClientType="company"
      />

      <Footer />
    </div>
  );
};
