 export function formatPhoneNumber(phoneNumber: string): string {
    // Remove any non-digits from the phone number
    const digitsOnly = phoneNumber.replace(/\D/g, '');
  
    // Format the phone number in the desired format (e.g. "(XXX) XXX-XXXX")
    const formattedNumber = digitsOnly.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  
    return formattedNumber;
  }
 
  