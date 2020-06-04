import { generateNumber } from "../utils/generateNumber.js";


describe("utils/generateNumber", () => {
  describe("generateNumber", () => {
    it('creates a random RoomCode for create Room', () => {
      expect(() => {
        generateNumber(100000, 999999)
      }).not.toBe(0);
      });

      it('throws an error when parameter is not of type int', () => {
        expect(() =>{
          generateNumber("hi", "hello") 
        }).toThrow('min and max should be of type int');
        });
  
      it('throws an error when min is 0', () => {
        expect(() => {
          generateNumber(0, 50);
        }).toThrow("min should not be 0");
      });

      it("throws an error when max is 0", () => {
        expect(() => {
          generateNumber(20, 0);
        }).toThrow("max should not be 0");
      });
  });
});