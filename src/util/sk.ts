function makeObject<P>(obj: AnyObject): Partial<P> {
    const keys = Object.keys(obj);
  
    let temp: Partial<P> = {};
    keys.forEach(key => {
      const value = obj[key];
      splitChain<P>(key, value, temp);
    });
  
    return temp;
  }
  
  