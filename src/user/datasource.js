const { RESTDataSource } = require("apollo-datasource-rest");

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://hn.algolia.com/api/v1/users/";
  }
  async getUser(username) {
    try {
      const userResponse = await this.get(username);
      return userResponse;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserAPI;
