getGitUserInfo();
getGitUserRepos();

document.querySelector('#app .contacts .email').addEventListener('click', (event) => {

    navigator.clipboard.writeText((event.currentTarget as HTMLElement).innerText);

});