export function splitChain<P>(key: string, value: any, temp: any): any {
    let objChain = key.split('.');
    if (objChain.length <= 0) return temp;
    
    const name = objChain[0] as keyof P;
  
    if (objChain.length === 1) {
      temp[name] = value;
      
  
    } else {
      objChain.shift();
  
      let test = {};
      if (temp[name]) {
        test = temp[name];
      }
      
      temp[name] = {
        ...temp[name],
        ...splitChain(objChain.join('.'), value, test),
      };
    }
  
    return temp;
  }