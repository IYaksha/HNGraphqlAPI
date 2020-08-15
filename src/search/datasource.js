const { RESTDataSource } = require("apollo-datasource-rest");

class SearchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://hn.algolia.com/api/v1/";
  }
  async basicSearch(query, tags, page) {
    try {
      const basicSearchResponse = await this.get("search", {
        query,
        tags,
        page,
      });
      return basicSearchResponse;
    } catch (error) {
      throw error;
    }
  }
  async dateSearch(query, tags, page) {
    try {
      const dateSearchResponse = await this.get("search_by_date", {
        query,
        tags,
        page,
      });
      return dateSearchResponse;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SearchAPI;
