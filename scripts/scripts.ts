interface AnyObject {
    [key: string]: any
}



// request user info

getGitUserInfo();

async function getGitUserInfo() {

    const url = 'https://api.github.com/users/Louikka';

    let resp = await fetch(url);
    let d: AnyObject = await resp.json();


    document.querySelector('#app .profile_image').innerHTML = `<img src="${d.avatar_url}" />`;
    document.querySelector<HTMLElement>('#app .description .who').innerText = d.name;

};


// request all user public repositories

getGitUserRepos();

async function getGitUserRepos() {

    const url = 'https://api.github.com/users/Louikka/repos';

    let resp = await fetch(url);
    let d: AnyObject[] = await resp.json();


    document.querySelector('#app .projects').insertAdjacentHTML('beforeend', `
        <div class="sub-title">Website templates :</div>
    `);

    d.forEach((obj) => {

        const r = /\.website\.layout\.example$/i;

        if (~obj.name.search(r)) {

            let s = `<div class="d"><a class="project" href="${obj.html_url}" target="_blank">${obj.name.replace(r, '')}</a></div>`;

            document.querySelector('#app .projects').insertAdjacentHTML('beforeend', s);

        };

    });

};



// other scripts

interface HTMLPopUpElement extends HTMLElement {
    isShow: boolean,
    timerId: number,
}

document.querySelectorAll('#app .click_to_copy').forEach((e) => {
    e.addEventListener('click', (event) => {

        navigator.clipboard.writeText((event.currentTarget as HTMLElement).innerText);


        const popup = <HTMLPopUpElement> document.querySelector('#app .popup-clip_confirm');

        if (popup.isShow) {

            clearTimeout(popup.timerId);

            popup.timerId = setTimeout(() => {

                popup.style.opacity = '0';
                popup.isShow = false;

            }, 2000);

        } else {

            popup.style.opacity = '1';
            popup.isShow = true;

            popup.timerId = setTimeout(() => {

                popup.style.opacity = '0';
                popup.isShow = false;

            }, 2000);

        };

    });
});