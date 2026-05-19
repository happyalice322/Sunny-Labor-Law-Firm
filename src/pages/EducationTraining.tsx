import { useEffect } from "react";
import solutionBg from "../assets/images/regenerated_image_1778835108164.jpg";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Clock, Heart, ShieldAlert, GraduationCap, Users, Lightbulb, MessageSquare } from "lucide-react";
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

export const EducationTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-primary/20">
      <SEO 
        title="법정의무교육 및 노동법 강의"
        description="직장 내 괴롭힘 예방 교육, 성희롱 예방 교육, 장애인 인식 개선 교육 등 법정의무교육과 실무 중심의 노동법 강의를 제공합니다."
        keywords="법정의무교육, 인사교육, 성희롱예방교육, 괴롭힘예방교육, 노동법강의, 노가영노무사"
      />
      <Navbar />

      {/* Section 1: Hero & Hooking */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={solutionBg} 
            alt="인사노무 교육 및 강의"
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
              의무라서 듣는 교육이 아닌, <br className="hidden md:block" />
              조직의 내일을 바꾸는 <br /> <span className="text-sky-300">'살아있는 시간'</span>이 필요합니다.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Market Trend & Problem */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              교육, 매년 반복되는 '숙제' 같으신가요?
            </h2>
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-2xl font-bold text-lg mb-4">
              "형식적인 시간을 넘어 교육의 본질에 집중해 조직에 실질적인 변화를 제안합니다"
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
              <h3 className="text-xl font-bold text-slate-900">실효성 없는 법정 의무 교육</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                매년 반복되는 법정 의무 교육, 내용은 뻔하고 형식적이라서 시간 낭비처럼 느껴지지는 않으셨나요? 정작 실무에서 어떻게 대응해야 할지는 여전히 막막합니다.
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
              <h3 className="text-xl font-bold text-slate-900">어렵고 딱딱한 노동법</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                노동법은 용어도 생경하고 법 조문도 복잡해서 스스로 공부하기엔 한계가 있습니다. 실무자조차 "이 상황에 이 법이 맞나?" 하는 고민을 멈추기 어렵습니다. 노동법 전문가가 실무 내용에 최적화하여 쉽게 설명해 드립니다.
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
              <h3 className="text-xl font-bold text-slate-900">막막한 저연차 사원 온보딩</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                신입사원과 저연차 사원들이 조직에 잘 적응하길 바라지만, 무엇부터 교육을 해야 할지 고민이 깊으신가요? 단순히 업무 매뉴얼만으로는 채워지지 않는 '조직 적응'의 영역이 존재합니다. 조직 니즈를 반영한 온보딩 교육을 제시합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: The Malgeun Solution */}
      <section className="py-24 px-6 bg-[#90caf9] text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">현장을 아는 노무사의 '맞춤형 클래스'</h2>
            <div className="inline-block px-6 py-3 bg-white/40 border border-white/50 rounded-2xl font-bold text-lg text-slate-900 backdrop-blur-sm">
              노동법 전문성과 HRD 실무 경험의 결합, 노동법률사무소 맑은이 제안하는 교육은 다릅니다.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                노동법 전문가의 깊이
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                공인노무사로서 최신 법률 지식과 다양한 판례를 바탕으로 정확한 정보와 기준을 제시합니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                HRD 실무자의 시각
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                HRDer로서 신입사원 교육을 직접 기획하고 운영하며 KPI 우수 사례를 만든 경험이 있습니다. 조직의 언어로 소통하며 저연차 사원들의 마음을 움직이는 법을 압니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white text-slate-900 border border-slate-100 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">
                <DrawnCheck className="text-brand-primary" />
                현장 밀착형 강의
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                현장의 고민을 누구보다 잘 알기에, 강의가 끝난 후 바로 실무에 적용할 수 있는 명쾌한 해답을 드립니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Detailed Process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">상세 교육 프로그램</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              노동법률사무소 맑은은 조직의 필요에 따라 세 가지 유형의 교육을 진행합니다. <br />
              해당 유형 외에 기업의 니즈에 맞춘 새로운 교육도 진행이 가능합니다.
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
                <Heart size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Program 01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">직장 내 성희롱 예방 교육</h3>
              
              <div className="flex flex-col gap-4 w-full text-left">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    사례 중심의 몰입감
                  </h4>
                  <p className="text-xs text-slate-600">지루한 법 조문 나열이 아닙니다. 실제 판례와 현장 사례를 중심으로 흥미롭게 전달하여 구성원들의 집중도를 높입니다.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    성인지 감수성 향상
                  </h4>
                  <p className="text-xs text-slate-600">무엇이 성희롱인지 아는 단계를 넘어, 서로를 존중하는 조직 문화를 위해 필요한 '성인지감수성'을 키웁니다.</p>
                </div>
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
                <Lightbulb size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Program 02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">실전 노동법 교육</h3>
              
              <div className="flex flex-col gap-4 w-full text-left">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    쉬운 용어 풀이
                  </h4>
                  <p className="text-xs text-slate-600">어려운 노동법 용어를 실무자나 근로자가 바로 이해할 수 있는 쉬운 언어로 풀어드립니다.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    사례 기반 솔루션
                  </h4>
                  <p className="text-xs text-slate-600">"이럴 땐 어떻게 하나요?"라는 질문에 명확한 기준을 제시합니다. 연차휴가, 임금, 근로시간 등 복잡한 제도 적용을 명쾌하게 정리해 드립니니다.</p>
                </div>
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
                <Users size={32} />
              </div>
              <div className="font-bold text-brand-primary/80 mb-2">Program 03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">저연차 사원 조직 적응 교육</h3>
              
              <div className="flex flex-col gap-4 w-full text-left">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    팀빌딩 및 협업 강화
                  </h4>
                  <p className="text-xs text-slate-600">동료들과 유대감을 형성하고 팀워크의 가치를 몸소 느낄 수 있는 활동형 교육을 진행합니다.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                    비즈니스 매너 및 온보딩
                  </h4>
                  <p className="text-xs text-slate-600">직장인으로서 갖춰야 할 기본 매너와 커뮤니케이션 기술을 통해 저연차 사원들의 성장을 돕습니다.</p>
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
            우리 조직에 꼭 필요한 강의, <br />
            노동법률사무소 맑은이 커리큘럼부터 함께 설계해 드리겠습니다.
          </>
        } 
        defaultInquiryType="법정의무교육 등 강의"
        defaultClientType="company"
      />

      <Footer />
    </div>
  );
};
