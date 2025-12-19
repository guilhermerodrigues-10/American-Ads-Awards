
import React, { useEffect } from 'react';

const Legal: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-8">Legal & Privacy</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">Terms of Use</h2>
          <p>
            The content provided on American Ads Awards is for informational purposes only. While we strive for accuracy, rankings are based on proprietary analysis and public data which may change. We are not responsible for business decisions made based on this information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">Privacy Policy</h2>
          <p>
            This site does not collect personal user data via forms or logins. We utilize standard, anonymous web analytics to improve site performance and understand user navigation patterns.
          </p>
          <ul>
            <li>No cookies for marketing purposes.</li>
            <li>No data sharing with third parties.</li>
            <li>No user registration required.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">Intellectual Property</h2>
          <p>
            The American Ads Awards name, branding, and ranking methodology are intellectual property of the American Ads Awards Board. Unauthorized reproduction or use of the ranking badges without certification is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">Contact</h2>
          <p>
            For inquiries regarding our ranking process or data corrections, please contact our administrative board at <span className="font-bold">contact@americanadsawards.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;
