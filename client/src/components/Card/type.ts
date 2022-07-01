type D = {
    title: string;
    cost: number;
    img: string;
    id?: number;
  }
  
  interface Data {
    data: D;
    func: any;
    text: string
  }

  export default Data;