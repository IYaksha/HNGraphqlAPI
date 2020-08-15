const { RESTDataSource } = require("apollo-datasource-rest");

class ItemAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://hn.algolia.com/api/v1/items/";
  }
  async getItem(itemId) {
    const itemResponse = await this.get(itemId);
    return this.itemReducer(itemResponse);
  }
  itemReducer(item) {
    return {
      id: item.id,
      title: item.title,
      author: item.author,
      url: item.url,
      text: item.text,
      createdAt: item.created_at,
      children: this.reconstructObj(item.children),
    };
  }
  reconstructObj(children) {
    return children.reduce((accumulator, currentValue, index) => {
      if (currentValue.children.length > 0) {
        accumulator[index] = {
          id: currentValue.id,
          text: currentValue.text,
          author: currentValue.author,
          children: this.reconstructObj(currentValue.children),
        };
      } else {
        accumulator[index] = {
          id: currentValue.id,
          text: currentValue.text,
          author: currentValue.author,
          children: [],
        };
      }
      return accumulator;
    }, children);
  }
}

module.exports = ItemAPI;
