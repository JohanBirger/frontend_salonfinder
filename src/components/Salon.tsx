// Salon.ts
interface Salon {
    name: string;
    city: string;
    prices: {
      haircut: number;
      coloring: number;
      styling: number;
    };
    address: string;
    phoneNumber:string;
    email:string;
    url:string;
    lat: number;
    lon: number;
  }
  
  export default Salon;