// request user info

const userInfo = new XMLHttpRequest();

userInfo.open('GET', 'https://api.github.com/users/Louikka');
userInfo.responseType = 'json';
userInfo.send();

userInfo.addEventListener('load', fUserInfo);



// request all user public repositories

const userRepos = new XMLHttpRequest();

userRepos.open('GET', 'https://api.github.com/users/Louikka/repos');
userRepos.responseType = 'json';
userRepos.send();

userRepos.addEventListener('load', fUserRepos);