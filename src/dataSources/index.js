const ItemAPI = require("../item/datasource");
const UserAPI = require("../user/datasource");
const SearchAPI = require("../search/datasource");

module.exports = () => ({
  itemAPI: new ItemAPI(),
  userAPI: new UserAPI(),
  searchAPI: new SearchAPI(),
});
