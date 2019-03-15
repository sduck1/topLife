function CustomSelect(options) {

    let elem = options.elem;
    let isOpen = false;

    elem.onclick = function (e) {
        if (e.target.className === 'title'){
            open();
        } else if (e.target.tagName === 'LI'){
            setValue( e.target.innerHTML , e.target.dataset.value);
            close();
        }
    };

    function onDocument(e) {
        if (!elem.contains(e.target)){
            close();
        }
    }

    function setValue(title , value) {
        elem.querySelector('.title').innerHTML = title;
        let widgetEvent = new CustomEvent('select', {
            bubbles: true,
            detail:{
                title: title,
                value: value
            }
        });
        elem.dispatchEvent(widgetEvent);
    }

    function toggle() {
        if (isOpen){
            close();
        } else open();
    }

    function open() {
        elem.classList.add('open');
        document.addEventListener('click', onDocument);
        isOpen = true;
    }

    function close() {
        elem.classList.remove('open');
        document.addEventListener('click', onDocument);
        isOpen = false;
    }
}

let langSelect = new CustomSelect({
    elem: document.getElementById('lang-select')
});
