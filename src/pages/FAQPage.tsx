import { Preloader } from "../componets/1- General/Preloader";

import { Footer } from "../componets/1- General/Footer";
import { ScrollingNavBar } from "../componets/1- General/ScrollingNavBar";
import FaqCard from "../componets/5- FAQ/FAQ";

function App() {
  return (
    <>
      <div className="App">
        <ScrollingNavBar isHomePage={false} />
        <section className="section-FAQ">
          <FaqCard />
        </section>
        <section>
          <Footer />
        </section>
        <Preloader />
      </div>
    </>
  );
}
export default App;
