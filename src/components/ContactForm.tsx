import React, { useState } from "react";
import { motion } from "motion/react";

export const ContactForm = ({
  title = "Contact Us",
  description = (
    <>
      상담이 필요한 내용을 남겨주시면 <br />
      <span className="text-brand-primary font-semibold">대표 노무사가 직접 확인 후</span> 연락드립니다.
    </>
  ),
  defaultInquiryType = "",
  defaultClientType = ""
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  defaultInquiryType?: string;
  defaultClientType?: "worker" | "company" | "";
}) => {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [clientType, setClientType] = useState<"worker" | "company" | "">(defaultClientType);
  const [inquiryType, setInquiryType] = useState(defaultInquiryType);

  const workerInquiryOptions = [
    "직장 내 괴롭힘 · 성희롱 노동청 진정 등 대리",
    "임금 체불 사건 대리",
    "노동위원회 구제사건 대리",
    "기타"
  ];

  const companyInquiryOptions = [
    "직장 내 괴롭힘·성희롱 조사",
    "법정의무교육 등 강의",
    "취업규칙 및 인사규정 정비",
    "노무 자문",
    "유연근무제도 도입 컨설팅",
    "프리랜서 고용형태 적법 진단 컨설팅",
    "기타"
  ];

  // Update state when prop changes
  React.useEffect(() => {
    if (defaultInquiryType) {
      setInquiryType(defaultInquiryType);
      
      // Auto-set client type if default inquiry matches (and defaultClientType is not provided)
      if (!defaultClientType) {
        if (workerInquiryOptions.includes(defaultInquiryType)) {
          setClientType("worker");
        } else if (companyInquiryOptions.includes(defaultInquiryType)) {
          setClientType("company");
        }
      }
    }
  }, [defaultInquiryType, defaultClientType]);

  React.useEffect(() => {
    if (defaultClientType) {
      setClientType(defaultClientType);
    }
  }, [defaultClientType]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xkoyyroq", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 text-slate-900 scroll-mt-10 overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative z-10 text-center mb-12">
        <h2 className="heading-md mb-6 text-brand-dark">{title}</h2>
        <p className="text-slate-600 text-lg">
          {description}
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[2rem] text-slate-900 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700 block">문의 고객 유형</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setClientType("worker")}
                    className={`flex-1 py-4 rounded-xl border-2 font-bold transition-all ${
                      clientType === "worker" 
                        ? "border-brand-primary bg-brand-primary/5 text-brand-primary" 
                        : "border-slate-100 bg-white text-slate-400 hover:border-slate-200"
                    }`}
                  >
                    근로자
                  </button>
                  <button
                    type="button"
                    onClick={() => setClientType("company")}
                    className={`flex-1 py-4 rounded-xl border-2 font-bold transition-all ${
                      clientType === "company" 
                        ? "border-brand-primary bg-brand-primary/5 text-brand-primary" 
                        : "border-slate-100 bg-white text-slate-400 hover:border-slate-200"
                    }`}
                  >
                    기업
                  </button>
                </div>
                <input type="hidden" name="client_type" value={clientType} required />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">성함/회사명</label>
                  <input name="name_company" required type="text" placeholder="홍길동/회사명" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">연락처</label>
                  <input name="phone" required type="tel" placeholder="010-0000-0000" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">이메일 주소</label>
                <input 
                  name="email" 
                  required 
                  type="email" 
                  pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                  title="올바른 이메일 형식을 입력해주세요. (예: user@example.com)"
                  placeholder="example@company.com" 
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">문의 유형</label>
                <select 
                  name="type" 
                  required 
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 bg-white appearance-none"
                  disabled={!clientType}
                >
                  <option value="">{!clientType ? "먼저 고객 유형을 선택해주세요" : "유형을 선택해주세요"}</option>
                  {clientType === "worker" && workerInquiryOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                  {clientType === "company" && companyInquiryOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">상담 내용</label>
                <textarea name="message" required rows={4} placeholder="문의하시고자 하시는 내용을 적어주시면 더 정확한 상담이 가능합니다." className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 resize-none" />
              </div>

              <button 
                type="submit" 
                disabled={formStatus === "sending" || formStatus === "success"}
                className={`w-full py-5 rounded-2xl font-bold text-white shadow-xl flex items-center justify-center gap-3 transition-all ${
                  formStatus === "success" ? "bg-brand-dark" : "bg-brand-primary hover:bg-brand-dark shadow-brand-primary/20 active:scale-95"
                }`}
              >
                {formStatus === "idle" && "상담 문의하기"}
                {formStatus === "sending" && <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />}
                {formStatus === "success" && "상담 문의가 전송되었습니다"}
                {formStatus === "error" && "다시 시도해주세요"}
              </button>
            </form>
        </motion.div>
      </div>
    </section>
  );
};
