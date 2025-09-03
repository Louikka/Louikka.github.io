document.addEventListener('DOMContentLoaded', () =>
{
    document.querySelector('.change-palette')!.classList.add('show');
});

document.querySelector('.change-palette > input')!.addEventListener('click', (ev) =>
{
    let _currentPalette = document.body.getAttribute('data-color-palette');
    if (_currentPalette === null)
    {
        throw new ReferenceError(`Element <body> does not have "data-color-palette" attribute.`);
    }

    let newPalette = (+_currentPalette + 1) % COLOR_PALETTES.length;

    document.body.style = `--c0:${ COLOR_PALETTES[newPalette][0] };--c1:${ COLOR_PALETTES[newPalette][1] };--c2:${ COLOR_PALETTES[newPalette][2] };--c3:${ COLOR_PALETTES[newPalette][3] };--c4:${ COLOR_PALETTES[newPalette][4] }`;

    document.body.setAttribute('data-color-palette', newPalette.toString());
});

(async () =>
{
    if (document.querySelector('.bottom-links') === null)
    {
        throw new ReferenceError(`Element <.bottom-links> is null.`);
    }

    const d = await getGitHubUserInfo().catch((err) =>
    {
        throw err;
    });

    document.querySelector<HTMLAnchorElement>('.bottom-links a.github')!.href = d.html_url;
    document.querySelector('.bottom-links')!.classList.add('show');
})();





async function getGitHubUserInfo(): Promise<GitHubUser>
{
    const url = 'https://api.github.com/users/Louikka';

    let resp = await fetch(url);
    let d: GitHubUser = await resp.json();

    return d;
}
