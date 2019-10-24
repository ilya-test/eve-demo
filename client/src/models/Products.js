const productsBase =  "/api/products";
export class Products {
  getProducts() {
    return fetch(productsBase).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Unable to fetch Products");
    });
  }
  getProduct(id) {
    const escapedId = encodeURIComponent(id);
    return fetch(`${productsBase}/${escapedId}`).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Unable to fetch Product");
    });
  }
  createProduct(title, content) {
    return fetch(productsBase, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, content}),
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Unable to create Product");
    });
  }
}
