var doc = docute.init({   
    url: 'http://notebook.synergi.co/',
    plugins: [
        evanyou(),
        docuteIframe({
            prepend: '<script src="https://unpkg.com/vue@2.2.2/dist/vue.min.js"></script>'

        })
    ],
    home: 
    nav: [
        // homepage
        {title: 'Home', path: '/README'},
        {title: 'Setting', path: '/settings/settings'},
        {title: 'Work Station', path: '/docs/list'}
    ],
    announcement: function (route) {
        if (/\/docs/.test(route.path)) {
          return `<button id="plus" onclick="plus()" class="docute-button docute-button-mini docute-button-success"> A+ </button>
          <button id="minus" onclick="minus()" class="docute-button docute-button-mini docute-button-success"> 0.5W </button>
          <button id="reset" onclick="reset()" class="docute-button docute-button-mini docute-button-primary">RESET</button>
          `        
        }
        return {type: 'success', html: "Work hard, Tri!"};
    }
});
var selector = document.getElementsByClassName('markdown-body');
function plus(){
    return selector[0].style.fontSize = "19px";
};
function minus(){
    selector[0].style.width = "50%";
    selector[0].style.margin = "0 10px";
};
function reset(){
    selector[0].style.width = "100%";
    selector[0].style.margin = "20px auto";
    selector[0].style.fontSize = "16px";
};