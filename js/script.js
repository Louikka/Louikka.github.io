var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => __awaiter(this, void 0, void 0, function* () {
    const d = yield getGitUserInfo();
    document.querySelector('.bottom-links a.github').href = d.html_url;
    document.querySelector('.bottom-links').classList.add('show');
}))();
function getGitUserInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.github.com/users/Louikka';
        let resp = yield fetch(url);
        let d = yield resp.json();
        return d;
    });
}
;
