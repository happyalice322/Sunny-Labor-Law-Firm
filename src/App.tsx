/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FreelancerConsulting } from "./pages/FreelancerConsulting";
import { FlexibleWorkConsulting } from "./pages/FlexibleWorkConsulting";
import { HarassmentInvestigation } from "./pages/HarassmentInvestigation";
import { EducationTraining } from "./pages/EducationTraining";
import { EmploymentRulesConsulting } from "./pages/EmploymentRulesConsulting";
import { LaborAdvisory } from "./pages/LaborAdvisory";
import { HarassmentProxy } from "./pages/HarassmentProxy";
import { WageArrearsSupport } from "./pages/WageArrearsSupport";
import { LaborRemedySupport } from "./pages/LaborRemedySupport";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelancer-consulting" element={<FreelancerConsulting />} />
        <Route path="/flexible-work-consulting" element={<FlexibleWorkConsulting />} />
        <Route path="/harassment-investigation" element={<HarassmentInvestigation />} />
        <Route path="/harassment-proxy" element={<HarassmentProxy />} />
        <Route path="/wage-arrears-support" element={<WageArrearsSupport />} />
        <Route path="/labor-remedy-support" element={<LaborRemedySupport />} />
        <Route path="/education-training" element={<EducationTraining />} />
        <Route path="/employment-rules-consulting" element={<EmploymentRulesConsulting />} />
        <Route path="/labor-advisory" element={<LaborAdvisory />} />
      </Routes>
    </Router>
  );
}

