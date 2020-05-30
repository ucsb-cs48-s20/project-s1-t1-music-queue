import { generateNumber } from "../utils/generateNumber";



describe("utils/generateNumber", () => {
  describe("generateNumber", () => {
    it('creates a random RoomCode for create Room', () => {
      expect(() => {
        generateNumber(100000, 999999)
      }).not.toBe(0);
      });
  });
});