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

    await fetch(`${API}/cafe`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  }
};

export default APIService;
