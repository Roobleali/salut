import { Router, Switch, Route } from "wouter";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { Contact } from "@/pages/Contact";
import { About } from "@/pages/About";
import { ScrollToTop } from "@/components/utils/ScrollToTop";
import PrivacyPolicy from '@/pages/legal/PrivacyPolicy';
import { HelmetProvider } from 'react-helmet-async';
import ThankYou from '@/pages/ThankYou';

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
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/legal/privacy" component={PrivacyPolicy} />
              <Route path="/thank-you" component={ThankYou} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;


