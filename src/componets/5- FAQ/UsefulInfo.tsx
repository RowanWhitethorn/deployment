/*Estan como <p> para visualizar como se veian en la pagina,
 hay que hacerlos enlaces y mostrarlos en otra pagina o como
  una tarjetica overlay tipo las cotizaciones o algo asi */
//FAQ escribir lista de preguntas:
/*

  Envios aereos
  -Dias de salida: Los dias de salida son variables, el dia que trae su envio se
  le dice cual sera la fecha de la proxima salida y el tiempo estimado en que 
  llegara a su destino

  -Tiempos de entrega:
    Para las provincias Habana y Artemisa de 3 a 5 despues de la fecha de salida.
    Para el resto de las provincias de 7 a 15 dias. Cualquier variacion
    en estos tiempos de entrega le sera informada oportunamente 
  
  Tramites migratorios:
  -Que tiempo puede durar mi proceso ?
  /Independientemente de que proceso, formulario o solicitud haya realizado 
  mediante nuestras oficinas, los tiempos para estos pueden variar
  dentro del plazo que le damos

  -como puedo seguir el estado de mi proceso?
  Los tramites con uscis al ser realizados devuelven unn codigo de recibo el cual usted puede rastrear
  usando la aplicacion case tracker o mediante la web https://egov.uscis.gov/

  -Que hago si ha pasado mucho tiempo y no he tenido una respuesta?
  Si necesita mas informacion sobre su tramite mas alla de la asistencia brindada por la agencia
  puede llamar directamente al numero de atencion al cliente de uscis: (<<nujmero de uscis>>) para tener informacion 
  mas concreta sobre su proceso.
  *Recuerde que garantizamos un trabajo correctamente realizado pero no un tiempo o un resultado 
  en su proceso una vez cualquier tipo de solicitud o formulario esta en manos de las autoridades migratorias
  o gubernamentales.
  
  Paquetes Vacacionales: (Aqui nada de momento)
  
  */
//Acerca de nosotros, escribir descripcion:
/*Somos una agencia de viajes y envios aereos que cuenta con un equipo de paralegales y notarios, brindamos una diversidad de servicios y asistencia con tramites legales y migratorios*/

/*Politicas de Privacidad: No compartimos sus datos personales con 3ras entidades
  cualquier notificacion o promocion no deseada que se le envie por sms o por correo electronico
  puede ser cancelada en cualquier momento para dejar de recibirlas.
*/

//son sencillas, descripcion de los datos que se recopilan y como se usan y para que

import { useState } from "react";
import FaqCard from "./FAQ";
import AboutUsCard from "./AboutUs";
import PrivacyPolicyCard from "./PrivacyPolicy";

function UsefulInfo() {
  const [showFaqOverlay, setShowFaqOverlay] = useState(false);
  const [showAboutUsOverlay, setShowAboutUsOverlay] = useState(false);
  const [showPrivacyPolicyOverlay, setShowPrivacyPolicyOverlay] =
    useState(false);

  const toggleFaqOverlay = () => {
    setShowFaqOverlay(!showFaqOverlay);
  };

  const toggleAboutUsOverlay = () => {
    setShowAboutUsOverlay(!showAboutUsOverlay);
  };

  const togglePrivacyPolicyOverlay = () => {
    setShowPrivacyPolicyOverlay(!showPrivacyPolicyOverlay);
  };

  return (
    <div className="footer-anchor-container">
      <a href="/faq" className="ms-2 custom-link anchor-footer">
        FAQ
      </a>
      <a
        href="#about-us"
        onClick={toggleAboutUsOverlay}
        className="ms-2 custom-link anchor-footer"
      >
        About Us
      </a>
      <a
        href="#privacy-policy"
        onClick={togglePrivacyPolicyOverlay}
        className="ms-2 custom-link anchor-footer"
      >
        Privacy Policy
      </a>

      <AboutUsCard
        showOverlay={showAboutUsOverlay}
        toggleOverlay={toggleAboutUsOverlay}
      />
      <PrivacyPolicyCard
        showOverlay={showPrivacyPolicyOverlay}
        toggleOverlay={togglePrivacyPolicyOverlay}
      />
    </div>
  );
}

export default UsefulInfo;
