import { useEffect } from "react";
import solutionBg from "../assets/images/regenerated_image_1778835434752.jpg";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, Activity, Users, FileText, MessageSquare, PhoneCall, Mail } from "lucide-react";
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

export const LaborAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-primary/20">
      <SEO 
        title="상시 노무 자문"
        description="인사 노무 실무 중 발생하는 현안에 대하여 즉각적이고 적법한 솔루션을 제공하는 HR 비즈니스 파트너입니다."
        keywords="노무자문, 인사자문, 상시자문, 노무사, 인사관리, 노가영노무사"
      />
      <Navbar />

      {/* Section 1: Hero & Hooking */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={solutionBg} 
            alt="노무 자문"
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
              <span className="text-sky-300">'예방'</span>이 가장 효율적이고 효과적인 <br />
              분쟁 해결 방법입니다
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Importance & Problem */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              최선의 방어는 '예방'입니다
            </h2>
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-2xl font-bold text-lg mb-4">
              "소 잃고 외양간 고치기보다, 단단한 울타리를 먼저 만듭니다"
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-2">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">수습보다 예방이 저렴합니다</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                노사 분쟁이 발생한 후 대응하는 비용은 사전 예방 비용의 수십 배에 달합니다. 임금 체불 진정, 부당해고 구제신청 등 이미 터진 사건을 수습하기 위해 쏟는 시간과 비용, 그리고 조직의 사기 저하를 고려한다면 상시 자문은 가장 스마트한 리스크 관리 투자입니다.
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
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">큰 리스크는 사소한 틈에서 시작됩니다.</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                "이 정도는 괜찮겠지"라고 생각하며 지나쳤던 사소한 규정이나 관행이 나중에 걷잡을 수 없는 법적 리스크로 돌아오곤 합니다. 노동법률사무소 맑은은 그 작은 틈을 미리 찾아내어 단단하게 메워드립니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Solution */}
      <section className="py-24 px-6 bg-[#90caf9] text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">고민의 순간, 바로 곁에 있는 HR 파트너</h2>
            <div className="inline-block px-6 py-3 bg-white/40 border border-white/50 rounded-2xl font-bold text-lg text-slate-900 backdrop-blur-sm">
              불안함이 확신으로 바뀌는 시간, 노동법률사무소 맑은이 명쾌한 답을 드립니다.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                현장의 질문에 답합니다
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                "이렇게 운영해도 괜찮을까?", "이게 정말 법적으로 맞는 걸까?" 경영 현장에서 수시로 마주하는 질문들, 이제 혼자 고민하지 마세요. 의문이 생길 때 주저 없이 연락 주시면, 노동법률 전문가의 시각에서 명확하고 실천 가능한 해결책을 제시해 드립니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                전문성과 실무의 조화
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                HR 실무 현장에서 고객의 입장을 깊이 있게 이해한 노무사가 귀사의 상황에 가장 적합한 법률 해석을 제공합니다. 고객의 성공을 돕는 HR 비즈니스 파트너로서 귀사의 사업을 고려하여 가장 적합한 솔루션을 제시합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Detailed Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">노무 자문 방식</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">기업의 상황과 필요에 따라 자문 방식을 선택하실 수 있습니다.</p>
            <div className="w-12 h-1.5 bg-brand-primary rounded-full mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-brand-primary mb-8 shadow-sm">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">상시 자문</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                근로시간 관리, 연차휴가, 징계 및 해고, 각종 인사 규정 해석 등 노무 관리 전반에 대하여 유선이나 메일로 상시적으로 노동법 자문을 해드립니다.<br />
                <span className="text-xs text-slate-400 font-medium">(상시 자문 계약 내용에 따라 의견서 작성을 포함할 수 있습니다)</span>
              </p>
              <div className="flex gap-4 mt-auto">
                <div className="flex items-center gap-2 text-brand-primary font-bold">
                  <PhoneCall size={18} /> 유선 자문
                </div>
                <div className="flex items-center gap-2 text-brand-primary font-bold">
                  <Mail size={18} /> 메일 자문
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-brand-primary mb-8 shadow-sm">
                <FileText size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">전문 의견서 작성</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                상시 노무자문 계약을 체결하지 않은 기업이더라도 특정 이슈에 대해 심도 있는 법률적 검토가 필요한 경우, 판례와 행정 해석을 분석하여 의견서를 작성해 드립니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <ContactForm 
        title="고객의 내일을 위한 HR파트너, 노동법률사무소 맑은과 함께하세요" 
        defaultInquiryType="노무 자문"
        defaultClientType="company"
      />

      <Footer />
    </div>
  );
};
