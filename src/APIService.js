const API = "http://localhost:10100";

const APIService = {
  async getUsers() {
    const users = await fetch(`${API}/cafe/users`).then(response =>
      response.json().then(data => data)
    );
    return users;
  },

  async registerPurchase({ productorId, fanegas, id }) {
    const body = {
      productorId,
      id,
      fanegas
    };

    return fetch(`${API}/cafe`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(response => response.json());
  }
};

export default APIService;
