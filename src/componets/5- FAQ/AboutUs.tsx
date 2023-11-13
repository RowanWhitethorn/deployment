import React from 'react';

// Define the interface for the props
interface AboutUsCardProps {
  showOverlay: boolean; // Specify the type as boolean
  toggleOverlay: () => void; // Specify the type as a function that takes no arguments and returns void
}

// Use the defined props interface
function AboutUsCard({ showOverlay, toggleOverlay }: AboutUsCardProps) {
  const toggleOverlayHandler = () => {
    toggleOverlay();
  };

  return (
    <div className="cotizacion-card-container">
      {/* Ensure the overlay is initially visible */}
      {showOverlay && (
        <div className="cotizacion-overlay" onClick={toggleOverlayHandler}>
          <div className="cotizacion-card-overlay">
            <h2></h2>
            <p>
            //Acerca de nosotros, escribir descripcion:
           /*Somos una agencia de viajes y envios aereos que cuenta con un equipo de paralegales y notarios, brindamos una diversidad de servicios y asistencia con tramites legales y migratorios
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default AboutUsCard;




