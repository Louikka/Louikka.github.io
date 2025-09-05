import './styles.scss';



const AVAILABLE_COLOR_PALETTES_COUNT = 5;



document.addEventListener('DOMContentLoaded', () =>
{
    document.querySelector('.change-palette')!.classList.add('show');
});

document.querySelector('.change-palette > input')!.addEventListener('click', () =>
{
    let _currentPalette = document.body.getAttribute('data-color-palette');
    if (_currentPalette === null)
    {
        throw new ReferenceError(`Element <body> does not have 'data-color-palette' attribute.`);
    }

    let newPalette = (+_currentPalette + 1) % AVAILABLE_COLOR_PALETTES_COUNT;
    document.body.setAttribute('data-color-palette', newPalette.toString());
});

(async () =>
{
    if (document.querySelector('.bottom-links') === null)
    {
        throw new ReferenceError(`Element <.bottom-links> is not defined.`);
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
