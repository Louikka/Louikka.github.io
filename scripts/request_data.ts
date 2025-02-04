// request user info

const userInfo = new XMLHttpRequest();

userInfo.open('GET', 'https://api.github.com/users/Louikka');
userInfo.responseType = 'json';

userInfo.addEventListener('load', () => {

    interface GitUser extends Object {
        'name' : string,
        'avatar_url' : string
    };

    const d: GitUser = userInfo.response;

    document.querySelector('#app .profile_image > img')!.setAttribute('src', d.avatar_url);
    document.querySelector('#app .description .who')!.innerHTML = d.name;

});

userInfo.send();



// request all user public repositories

const userRepos = new XMLHttpRequest();

userRepos.open('GET', 'https://api.github.com/users/Louikka/repos');
userRepos.responseType = 'json';

userRepos.addEventListener('load', () => {

    interface GitRepo extends Object {
        'name' : string,
        'description' : string,
        'has_pages' : boolean,
        'homepage' : string
    };

    const d: Array<GitRepo> = userRepos.response;

    d.forEach((obj) => {

        if (obj.has_pages && obj.name != "Louikka.github.io") {

            let a = `<div class="d"><a class="project" href="${obj.homepage}" target="_blank">${obj.description}</a></div>`;

            document.querySelector('#app .projects')!.insertAdjacentHTML('beforeend', a);

        };

    });

});

userRepos.send();