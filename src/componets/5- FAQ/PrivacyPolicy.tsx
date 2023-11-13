import React from 'react';

// Define the interface for the props
interface PrivacyPolicyCardProps {
  showOverlay: boolean; // Specify the type as boolean
  toggleOverlay: () => void; // Specify the type as a function that takes no arguments and returns void
}

// Use the defined props interface
function PrivacyPolicyCard({ showOverlay, toggleOverlay }: PrivacyPolicyCardProps) {
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
            /*Politicas de Privacidad: No compartimos sus datos personales con 3ras entidades
  cualquier notificacion o promocion no deseada que se le envie por sms o por correo electronico
  puede ser cancelada en cualquier momento para dejar de recibirlas.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default PrivacyPolicyCard;
