import {
  gistsReducer,
  getGistsStart,
  getGistsSuccess,
  getGistsError,
  searchGistsStart,
  searchGistsSuccess,
  searchGistsError,
} from "../../gists";
  
describe("gists reducer", () => {
  describe("default", () => {
    it("default value", () => {
      const state = { test: "test" };

      const result = gistsReducer(state, {});

      expect(result).toEqual(state);
    });
  });

  describe("get gists types", () => {
    it("start", () => {
      const result = gistsReducer(
        { pending: false, error: "error" },
        getGistsStart()
      );

      expect(result.pending).toBe(true);

      expect(result.error).toBe(null);
    });

    it("success", () => {
      const GISTS = [];

      const result = gistsReducer(
        { pending: true, gists: GISTS },
        getGistsSuccess(GISTS)
      );

      expect(result.pending).toBe(false);
      expect(result.gists).toBe(GISTS);
    });

    it("error", () => {
      const ERROR = "error";

      const result = gistsReducer(
        { pending: true, error: null },
        getGistsError(ERROR)
      );

      expect(result.pending).toBe(false);
      expect(result.error).toBe(ERROR);
    });
  });

  describe("search gists types", () => {
    it("start", () => {
      const result = gistsReducer(
        { pendingBySearch: false, errorBySearch: "error" },
        searchGistsStart()
      );

      expect(result.pendingBySearch).toBe(true);
      expect(result.errorBySearch).toBeNull();
    });

    it("success", () => {
      const GISTS = [];

      const result = gistsReducer(
        { pending: true, gists: GISTS },
        searchGistsSuccess(GISTS)
      );

      expect(result.pendingBySearch).toBe(false);
      expect(result.gistsBySearch).toBe(GISTS);
    });

    it("error", () => {
      const ERROR = "error";

      const result = gistsReducer(
        { pendingBySearch: true, errorBySearch: null },
        searchGistsError(ERROR)
      );

      expect(result.pendingBySearch).toBeFalsy();
      expect(result.errorBySearch).toBe(ERROR);
    });
  });
});