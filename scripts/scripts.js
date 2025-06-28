var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener('click', (ev) => {
});
getGitUserInfo();
document.querySelectorAll('span.click_to_copy').forEach((e) => {
    e.addEventListener('click', (ev) => {
        navigator.clipboard.writeText(ev.currentTarget.innerText);
        const dialog = document.querySelector('dialog.confirmation');
        dialog.innerText = 'Copied to the clipboard';
        if (dialog.open) {
            clearTimeout(+dialog.getAttribute('data-timer_id'));
            dialog.setAttribute('data-timer_id', setTimeout(() => { dialog.close(); }, 2000).toString());
        }
        else {
            dialog.show();
            dialog.setAttribute('data-timer_id', setTimeout(() => { dialog.close(); }, 2000).toString());
        }
        ;
    });
});
function getGitUserInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.github.com/users/Louikka';
        let resp = yield fetch(url);
        let d = yield resp.json();
        document.querySelector('.profile .avatar > img').src = d.avatar_url;
        document.querySelector('.profile .description .name').innerText = `${d.login} (${d.name})`;
        document.querySelector('.profile .description .bio').innerText = d.bio;
        document.querySelector('.contacts .links .email > span').innerText = d.email;
        document.querySelector('.contacts .links .git > a').href = d.html_url;
    });
}
;
function getGitUserRepos() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.github.com/users/Louikka/repos';
        let resp = yield fetch(url);
        let d = yield resp.json();
    });
}
;
