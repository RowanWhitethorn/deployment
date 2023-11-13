import React from "react";

// Define the interface for the props
interface FaqCardProps {
  showOverlay: boolean; // Specify the type as boolean
  toggleOverlay: () => void; // Specify the type as a function that takes no arguments and returns void
}

// Use the defined props interface
function FaqCard() {
  return (
    <div className="FAQ">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>Question 1?</h3>
        <p>Answer to question 1.</p>
      </div>
      <div className="faq-item">
        <h3>Question 2?</h3>
        <p>Answer to question 2.</p>
      </div>

      <p>
        Envios aereos -Dias de salida: Los dias de salida son variables, el dia
        que trae su envio se le dice cual sera la fecha de la proxima salida y
        el tiempo estimado en que llegara a su destino -Tiempos de entrega: Para
        las provincias Habana y Artemisa de 3 a 5 despues de la fecha de salida.
        Para el resto de las provincias de 7 a 15 dias. Cualquier variacion en
        estos tiempos de entrega le sera informada oportunamente Tramites
        migratorios: -Que tiempo puede durar mi proceso ? /Independientemente de
        que proceso, formulario o solicitud haya realizado mediante nuestras
        oficinas, los tiempos para estos pueden variar dentro del plazo que le
        damos -como puedo seguir el estado de mi proceso? Los tramites con uscis
        al ser realizados devuelven unn codigo de recibo el cual usted puede
        rastrear usando la aplicacion case tracker o mediante la web
        https://egov.uscis.gov/ -Que hago si ha pasado mucho tiempo y no he
        tenido una respuesta? Si necesita mas informacion sobre su tramite mas
        alla de la asistencia brindada por la agencia puede llamar directamente
        al numero de atencion al cliente de uscis: para tener informacion mas
        concreta sobre su proceso. *Recuerde que garantizamos un trabajo
        correctamente realizado pero no un tiempo o un resultado en su proceso
        una vez cualquier tipo de solicitud o formulario esta en manos de las
        autoridades migratorias o gubernamentales.
      </p>
    </div>
  );
}
export default FaqCard;
