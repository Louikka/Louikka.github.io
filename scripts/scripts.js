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
        document.querySelector('#app .profile_image > img').setAttribute('src', d.avatar_url);
        document.querySelector('#app .description .who').innerHTML = d.name;
    });
}
;
getGitUserRepos();
function getGitUserRepos() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.github.com/users/Louikka/repos';
        let resp = yield fetch(url);
        let d = yield resp.json();
        d.forEach((obj) => {
            if (~obj.name.search(/\.website\.layout\.example$/i)) {
                let s = `<div class="d"><a class="project" href="${obj.html_url}" target="_blank">${obj.name}</a></div>`;
                document.querySelector('#app .projects').insertAdjacentHTML('beforeend', s);
            }
            ;
        });
    });
}
;
document.querySelector('#app .contacts .email').addEventListener('click', (event) => {
    navigator.clipboard.writeText(event.currentTarget.innerText);
});
