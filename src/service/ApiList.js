import ApiMethod from "./ApiMethod";

class APIList {
  constructor() {}

  login(params) {
    return ApiMethod.post("auth/login", params);
  }
  getAccount() {
    return ApiMethod.get("account");
  }
  getProduct() {
    return ApiMethod.get("products");
  }
  getBrand() {
    return ApiMethod.get("product/brand");
  }
  getCart(param) {
    return ApiMethod.get("cart?orderType=" + param);
  }
  addCart(params) {
    return ApiMethod.post("cart", params);
  }
  updateCart(params) {
    return ApiMethod.put("cart", params);
  }
  removeCart(params) {
    return ApiMethod.del("cart", params);
  }

  placeOrder(params) {
    return ApiMethod.post("order", params);
  }
}

export default new APIList();
