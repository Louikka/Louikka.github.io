var userInfo = new XMLHttpRequest();
userInfo.open('GET', 'https://api.github.com/users/Louikka');
userInfo.responseType = 'json';
userInfo.addEventListener('load', function () {
    ;
    var d = userInfo.response;
    document.querySelector('#app .profile_image > img').setAttribute('src', d.avatar_url);
    document.querySelector('#app .description .who').innerHTML = d.name;
});
userInfo.send();
var userRepos = new XMLHttpRequest();
userRepos.open('GET', 'https://api.github.com/users/Louikka/repos');
userRepos.responseType = 'json';
userRepos.addEventListener('load', function () {
    ;
    var d = userRepos.response;
    d.forEach(function (obj) {
        if (obj.has_pages && obj.name != "Louikka.github.io") {
            var a = "<div class=\"d\"><a class=\"project\" href=\"".concat(obj.homepage, "\" target=\"_blank\">").concat(obj.description, "</a></div>");
            document.querySelector('#app .projects').insertAdjacentHTML('beforeend', a);
        }
        ;
    });
});
userRepos.send();
