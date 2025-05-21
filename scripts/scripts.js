var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
getGitUserInfo();
function getGitUserInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.github.com/users/Louikka';
        let resp = yield fetch(url);
        let d = yield resp.json();
        document.querySelector('#app .profile_image').innerHTML = `<img src="${d.avatar_url}" />`;
        document.querySelector('#app .description .who').innerText = d.name;
    });
}
;
getGitUserRepos();
function getGitUserRepos() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.github.com/users/Louikka/repos';
        let resp = yield fetch(url);
        let d = yield resp.json();
        document.querySelector('#app .projects').insertAdjacentHTML('beforeend', `
        <div class="sub-title">Website templates :</div>
    `);
        d.forEach((obj) => {
            const r = /\.website\.layout\.example$/i;
            if (~obj.name.search(r)) {
                let s = `<div class="d"><a class="project" href="${obj.html_url}" target="_blank">${obj.name.replace(r, '')}</a></div>`;
                document.querySelector('#app .projects').insertAdjacentHTML('beforeend', s);
            }
            ;
        });
    });
}
;
document.querySelectorAll('#app .click_to_copy').forEach((e) => {
    e.addEventListener('click', (event) => {
        navigator.clipboard.writeText(event.currentTarget.innerText);
        const popup = document.querySelector('#app .popup-clip_confirm');
        if (popup.isShow) {
            clearTimeout(popup.timerId);
            popup.timerId = setTimeout(() => {
                popup.style.opacity = '0';
                popup.isShow = false;
            }, 2000);
        }
        else {
            popup.style.opacity = '1';
            popup.isShow = true;
            popup.timerId = setTimeout(() => {
                popup.style.opacity = '0';
                popup.isShow = false;
            }, 2000);
        }
        ;
    });
});
