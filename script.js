function getUserData() {
    var username = document.getElementById('username-input').value;
  
    // Make a GET request to the GitHub API
    fetch('https://api.github.com/users/' + username)
      .then(response => response.json())
      .then(data => {
        // Display the user data
        document.querySelector(".user-data").innerHTML = `
        <div id="avatar"></div>
      <div id="details">
        <div class="detail-box">Name : ${data.name}</div>
        <div class="detail-box">Location : ${data.location}</div>
        <div class="detail-box">Followers : ${data.followers}</div>
        <div class="detail-box">Following : ${data.following}</div>
        <div class="detail-box">Public Repo : ${data.public_repos}</div>
        <div class="detail-box">Bio : ${data.bio}</div>
      </div>
        `
        console.log(data)
        var avatar = document.getElementById('avatar');
        avatar.style.backgroundImage = 'url(' + data.avatar_url + ')';
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  