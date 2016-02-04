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

    var label1 = document.createElement('label');
    label1.innerHTML = 'Вариант ответа №1';
    label1.style.fontSize = '16px';

    label1.insertBefore(check1, label1.firstChild);
    q.appendChild(label1);

    q.appendChild( document.createElement('br') );


    var check2 = document.createElement('input');
    check2.setAttribute('type', 'checkbox');
    check2.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var label2 = document.createElement('label');
    label2.innerHTML = 'Вариант ответа №2';
    label2.style.fontSize = '16px';

    label2.insertBefore(check2, label2.firstChild);
    q.appendChild(label2);

    q.appendChild( document.createElement('br') );


    var check3 = document.createElement('input');
    check3.setAttribute('type', 'checkbox');
    check3.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var label3 = document.createElement('label');
    label3.innerHTML = 'Вариант ответа №3';
    label3.style.fontSize = '16px';

    label3.insertBefore(check3, label3.firstChild);
    q.appendChild(label3);


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

    var label1 = document.createElement('label');
    label1.innerHTML = 'Вариант ответа №1';
    label1.style.fontSize = '16px';

    label1.insertBefore(check1, label1.firstChild);
    q.appendChild(label1);

    q.appendChild( document.createElement('br') );


    var check2 = document.createElement('input');
    check2.setAttribute('type', 'checkbox');
    check2.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var label2 = document.createElement('label');
    label2.innerHTML = 'Вариант ответа №2';
    label2.style.fontSize = '16px';

    label2.insertBefore(check2, label2.firstChild);
    q.appendChild(label2);

    q.appendChild( document.createElement('br') );


    var check3 = document.createElement('input');
    check3.setAttribute('type', 'checkbox');
    check3.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var label3 = document.createElement('label');
    label3.innerHTML = 'Вариант ответа №3';
    label3.style.fontSize = '16px';

    label3.insertBefore(check3, label3.firstChild);
    q.appendChild(label3);


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

    var label1 = document.createElement('label');
    label1.innerHTML = 'Вариант ответа №1';
    label1.style.fontSize = '16px';

    label1.insertBefore(check1, label1.firstChild);
    q.appendChild(label1);

    q.appendChild( document.createElement('br') );


    var check2 = document.createElement('input');
    check2.setAttribute('type', 'checkbox');
    check2.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var label2 = document.createElement('label');
    label2.innerHTML = 'Вариант ответа №2';
    label2.style.fontSize = '16px';

    label2.insertBefore(check2, label2.firstChild);
    q.appendChild(label2);

    q.appendChild( document.createElement('br') );


    var check3 = document.createElement('input');
    check3.setAttribute('type', 'checkbox');
    check3.style.cssText = '\
    margin: 0 8px 0 0;\
    width: 18px;\
    height: 18px;\
    ';

    var label3 = document.createElement('label');
    label3.innerHTML = 'Вариант ответа №3';
    label3.style.fontSize = '16px';

    label3.insertBefore(check3, label3.firstChild);
    q.appendChild(label3);


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