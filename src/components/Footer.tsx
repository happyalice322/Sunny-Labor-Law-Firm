import logoImg from "../assets/images/logo_sunny_labor_1779178911264.png";

export const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img 
              src={logoImg} 
              alt="노동법률사무소 맑은" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          <p className="text-slate-500 text-xs md:text-sm max-w-md">
            현장 중심의 인사노무 실무 경험을 바탕으로 한 맞춤형 솔루션 <br />
            고객의 미래를 맑게 비추는 든든한 HR 파트너가 되겠습니다.
          </p>
        </div>
        
        <div className="text-xs md:text-sm text-slate-400 flex flex-col items-start md:items-end gap-2">
          <div>대표 노무사 노가영 | 문의 cpla.gynoh@gmail.com</div>
          <div>© 2026 노동법률사무소 맑은 All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
