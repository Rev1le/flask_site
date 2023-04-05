const quizData = [
    {
        question: "Как расшифровывается OSPF?",
        a: "Протокол управления передачей",
        b: "Протокол маршрутной информации",
        c: "Сперва открытый короткий путь",
        d: "Протокол пользовательских датаграмм",
        correct: "c",
    },
    {
        question: "OSPF использует алгоритм SPF для нахождения кратчайщего пути, на каком алгоритме он основан?",
        a: "Алгоритм Флойда",
        b: "Алгоритм Дейкстры",
        c: "Алгоритм Флойда — Уоршелла",
        d: "Алгоритм Форда — Беллмана",
        correct: "b",
    },
    {
        question: "Для каких сетей предназначен протокол OSPF",
        a: "Предназначен для работы в больших гибких составных сетях, хранится информация только о непосредственно подключенных к нему подсетях и маршрутизаторах",
        b: "Предназначен для работы в больших статических сетях, известна вся таблица MAC - адресов, поэтому он всегда может найти кратчаший путь",
        c: "Предназначен для малых динмачиских сетей, хранится информация не только о подключенных к нему подсетях, но и об отключённых сетях (в буфере)",
        d: "Предназначен для средних, одиночных, динамических сетей",
        correct: "a",
    },
    {
        question: "OSPF предлагает решение следующих задач. Уберите лишнее",
        a: "Метод выбора пути",
        b: "Поддержка сетевых масок переменной длины (Variable Length Subnet Masking, VLSM,)",
        c: "Управлять перегрузками.",
        d: "Динамическое перераспределение трафика между параллельными каналами, которое выполняется пропорционально степени загруженности этих каналов",
        correct: "c",
    },
    {
        question: "Преимущество протокола OSPF. Уберите лишнее",
        a: "Отсутствуют ограничения на размер сети, используется иерархическая структура сети",
        b: "Протокол поддерживает максимум 15 переходов. Сеть, включающая более 15 маршрутизаторов рассматривается как недоступная.",
        c: "Обеспечивает несколько маршрутов в сторону одного узла",
        d: "Обеспечивает передачу обновлений маршрутов с использованием адресов типа multicast и аутентификацию",
        correct: "b",
    },
    {
        question: "Особенности протокола OSPF. Уберите лишнее",
        a: "Каждому каналу может быть присвоен свой вес (количество ретрансляций). Ограничение на количество ретрансляций — 65 535;",
        b: "Каждый узел содержит базу сетевых путей в виде дерева, в вершине которого находится данный узел;",
        c: "широковещательная рассылка таблиц маршрутизации производится только при появлении изменений;",
        d: "Сети OSPF являются однородными. Понятие областей или границ отсутствует. С появлением бесклассовой маршрутизации и интеллектуального использования агрегирования и суммирования, сети OSPF морально устарели.",
        correct: "d",
    },
    {
        question: "При протоколе OSPF маршрутизаторы передают друг другу каждые 10 секунд короткие сообщения... Какие?",
        a: "HELLO",
        b: "hi",
        c: "hellnow",
        d: "01101000 01101001",
        correct: "a",
    },
    {
        question: "Каждый N промежуток времени все маршрутизаторы обмениваются всеми записями базы данных о топологии сети с целью синхронизации для более надежной работы. Чему равно N?",
        a: "15 миллисекундам",
        b: "30 секундам",
        c: "30 минутам",
        d: "10028 миллисекундам",
        correct: "c",
    },
    {
        question: "Метрика представляет собой оценку качества связи в данной сети. Метрика учитывает следующие параметры, уберите лишнее",
        a: "пропускную способность канала, величину задержки распространения сигнала в канале",
        b: "надежность канала, загруженность канала",
        c: "Из чего состоит линия связи, предпочтения пользователя",
        d: "размер максимального блока данных, который может быть передан через данный канал.",
        correct: "c",
    },
    {
        question: "Процесс построения таблиц маршрутизации 1 этап",
        a: "Каждый маршрутизатор строит граф связей. Маршрутизаторы обмениваются со своими соседями сообщениями о состоянии связей а потом, не изменяя, передают. В результате все маршрутизаторы имеют одинаковые сведенья о сетевом графе.",
        b: "Один маршрутизатор строит граф связей сети, ищет кратчайший путь, после чего передаёт остальным маршруритизаторам. В результате все маршрутизаторы имеют одинаковые сведенья о сетевом графе.",
        c: "Каждый маршрутизатор отдельно строит граф связей относительно себя. Потом маршрутизаторы обмениваются со своими соседями построенными графами, после чего с помощью алгоритма строится единый граф связей.",
        d: "Граф связей строит администратор сети",
        correct: "a",
    },
    {
        question: "Процесс построения таблиц маршрутизации 2 этап",
        a: "Поиск оптимальных маршрутов с помощью алгоритма Флойда — Уоршелла. Один маршрутизатор находит все кратчайшие пути от него.",
        b: "Поиск оптимальных маршрутов с помощью алгоритма Дейкстры. В каждом найденном маршруте запоминается несколько шагов — это записывается таблицу. Если у нескольких маршрутов одна и та же метрика — запоминаются все метрики маршрутов и записываются в таблицу.",
        c: "Администратор сети заполняет таблицу маршрутизации, так как алгоритм всё ещё не может сравниться с качеством выполнения человека",
        d: "Поиск оптимальных маршрутов с помощью алгоритма Дейкстры. В каждом найденном маршруте запоминается один шаг — к следующему маршрутизатору это записывается в таблицу. Если несколько маршрутов имеют одну и ту же метрику — запоминаются первые шаги этих маршрутов",
        correct: "d",
    },
    {
        question: "Пердположим существует два маршрута с метриками 1 и 2, две трети трафика будет направлено по первому, а треть — по второму, уберите лишний вариант ответа",
        a: "Отказ одного из маршрутизаторов вызовет перемаршрутизацию лишь части трафика, что существенно сгладит нежелательные эффекты",
        b: "От этого уменьшеньшиться среднея задержка прохождения дейтаграмм между отправителем и получателем",
        c: "Позволяет отправлять одно сообщение в два потока, ускоряя его доставку",
        d: "От этого уменьшеньшиться колебания значений средней задержки",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы правильно ответили на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Занаво</button>
            `;
        }
    }
});
ter.addEventListener('click', () => {
    window.location.href = 'teoria.html';
});

anim.onclick=function(){if(!document.getElementById('img')){var image=document.createElement('img');image.id="img";image.src="giffka.gif";document.body.appendChild(image)}
else{
    document.getElementById('img').remove();
}}



  


// function openImageWindow(src) {
//     var image = new Image();
//     image.src = src;
//     var width = image.width;
//     var height = image.height;
//     window.open(src,"Image","width=" + width + ",height=" + height);
//   }
// anim.addEventListener('click', () => { 
//     var win = window.open('','preview',
//     'width=50,height=50,left=0,top=0,screenX=0,screenY=0,resizable=1,scrollbar=0,status=0');
 
//     var winDoc = win.document;
//     if (title == undefined) title = 'My Image, Click to Close';
//     if (alt   == undefined) alt   = 'My Image, Click to Close';
//     var content = '<html><head><title>' + title + '</title>' +
//     			  '<style>body{overflow: hidden;margin:0;}img{border:0;}</style>' +
//     			  '</head><body><a href="javascript:self.close()">' +
//     			  '<img alt="' + alt + '" id="image" src=" + "giffka.gif" + " /></a></body></html>'
//     win.document.write(content);
 
//     winDoc.body.onload = function() {
//     	var obj = winDoc.getElementById('image');
//     	var w = obj.width, h = obj.height;
//     	var iHeight= document.body.clientHeight, iWidth = self.innerWidth;
 
//     	var left = (self.opera ? iWidth : screen.availWidth)/2 - w/2;
//     	var top =  (self.opera ? iHeight : screen.availHeight)/2 - h/2;
//     	win.resizeTo(w+10, h+26);
//     	win.moveTo(left, top);
//     }
 
//     win.onload = winDoc.body.onload; // special for Mozilla
 
//     // !!! Important statement: popup onload won't execute without it!
//     win.document.close();
//     win.focus();});


