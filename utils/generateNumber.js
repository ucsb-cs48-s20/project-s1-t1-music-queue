export default function generateNumber(min, max){
    const roomKey = Math.floor(Math.random() * (max - min + 1) + min);
    return (roomKey)
  }