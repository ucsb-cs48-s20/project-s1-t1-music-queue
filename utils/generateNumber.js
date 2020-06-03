function throwError(message) {
    throw new Error(message);
  }

export function generateNumber(min, max){
    if(typeof min === 'string' || typeof max === 'string')
        throwError("min and max should be of type int");
    if(min === 0)
        throwError("min should not be 0")
    if(max === 0) 
        throwError("max should not be 0")
    
        const roomKey = Math.floor(Math.random() * Math.abs(max - min + 1) + min);

    return (roomKey);
  }

  
