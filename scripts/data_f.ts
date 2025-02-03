function fUserInfo() {

    interface GitUser extends Object {
        'name' : string,
        'avatar_url' : string
    };

    const d: GitUser = userInfo.response;

    document.querySelector('#app .profile_image > img')!.setAttribute('src', d.avatar_url);
    document.querySelector('#app .description .who')!.innerHTML = d.name;

};

function fUserRepos() {

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

};