const noticesBase = "/notices";
export class Notices {
  getNotices() {
    return fetch(noticesBase).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Unable to fetch Notices");
    });
  }
  getNotice(id) {
    const escapedId = encodeURIComponent(id);
    return fetch(`${noticesBase}/${escapedId}`).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Unable to fetch Notice");
    });
  }
  createNotice(title, content) {
    return fetch(noticesBase, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, content}),
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Unable to create Notice");
    });
  }
}
