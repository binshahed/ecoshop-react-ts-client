import httpRequest from "./http.service";

class ProductService {
  async getAllProducts(): Promise<any> {
    // !!change any to proper type
    const { data } = await httpRequest.get("/user");
    return data;
  }
}

export default new ProductService();
