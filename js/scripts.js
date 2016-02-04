var test = {
  wrapper: function () {
    var wrap = document.createElement('form');
    wrap.className = 'wrapper';
    wrap.style.cssText = '\
    width: 620px;\
    margin: 0 auto;\
    ';
    document.body.appendChild(wrap);
  },

  head: function () {
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Тест по программированию';
    h1.style.cssText = '\
    font-family: Arial;\
    text-align: center;\
    font-size: 18px;\
    ';
    document.querySelector('.wrapper').appendChild(h1);
  },

  ol: function () {
    var ol = document.createElement('ol');
    ol.style.cssText = '\
    margin: 50px 0 0 0;\
    font-family: Arial;\
    font-size: 18px;\
    ';
    document.querySelector('.wrapper').appendChild(ol);
  },

  quest1: function () {
    var q = document.createElement('li');
    q.innerHTML = 'Вопрос №1';
    q.style.cssText = '\
    margin: 20px 0\
    ';

    q.appendChild( document.createElement('br') );

    var check1 = document.createElement('input');
    check1.setAttribute('type', 'checkbox');
    check1.style.cssText = '\
    margin: 20px 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var txt1 = document.createElement('span');
    txt1.innerHTML = 'Вариант ответа №1';
    txt1.style.fontSize = '16px';

    q.appendChild(check1);
    q.appendChild(txt1);

    q.appendChild( document.createElement('br') );


    var check2 = document.createElement('input');
    check2.setAttribute('type', 'checkbox');
    check2.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var txt2 = document.createElement('span');
    txt2.innerHTML = 'Вариант ответа №2';
    txt2.style.fontSize = '16px';

    q.appendChild(check2);
    q.appendChild(txt2);

    q.appendChild( document.createElement('br') );


    var check3 = document.createElement('input');
    check3.setAttribute('type', 'checkbox');
    check3.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var txt3 = document.createElement('span');
    txt3.innerHTML = 'Вариант ответа №3';
    txt3.style.fontSize = '16px';

    q.appendChild(check3);
    q.appendChild(txt3);


    document.querySelector('ol').appendChild(q);
  },

  quest2: function () {
    var q = document.createElement('li');
    q.innerHTML = 'Вопрос №2';
    q.style.cssText = '\
    margin: 20px 0\
    ';

    q.appendChild( document.createElement('br') );

    var check1 = document.createElement('input');
    check1.setAttribute('type', 'checkbox');
    check1.style.cssText = '\
    margin: 20px 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var txt1 = document.createElement('span');
    txt1.innerHTML = 'Вариант ответа №1';
    txt1.style.fontSize = '16px';

    q.appendChild(check1);
    q.appendChild(txt1);

    q.appendChild( document.createElement('br') );


    var check2 = document.createElement('input');
    check2.setAttribute('type', 'checkbox');
    check2.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var txt2 = document.createElement('span');
    txt2.innerHTML = 'Вариант ответа №2';
    txt2.style.fontSize = '16px';

    q.appendChild(check2);
    q.appendChild(txt2);

    q.appendChild( document.createElement('br') );


    var check3 = document.createElement('input');
    check3.setAttribute('type', 'checkbox');
    check3.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var txt3 = document.createElement('span');
    txt3.innerHTML = 'Вариант ответа №3';
    txt3.style.fontSize = '16px';

    q.appendChild(check3);
    q.appendChild(txt3);


    document.querySelector('ol').appendChild(q);
  },
  
  quest3: function () {
    var q = document.createElement('li');
    q.innerHTML = 'Вопрос №3';
    q.style.cssText = '\
    margin: 20px 0\
    ';

    q.appendChild( document.createElement('br') );

    var check1 = document.createElement('input');
    check1.setAttribute('type', 'checkbox');
    check1.style.cssText = '\
    margin: 20px 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var txt1 = document.createElement('span');
    txt1.innerHTML = 'Вариант ответа №1';
    txt1.style.fontSize = '16px';

    q.appendChild(check1);
    q.appendChild(txt1);

    q.appendChild( document.createElement('br') );


    var check2 = document.createElement('input');
    check2.setAttribute('type', 'checkbox');
    check2.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var txt2 = document.createElement('span');
    txt2.innerHTML = 'Вариант ответа №2';
    txt2.style.fontSize = '16px';

    q.appendChild(check2);
    q.appendChild(txt2);

    q.appendChild( document.createElement('br') );


    var check3 = document.createElement('input');
    check3.setAttribute('type', 'checkbox');
    check3.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var txt3 = document.createElement('span');
    txt3.innerHTML = 'Вариант ответа №3';
    txt3.style.fontSize = '16px';

    q.appendChild(check3);
    q.appendChild(txt3);


    document.querySelector('ol').appendChild(q);
  },

  submit: function () {
    var button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Проверить мои результаты');
    button.style.cssText = '\
    margin: 50px 0 0 171px;\
    width: 330px;\
    height: 50px;\
    font-size: 18px;\
    ';
    document.querySelector('.wrapper').appendChild(button);
  }
}

for (var key in test) {
  test[key]();
}