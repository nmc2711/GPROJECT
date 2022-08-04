export function splitChain<P>(key: string, value: any, temp: any): any {
    let objChain = key.split('.');
    if (objChain.length <= 0) return temp;
    
    const name = objChain[0] as keyof P;
  
    if (objChain.length === 1) {
      temp[name] = value;
      
  
    }
  
    return temp;
  }