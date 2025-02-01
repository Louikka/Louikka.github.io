userInfo.addEventListener('load', () => {

    interface GitUser extends Object {
        'avatar_url' : string;
    };

    const d: GitUser = userInfo.response;

    document.querySelector('#app .profile_image > img')!.setAttribute('src', d.avatar_url);

});

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