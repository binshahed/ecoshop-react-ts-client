import httpRequest from "./http.service";

class ProductService {
  async getAllProducts(): Promise<IProduct[]> {
    const { data } = await httpRequest.get("/users");
    return data;
  }
}

export default new ProductService();
