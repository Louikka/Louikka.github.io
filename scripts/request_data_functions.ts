// request user info

function getGitUserInfo() {

    const xhr = new XMLHttpRequest();

    const url = 'https://api.github.com/users/Louikka';
    xhr.open('GET', url);
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {

        if (xhr.status != 200) {

            console.log(`Unable to get the requested data from ${url} (server response ${xhr.status})`);
            return;

        };

        interface GitUser extends Object {
            'name' : string,
            'avatar_url' : string
        };

        const d: GitUser = xhr.response;

        document.querySelector('#app .profile_image > img').setAttribute('src', d.avatar_url);
        document.querySelector('#app .description .who').innerHTML = d.name;

    });

    xhr.send();

};



// request all user public repositories

function getGitUserRepos() {

    const xhr = new XMLHttpRequest();

    const url = 'https://api.github.com/users/Louikka/repos';
    xhr.open('GET', url);
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {

        if (xhr.status != 200) {

            console.log(`Unable to get the requested data from ${url} (server response ${xhr.status})`);
            return;

        };

        interface GitRepo extends Object {
            'name' : string,
            'description' : string,
            'has_pages' : boolean,
            'homepage'? : string
        };

        const d: Array<GitRepo> = xhr.response;

        d.forEach((obj) => {

            if (obj.name != "Louikka.github.io") {

                if (obj.has_pages) {

                    let s = `<div class="d"><a class="project" href="${obj.homepage}" target="_blank">${obj.name}</a></div>`;

                    document.querySelector('#app .projects').insertAdjacentHTML('beforeend', s);

                } else {

                    let s = `<div class="d">${obj.name}</div>`;
                    
                    document.querySelector('#app .projects').insertAdjacentHTML('beforeend', s);

                }

            };

        });

    });

    xhr.send();

};