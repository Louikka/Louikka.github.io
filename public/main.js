"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const AVAILABLE_COLOR_PALETTES_COUNT = 5;
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.change-palette').classList.add('show');
});
document.querySelectorAll('.change-palette > input').forEach((e) => {
    e.addEventListener('click', () => {
        changePalette();
    });
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    if (document.querySelector('.bottom-links') === null) {
        throw new ReferenceError(`Element <.bottom-links> is not defined.`);
    }
    const d = yield getGitHubUserInfo().catch((err) => {
        throw err;
    });
    document.querySelector('.bottom-links a.github').href = d.html_url;
    document.querySelector('.bottom-links').classList.add('show');
}))();
function getGitHubUserInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.github.com/users/Louikka';
        let resp = yield fetch(url);
        let d = yield resp.json();
        return d;
    });
}
function changePalette() {
    let __currentPalette = document.body.getAttribute('data-color-palette');
    if (__currentPalette === null) {
        throw new ReferenceError(`Element <body> does not have 'data-color-palette' attribute.`);
    }
    let newPalette = (+__currentPalette + 1) % AVAILABLE_COLOR_PALETTES_COUNT;
    document.body.setAttribute('data-color-palette', newPalette.toString());
}
