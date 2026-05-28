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
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPhone(value);
  };

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

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 1. Strict field validation for required fields (Check this first as requested)
    const name = formData.get("name_company")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const phoneValue = phone.trim();

    if (!name || !email || !message || !phoneValue) {
      alert("모든 필수 항목(성함/회사명, 연락처, 이메일, 상담내용)을 입력해주세요.");
      return;
    }

    // 2. Client Type Validation
    if (!clientType) {
      alert("문의 고객 유형(근로자 또는 기업)을 선택해주세요.");
      return;
    }

    // 3. Privacy Agreement Validation (Check this last as requested)
    if (!privacyAgreed) {
      alert("개인정보 수집 및 이용에 동의하셔야 상담 문의가 가능합니다");
      return;
    }

    setFormStatus("sending");
    
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
        setPhone("");
        setPrivacyAgreed(false);
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
                <label className="text-sm font-bold text-slate-700 block">문의 고객 유형 *</label>
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
                <input type="hidden" name="client_type" value={clientType} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">성함/회사명 *</label>
                  <input name="name_company" type="text" placeholder="홍길동/회사명" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">연락처 *</label>
                  <input 
                    name="phone" 
                    type="tel" 
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="숫자만 입력해 주세요" 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">이메일 주소 *</label>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="example@company.com" 
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">문의 유형</label>
                <select 
                  name="type" 
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
                <label className="text-sm font-bold text-slate-700">상담 내용 *</label>
                <textarea name="message" rows={4} placeholder="문의하시고자 하시는 내용을 적어주시면 더 정확한 상담이 가능합니다." className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 resize-none" />
              </div>

              {/* Hidden field to pass privacy agreement status to email */}
              <input type="hidden" name="privacy_policy_agreed" value={privacyAgreed ? "Yes (Agreed)" : "No"} />

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4">
                <div className="text-[13px] text-slate-500 leading-relaxed max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 pr-2">
                  <p className="font-bold text-slate-700 mb-2">[개인정보 수집 및 이용 동의]</p>
                  <p className="mb-2">본인은 노동법률사무소 맑은의 서비스 제공 문의와 관련하여, 아래와 같이 본인의 개인정보를 수집·이용하는 것에 동의합니다.</p>
                  <p className="mb-1"><span className="font-semibold">가. 수집·이용 목적:</span> 서비스 제공 문의에 대한 답변 및 관련 안내</p>
                  <p className="mb-1"><span className="font-semibold">나. 수집·이용하는 개인정보의 항목:</span> 성명, 회사명, 전자우편, 전화번호, 문의 내용 등</p>
                  <p className="mb-1"><span className="font-semibold">다. 보유 및 이용기간:</span> 개인정보 수집일로부터 6개월 (단, 관계 법령에 따른 보존 의무가 있는 경우 해당 기간 동안 보존)</p>
                  <p><span className="font-semibold">라. 동의 거부 권리 및 불이익:</span> 귀하는 위 개인정보 수집·이용에 동의하지 않을 권리가 있습니다. 다만, 동의하지 않으실 경우 서비스 문의 접수 및 답변 서비스 제공이 제한됩니다.</p>
                </div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      checked={privacyAgreed}
                      onChange={(e) => setPrivacyAgreed(e.target.checked)}
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-slate-200 transition-all checked:border-brand-primary checked:bg-brand-primary"
                    />
                    <svg
                      className="pointer-events-none absolute h-5 w-5 stroke-white opacity-0 transition-opacity peer-checked:opacity-100"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-brand-primary transition-colors">
                    상기 개인정보 수집 및 이용에 동의합니다.
                  </span>
                </label>
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
