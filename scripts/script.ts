const AVAILIBLE_PALETTES_COUNT = 5;


document.addEventListener('DOMContentLoaded', () =>
{
    document.querySelector('.change-palette')!.classList.add('show');
});

document.querySelector('.change-palette > input')!.addEventListener('click', (ev) =>
{
    let _current_palette = document.querySelector('main')!.getAttribute('data-color-palette');
    if (_current_palette === null)
    {
        throw new ReferenceError(`Element <main> does not have "data-color-palette" attribute.`);
    }

    let new_palette = (+_current_palette + 1) % AVAILIBLE_PALETTES_COUNT || AVAILIBLE_PALETTES_COUNT;

    document.querySelector('main')!.setAttribute('data-color-palette', new_palette.toString());
});

(async () =>
{
    if (document.querySelector('.bottom-links') === null)
    {
        throw new ReferenceError(`Element <.bottom-links> is null.`);
    }

    const d = await getGitUserInfo();

    document.querySelector<HTMLAnchorElement>('.bottom-links a.github')!.href = d.html_url;
    document.querySelector('.bottom-links')!.classList.add('show');
})();





async function getGitUserInfo(): Promise<GitHubPublicAPIUser>
{
    const url = 'https://api.github.com/users/Louikka';

    let resp = await fetch(url);
    let d: GitHubPublicAPIUser = await resp.json();

    return d;
}
