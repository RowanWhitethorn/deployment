import React from "react";

// Define the interface for the props
interface CotizacionCardProps {
  showOverlay: boolean; // Specify the type as boolean
  toggleOverlay: () => void; // Specify the type as a function that takes no arguments and returns void
}

// Use the defined props interface
function CotizacionCard({ showOverlay, toggleOverlay }: CotizacionCardProps) {
  const toggleOverlayHandler = () => {
    toggleOverlay();
  };

  return (
    <div className="cotizacion-card-container">
      {/* Ensure the overlay is initially visible */}
      {showOverlay && (
        <div className="cotizacion-overlay" onClick={toggleOverlayHandler}>
          <div className="cotizacion-card-overlay">
            <h2>Le daremos respuesta en menos de 24 horas!</h2>
            <p>
              Para cotizar un paquete vacacional puede llamarnos o escribirnos
              por WhatsApp al <span>(786) 865-5615 </span>o escribir a{" "}
              <span> vueloscaribe19@gmail.com </span> con la siguiente
              informacion: <br />
            </p>
            <ul>
              <li>Lugar al que desea viajar</li>

              <li>Cantidad de personas</li>

              <li>Fechas de ida y retorno</li>

              <li>
                Que servicios va a necesitar:
                <ul>
                  <li> reserva del hotel</li>
                  <li> pasaje de avión</li>
                  <li> renta de auto en su destino</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default CotizacionCard;
