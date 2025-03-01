getGitUserInfo();
getGitUserRepos();
document.querySelector('#app .contacts .email').addEventListener('click', function (event) {
    navigator.clipboard.writeText(event.currentTarget.innerText);
});
