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
    toggle?: any;
  }

  export default Data;