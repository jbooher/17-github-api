import User from "./User.js"

class Repo {
  constructor(name, url, updated, stars, forks) {
    this.name = name;
    this.url = url;
    this.updated = updated;
    this.stars = stars;
    this.forks = forks;
    this.render();
  }

  render() {
    
  }
}

export default Repo;
