'use client';
import StepFlow from './StepFlow';
import FinalStatsCard from './FinalStatsCard';

export default function WithSimbianSection() {
  return (
    <section className="bg-green-50 py-12 px-5 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-800">With Simbian</h2>
      <StepFlow />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-10">
        <FinalStatsCard title="Ignored Alerts" />
        <FinalStatsCard title="Wrongly Closed Alerts" />
        <FinalStatsCard title="Active Threats" />
      </div>
      <div className="mt-8 text-center text-sm text-green-700 max-w-3xl mx-auto">
        <p>90% of alerts resolved automatically, 24/7</p>
        <p>Correlates alerts to your environment</p>
        <p>Investigate every alert—no SOAR needed</p>
      </div>
    </section>
  );
}
