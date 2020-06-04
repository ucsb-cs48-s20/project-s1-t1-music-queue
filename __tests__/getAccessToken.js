import { getAccessToken } from "../utils/getAccessToken.js";


describe("utils/getAccessToken", () => {
  describe("getAccessToken", () => {
    it('gets the Access Token from the URL', () => {
      expect(() => {
        getAccessToken()
      }).not.toBe(undefined);
      });
      it('access_token should not be 0', () => {
        expect(() => {
          getAccessToken()
        }).not.toBe(0);
        });
  
  });
});