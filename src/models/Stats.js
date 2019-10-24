const statsBase = "/stats";
export class Stats {
  getNumCharacters() {
    return fetch(`${statsBase}/numcharacters`).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Unable to fetch Stats");
    });
  }
}
