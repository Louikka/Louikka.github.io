// global event listeners
window.addEventListener('click', (ev) => {

});



// main

getGitUserInfo();


document.querySelectorAll('span.click_to_copy').forEach((e) => {
    e.addEventListener('click', (ev) => {

        navigator.clipboard.writeText( (ev.currentTarget as HTMLElement).innerText );


        const dialog = <HTMLDialogElement> document.querySelector('dialog.confirmation');
        dialog.innerText = 'Copied to the clipboard';

        if (dialog.open) {

            clearTimeout(+dialog.getAttribute('data-timer_id'));

            dialog.setAttribute('data-timer_id', setTimeout(() => { dialog.close() }, 2000).toString());

        } else {

            dialog.show();

            dialog.setAttribute('data-timer_id', setTimeout(() => { dialog.close() }, 2000).toString());

        };

    });
});





// functions //////////////////////////////////////////////////////////////////

// request user info
async function getGitUserInfo() {

    const url = 'https://api.github.com/users/Louikka';

    let resp = await fetch(url);
    let d: GitUser = await resp.json();


    document.querySelector<HTMLImageElement>('.profile .avatar > img').src = d.avatar_url;
    document.querySelector<HTMLElement>('.profile .description .name').innerText = `${d.login} (${d.name})`;
    document.querySelector<HTMLElement>('.profile .description .bio').innerText = d.bio;

    document.querySelector<HTMLElement>('.contacts .links .email > span').innerText = d.email;
    document.querySelector<HTMLAnchorElement>('.contacts .links .git > a').href = d.html_url;

};
// request all user public repositories
async function getGitUserRepos() {

    const url = 'https://api.github.com/users/Louikka/repos';

    let resp = await fetch(url);
    let d = await resp.json();

};





// ts interfaces //////////////////////////////////////////////////////////////

interface GitUser {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    user_view_type: string,
    site_admin: boolean,
    name: string,
    company: any,
    blog: string,
    location: any,
    email: any,
    hireable: any,
    bio: string,
    twitter_username: any,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}