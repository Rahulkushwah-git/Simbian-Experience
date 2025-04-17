'use client';
import AlertCard from './AlertCard';
import { FaExclamationCircle, FaTimesCircle, FaBug } from 'react-icons/fa';

export default function WithoutSimbianSection() {
  const alertMessages = [
    'Phishing Email Detected',
    'Suspicious Login Attempt',
    'Malware Signature Found',
    'Unusual Data Access',
    'Outbound Connection to Blacklisted IP'
  ];

  return (
    <section className="bg-white py-10 px-5 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-red-800">Without Simbian</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <AlertCard
          title="Ignored Alerts"
          count={200}
          icon={<FaExclamationCircle />}
          alerts={alertMessages}
        />
        <AlertCard
          title="Wrongly Closed Alerts"
          count={35}
          icon={<FaTimesCircle />}
          alerts={alertMessages}
        />
        <AlertCard
          title="Active Threats"
          count={5}
          icon={<FaBug />}
          alerts={alertMessages}
        />
      </div>
      <div className="mt-8 text-center text-sm text-red-700 max-w-3xl mx-auto">
        <p>Wasting valuable analyst time on false positives</p>
        <p>Processing one alert at a time, missing the big picture</p>
        <p>More time fixing SOAR automation, less time on real threats</p>
      </div>
    </section>
  );
}
