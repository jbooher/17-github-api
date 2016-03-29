import Repo from "./Repo.js";

class User {
  constructor(username) {
    this.username = username;
    this.getData();
  }

  render() {
    let div = document.querySelector(".profile--media");

    let avatar = document.createElement("img");
    avatar.src = this.avatar;
    avatar.classList.add("profile--avatar");
    div.appendChild(avatar);

    let name = document.createElement("h1");
    name.innerHTML = this.name;
    name.classList.add("profile--name");
    div.appendChild(name);

    let username = document.createElement("h2");
    username.innerHTML = this.username;
    username.classList.add("profile--username");
    div.appendChild(username);

    let socialDiv = document.querySelector(".profile--location");

    let location = document.createElement("p");
    location.innerHTML = `<i class="fa fa-map-marker"></i> ${this.location}`;
    socialDiv.appendChild(location);

    let joined = document.createElement("p");
    let dateJoined = this.joined.split("T");
    dateJoined = dateJoined[0];
    dateJoined = new Date(dateJoined).toDateString();
    joined.innerHTML = `<i class="fa fa-clock-o"></i> Joined on ${dateJoined}`;
    socialDiv.appendChild(joined);

    let followers = document.querySelector(".profile--followers");
    let label1 = followers.querySelector(".label");
    let followerNum = document.createElement("p");
    followerNum.innerHTML = this.followers;
    followers.insertBefore(followerNum, label1);

    let starred = document.querySelector(".profile--starred");
    let label2 = starred.querySelector(".label");
    let starredNum = document.createElement("p");
    starredNum.innerHTML = this.starred;
    starred.insertBefore(starredNum, label2);

    let following = document.querySelector(".profile--following");
    let label3 = following.querySelector(".label");
    let followingNum = document.createElement("p");
    followingNum.innerHTML = this.following;
    following.insertBefore(followingNum, label3);
  }

  getData() {
    let profileUrl = `https://api.github.com/users/${this.username}`;
    let repoUrl = `https://api.github.com/users/${this.username}/repos`;

    fetch(profileUrl).then((response) => {
      return response.json();
    }).then((response) => {
      this.avatar = response.avatar_url;
      this.name = response.name;
      this.location = response.location;
      this.joined = response.created_at;
      this.followers = response.followers;
      this.starred = response.public_gists;
      this.following = response.following;

      this.render();
    });

    fetch(repoUrl).then((response) => {
      return response.json();
    }).then((response) => {
      response.forEach((index) => {
        const repo = new Repo(index.name, index.clone_url, index.updated_at, index.stargazers_count, index.forks);
      })
    });
  }
}

export default User;
