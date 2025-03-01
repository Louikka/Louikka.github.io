function getGitUserInfo() {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.github.com/users/Louikka';
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        if (xhr.status != 200) {
            console.log("Unable to get the requested data from ".concat(url, " (server response ").concat(xhr.status, ")"));
            return;
        }
        ;
        ;
        var d = xhr.response;
        document.querySelector('#app .profile_image > img').setAttribute('src', d.avatar_url);
        document.querySelector('#app .description .who').innerHTML = d.name;
    });
    xhr.send();
}
;
function getGitUserRepos() {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.github.com/users/Louikka/repos';
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        if (xhr.status != 200) {
            console.log("Unable to get the requested data from ".concat(url, " (server response ").concat(xhr.status, ")"));
            return;
        }
        ;
        ;
        var d = xhr.response;
        d.forEach(function (obj) {
            if (obj.name != "Louikka.github.io") {
                var s = "<div class=\"d\"><a class=\"project\" href=\"".concat(obj.html_url, "\" target=\"_blank\">").concat(obj.name, "</a></div>");
                document.querySelector('#app .projects').insertAdjacentHTML('beforeend', s);
            }
            ;
        });
    });
    xhr.send();
}
;
