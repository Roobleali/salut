import { Router, Switch, Route } from "wouter";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { CaseStudies } from "@/pages/CaseStudies";
import ERPSolutionsPage from "@/pages/solutions/EnterpriseApps";
import { Manufacturing } from "@/pages/industries/Manufacturing";
import { Retail } from "@/pages/industries/Retail";
import { RealEstate } from "@/pages/industries/RealEstate";
import { Healthcare } from "@/pages/industries/Healthcare";
import { Glossary } from "@/pages/Glossary";
import { GradientCustomizerPage } from "@/pages/GradientCustomizer";
import Efactura from "@/pages/industries/Efactura";
import { Services as IndustryServices } from "@/pages/industries/Services";
import { Hospitality } from "@/pages/industries/Hospitality";
import { ScrollToTop } from "@/components/utils/ScrollToTop";
import PrivacyPolicy from '@/pages/legal/PrivacyPolicy'
import PartnershipProgram from '@/pages/Partnership'
import { BlogList } from "./pages/Blog/BlogList";
import { BlogPost } from "./pages/Blog/Blog_details";
import { HelmetProvider } from 'react-helmet-async';
import CloudManagementPage from "./pages/solutions/CloudManagement";

function App() {
  return (
    <HelmetProvider>

      <Router>
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />

          <Navbar />

          <main className="flex-1">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/case-studies" component={CaseStudies} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />

              {/* Enterprise Routes */}
              <Route path="/solutions/erp" component={ERPSolutionsPage} />
              <Route path="/solutions/cloud-management" component={CloudManagementPage} />

              {/* Industry Routes */}
              <Route path="/erp-system/manufacturing" component={Manufacturing} />
              <Route path="/erp-system/real-estate" component={RealEstate} />
              <Route path="/erp-system/healthcare" component={Healthcare} />
              {/* Industry Routes */}
              <Route path="/erp-system/manufacturing" component={Manufacturing} />
              <Route path="/erp-system/real-estate" component={RealEstate} />
              <Route path="/erp-system/retail" component={Retail} />
              <Route path="/erp-system/e-factura" component={Efactura} />
              <Route path="/erp-system/services" component={IndustryServices} />
              <Route path="/erp-system/hospitality" component={Hospitality} />
              <Route path="/blog" component={BlogList} />
              <Route path="/blog/:id" component={BlogPost} />
              <Route path="/legal/privacy" component={PrivacyPolicy} />

              {/* Glossary Route */}
              <Route path="/glossary" component={Glossary} />

              {/* Gradient Customizer Route */}
              <Route path="/gradients" component={GradientCustomizerPage} />
              <Route path="/partnership" component={PartnershipProgram} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;


