function checkLabel(radio, attr) {
    let label = document.querySelectorAll(`label[for='${attr}']`);
    if(radio.checked === false) {
        console.log(1);
      return label[1].style.color ='#757575';
    } else  {
        console.log(2);
       return label[1].style.color ='#333';
    }

}

let connectSlider = document.getElementById('range-custom');
let marginMax = document.getElementById('lower-value');
noUiSlider.create(connectSlider, {
    start: 300,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 1000
    }
});

let connectSlider2 = document.getElementById('range-custom2');
let marginMax2 = document.getElementById('lower-value2');
noUiSlider.create(connectSlider2, {
    start: 300,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 1000
    }
});

connectSlider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        marginMax.innerHTML = values[handle];
    } else {
        marginMax.innerHTML = values[handle];
    }
});

connectSlider2.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        marginMax2.innerHTML = values[handle];
    } else {
        marginMax2.innerHTML = values[handle];
    }
});

document.getElementById('show').onclick = function () {
    document.querySelector('.modal').style.display = 'flex';
}
document.querySelector('.close').onclick = function () {
    document.querySelector('.modal').style.display = 'none';
}