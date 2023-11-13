import { Preloader } from "../componets/1- General/Preloader";
import { Home } from "../componets/2- Home/!Home";
import { Vacaciones } from "../componets/3- Vacaciones/!Vacaciones";
import { Servicios } from "../componets/4- Servicios/!Servicios";
import { Footer } from "../componets/1- General/Footer";
import { ScrollingNavBar } from "../componets/1- General/ScrollingNavBar";

function App() {
  return (
    <>
      <div className="App">
        <ScrollingNavBar isHomePage={true} />
        <section className="section-home" id="home">
          <Home />
        </section>
        <section className="section-vacation" id="vacaciones">
          <Vacaciones />
        </section>
        <section className="section-services" id="servicios">
          <Servicios />
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
