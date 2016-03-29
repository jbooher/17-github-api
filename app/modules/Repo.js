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

    let div = document.createElement("div");
    div.classList.add("profile--repo");

    let col1 = document.createElement("div");
    col1.classList.add("profile--repo-title");
    div.appendChild(col1);

    let repoName = document.createElement("h2");
    let repoUrl = document.createElement("a");
    repoUrl.href = this.url;
    repoUrl.textContent = this.name;
    repoName.classList.add("profile--repo-name");
    repoName.appendChild(repoUrl);
    col1.appendChild(repoName);

    let updatedDiv = document.createElement("h3");
    let updated = this.updated.split("T");
    updated = updated[0];
    updated = new Date(updated).toDateString();
    updatedDiv.innerHTML = `Updated ${updated}`;
    col1.appendChild(updatedDiv);

    let col2 = document.createElement("div");
    col2.classList.add("profile--repo-social");
    div.appendChild(col2);

    let starred = document.createElement("p");
    starred.innerHTML = `<i class="fa fa-star"></i> ${this.stars}`;
    col2.appendChild(starred);

    let forked = document.createElement("p");
    forked.innerHTML = `<i class="fa fa-code-fork"></i> ${this.forks}`;
    col2.appendChild(forked);

    document.querySelector(".profile--repos").appendChild(div);
  }
}

export default Repo;
