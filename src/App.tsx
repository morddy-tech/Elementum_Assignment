/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import SplitContent from "./components/SplitContent";
import Offerings from "./components/Offerings";
import Testimonials from "./components/Testimonials";
import Subscription from "./components/Subscription";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden selection:bg-brand-mint selection:text-brand-dark">
      {/* Structural Top Header Navigation */}
      <Header />

      {/* Main Container Content Sections */}
      <main className="flex-grow">
        {/* Interactive Multiplayer Hero */}
        <Hero />

        {/* Brand Core Shoptalks - Sections 2 and 3 */}
        <SplitContent />

        {/* Tabular capabilities / Deliverables - Section 4 */}
        <Offerings />

        {/* Dynamic Client Feedbacks system - Section 5 */}
        <Testimonials />

        {/* Sage-green newsletter subscribe banner and Footer links - Section 6 */}
        <Subscription />
      </main>
    </div>
  );
}
