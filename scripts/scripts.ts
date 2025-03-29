interface AnyObject {
    [key: string]: any
}



// request user info

getGitUserInfo();

async function getGitUserInfo() {

    const url = 'https://api.github.com/users/Louikka';

    let resp = await fetch(url);
    let d: AnyObject = await resp.json();


    document.querySelector('#app .profile_image > img').setAttribute('src', d.avatar_url);
    document.querySelector('#app .description .who').innerHTML = d.name;

};


// request all user public repositories

getGitUserRepos();

async function getGitUserRepos() {

    const url = 'https://api.github.com/users/Louikka/repos';

    let resp = await fetch(url);
    let d: AnyObject[] = await resp.json();


    d.forEach((obj) => {
        if (~obj.name.search(/\.website\.layout\.example$/i)) {

            let s = `<div class="d"><a class="project" href="${obj.html_url}" target="_blank">${obj.name}</a></div>`;

            document.querySelector('#app .projects').insertAdjacentHTML('beforeend', s);

        };
    });

};



// other scripts

document.querySelector('#app .contacts .email').addEventListener('click', (event) => {

    navigator.clipboard.writeText((event.currentTarget as HTMLElement).innerText);

});