
import Navbar from './components/Common/Navbar';
import WithoutSimbianSection from './components/WithoutSimbian/WithoutSimbianSection';
import WithSimbianSection from './components/WithSimbian/WithSimbianSection';


export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="without">
        <WithoutSimbianSection />
      </div>
      <div id="with">
        <WithSimbianSection />
      </div>
    </main>
  );
}
