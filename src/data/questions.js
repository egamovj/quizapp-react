export const questions = {
    html: [
        {
            id: 1,
            question: "HTML kengaytmasi to'g'ri berilgan qatorni toping?",
            options: [
                "Hyper Type Multi Language",
                "Hyper Type Multiple Language",
                "Hyper Text Markup Language",
                "Home Text Multi Language"
            ],
            answer: "Hyper Text Markup Language",
        },
        {
            id: 2,
            question: "inputga malumotni kiritishni shart qilish uchun qaysi atributdan foydalanamiz?",
            options: ["disabled", "required", "default", "type"],
            answer: "required",
        },
        {
            id: 3,
            question: "HTMLda havola yani link qaysi teg bilan yaratiladi?",
            options: ["a", "p", "i", "button"],
            answer: "a",
        },
        {
            id: 4,
            question: "Qaysi teg yordamida tartibli ro'yhat yaratishimiz mumkin?",
            options: ["td", "ul", "ol", "tr"],
            answer: "ol",
        },
        {
            id: 5,
            question: "link, meta, style va hokazo kabi bosh teglar qaysi teg ichida joylashishi kerak?",
            options: ["section", "div", "body", "head"],
            answer: "head",
        },
        {
            id: 6,
            question: "Web-sahifaning asosiy strukturasini belgilovchi va barcha kodlarni o'z ichiga oluvchi eng katta (ona) teg qaysi?",
            options: ["<body>", "<head>", "<html>", "<structure>"],
            answer: "<html>"
        },
        {
            id: 7,
            question: "HTML hujjati qaysi kengaytma (extension) bilan saqlanishi kerak?",
            options: [".txt", ".web", ".html yoki .htm", ".doc"],
            answer: ".html yoki .htm"
        },
        {
            id: 8,
            question: "Matnni 'abzas' (yangi xatboshi) ko'rinishida yozish uchun qaysi teg ishlatiladi?",
            options: ["<br>", "<p>", "<text>", "<section>"],
            answer: "<p>"
        },
        {
            id: 9,
            question: "Quyidagi sarlavha (heading) teglaridan qaysi biri eng katta o'lchamga ega?",
            options: ["<h6>", "<h3>", "<h2>", "<h1>"],
            answer: "<h1>"
        },
        {
            id: 10,
            question: "Matnni qalin (bold) qilib ko'rsatish uchun qaysi teglar ishlatiladi?",
            options: ["<b> va <strong>", "<i> va <em>", "<mark> va <small>", "<del> va <ins>"],
            answer: "<b> va <strong>"
        },
        {
            id: 11,
            question: "Jadval (table) yaratishda qatorni belgilash uchun qaysi teg ishlatiladi?",
            options: ["<td>", "<th>", "<tr>", "<table>"],
            answer: "<tr>"
        },
        {
            id: 12,
            question: "Description List (ta'rif ro'yxati) yaratishda ishlatiladigan asosiy teglar ketma-ketligi qaysi?",
            options: ["<ul>, <li>", "<ol>, <li>", "<dl>, <dt>, <dd>", "<list>, <item>"],
            answer: "<dl>, <dt>, <dd>"
        },
        {
            id: 13,
            question: "Formada bir nechta elementlarni guruhlash va ularni ramka ichiga olish uchun qaysi teg ishlatiladi?",
            options: ["<fieldset>", "<group>", "<section>", "<div>"],
            answer: "<fieldset>"
        },
        {
            id: 14,
            question: "Foydalanuvchi kiritayotgan ma'lumotga qarab 'takliflar ro'yxati'ni (avtomatik to'ldirish varianti) chiqarish uchun qaysi teg ishlatiladi?",
            options: ["<select>", "<datalist>", "<option>", "<details>"],
            answer: "<datalist>"
        },
        {
            id: 15,
            question: "HTML5 da hujjat turini e'lon qilish (Doctype) qanday yoziladi?",
            options: ["<!DOCTYPE html5>", "<!DOCTYPE html>", "<doctype html>", "<html type='5'>"],
            answer: "<!DOCTYPE html>"
        },
        {
            id: 16,
            question: "Brauzer oynasining sarlavhasida (tab qismida) ko'rinadigan matn qaysi teg ichiga yoziladi?",
            options: ["<meta>", "<header>", "<title>", "<h1>"],
            answer: "<title>"
        },
        {
            id: 17,
            question: "Havola (link) boshqa sahifada emas, aynan yangi oynada (tab) ochilishi uchun <a> tegiga qanday atribut qo'shish kerak?",
            options: ["target='_self'", "target='_blank'", "target='_new'", "window='new'"],
            answer: "target='_blank'"
        },
        {
            id: 18,
            question: "Kimyoviy formulalar (masalan, H₂O) yozishda '2' raqamini pastga tushirish uchun qaysi teg ishlatiladi?",
            options: ["<sup>", "<small>", "<down>", "<sub>"],
            answer: "<sub>"
        },
        {
            id: 19,
            question: "Jadval katakchalarini birlashtirish haqida: Ikki ustunni (column) bitta qilish uchun qaysi atribut ishlatiladi?",
            options: ["rowspan='2'", "colspan='2'", "merge='col'", "col-merge='2'"],
            answer: "colspan='2'"
        },
        {
            id: 20,
            question: "<input type='radio'> ishlatilganda, bir vaqtning o'zida faqat bitta variant tanlanishi uchun nima qilish kerak?",
            options: [
                "Hammasiga required qo'shish kerak",
                "Hammasiga har xil id berish kerak",
                "Hammasiga bir xil name atributini berish kerak",
                "input o'rniga checkbox ishlatish kerak"
            ],
            answer: "Hammasiga bir xil name atributini berish kerak"
        },
        {
            id: 21,
            question: "Sahifaga rasm joylashtirishda, agar rasm yuklanmasa, o'rniga matn chiqishi uchun qaysi atribut ishlatiladi?",
            options: ["title", "src", "href", "alt"],
            answer: "alt"
        },
        {
            id: 22,
            question: "HTML izohlari (comments) qanday sintaksis bilan yoziladi?",
            options: ["/* Bu izoh */", "", "// Bu izoh", "<comment> Bu izoh </comment>"],
            answer: ""
        },
        {
            id: 23,
            question: "Formada ma'lumot jo'natilayotganda qaysi method xavfsizroq hisoblanadi va ma'lumotlar URL manzilida ko'rinmaydi?",
            options: ["GET", "POST", "SUBMIT", "ACTION"],
            answer: "POST"
        },
        {
            id: 24,
            question: "Input maydonida foydalanuvchiga nima yozish kerakligini eslatib turuvchi xira matn qaysi atribut orqali qo'yiladi?",
            options: ["value", "name", "text", "placeholder"],
            answer: "placeholder"
        },
        {
            id: 25,
            question: "Boshqa bir web-sahifani joriy sahifa ichida (oyna ichida oyna) ko'rsatish uchun qaysi teg ishlatiladi?",
            options: ["<window>", "<iframe>", "<embed>", "<link>"],
            answer: "<iframe>"
        },
        {
            id: 26,
            question: "Foydalanuvchi fayl yuklashi uchun input tegining type atributiga qanday qiymat beriladi?",
            options: ["file", "upload", "image", "data"],
            answer: "file"
        },
        {
            id: 27,
            question: "Video uchun 'Play', 'Pause' va ovoz boshqarish tugmalari ko'rinishi uchun qaysi atribut shart?",
            options: ["buttons", "autoplay", "manage", "controls"],
            answer: "controls"
        }

    ],
    css: [
        {
            id: 1,
            question: "CSS qisqartmasining to'liq ma'nosi nima?",
            options: [
                "Computer Style Sheets",
                "Creative Style System",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            id: 2,
            question: "Tashqi (External) CSS faylini HTML hujjatiga ulash uchun qaysi teg ishlatiladi?",
            options: ["<style>", "<script>", "<css>", "<link>"],
            answer: "<link>"
        },
        {
            id: 3,
            question: "Element ichidagi matn rangini o'zgartirish uchun qaysi xususiyat (property) ishlatiladi?",
            options: ["text-color", "font-color", "color", "background-color"],
            answer: "color"
        },
        {
            id: 4,
            question: "ID selektori CSS da qanday belgi bilan ifodalanadi?",
            options: [". (nuqta)", "# (panjara)", "* (yulduzcha)", "@ (kuchukcha)"],
            answer: "# (panjara)"
        },
        {
            id: 5,
            question: "Elementning chegarasi (border) va uning ichidagi mazmun (content) orasidagi masofa nima deb ataladi?",
            options: ["Margin", "Padding", "Border", "Outline"],
            answer: "Padding"
        },
        {
            id: 6,
            question: "margin: 10px 20px; yozuvi nimani anglatadi?",
            options: [
                "Barcha tomonlar 10px va 20px",
                "Yuqori va pastki: 10px, O'ng va chap: 20px",
                "Yuqori va chap: 10px, Pastki va o'ng: 20px",
                "Faqat yuqori qism 10px, qolganlari 20px"
            ],
            answer: "Yuqori va pastki: 10px, O'ng va chap: 20px"
        },
        {
            id: 7,
            question: "Qaysi display xususiyati elementni yangi qatordan boshlanishiga va butun kenglikni egallashiga majbur qiladi?",
            options: ["inline", "inline-block", "block", "none"],
            answer: "block"
        },
        {
            id: 8,
            question: "Elementni ota-ona elementiga nisbatan joylashtirish uchun qaysi position qiymati ishlatiladi (ota-onada relative bo'lsa)?",
            options: ["static", "fixed", "absolute", "sticky"],
            answer: "absolute"
        },
        {
            id: 9,
            question: "Elementni o'z o'qi atrofida aylantirish (rotate) uchun qaysi CSS xususiyati ishlatiladi?",
            options: ["transition", "animation", "transform", "translate"],
            answer: "transform"
        },
        {
            id: 10,
            question: "CSS o'zgarishlarini silliq va vaqt davomida amalga oshirish uchun qaysi xususiyat ishlatiladi?",
            options: ["transform", "transition", "keyframe", "delay"],
            answer: "transition"
        },
        {
            id: 11,
            question: "Quyidagi CSS selektorlaridan qaysi biri eng yuqori ustunlikka (specificity) ega?",
            options: ["div p", ".menu", "#header", "*"],
            answer: "#header"
        },
        {
            id: 12,
            question: "Elementning fon rasmini takrorlanmasligini ta'minlash uchun qaysi kod yoziladi?",
            options: [
                "background-repeat: no-repeat;",
                "background-size: cover;",
                "background-attachment: fixed;",
                "background-position: center;"
            ],
            answer: "background-repeat: no-repeat;"
        },
        {
            id: 13,
            question: "box-sizing: border-box; xususiyati nima qiladi?",
            options: [
                "Elementga qalin chegara qo'shadi",
                "Padding va Border elementning umumiy o'lchami ichiga olinadi",
                "Elementni quti shaklida ko'rsatadi",
                "Marginlarni avtomatik hisoblaydi"
            ],
            answer: "Padding va Border elementning umumiy o'lchami ichiga olinadi"
        },
        {
            id: 14,
            question: "Sichqoncha element ustiga borganda uning stili o'zgarishi uchun qaysi psevdo-klass ishlatiladi?",
            options: [":active", ":focus", ":hover", ":visited"],
            answer: ":hover"
        },
        {
            id: 15,
            question: "position: fixed; berilgan element sahifada qanday harakatlanadi?",
            options: [
                "Skroll qilinganda ham ekranda joyida qotib turadi",
                "Ota-ona elementiga nisbatan joylashadi",
                "Oddiy oqim bo'yicha joylashadi",
                "Sahifa oxiriga tushib qoladi"
            ],
            answer: "Skroll qilinganda ham ekranda joyida qotib turadi"
        },
        {
            id: 16,
            question: "z-index xususiyati qachon ishlaydi?",
            options: [
                "Har doim barcha elementlarda",
                "Faqat display: block bo'lganda",
                "Position static dan boshqa qiymatda bo'lganda",
                "Faqat rasmlarda"
            ],
            answer: "Position static dan boshqa qiymatda bo'lganda"
        },
        {
            id: 17,
            question: "Blok elementni sahifa o'rtasiga (gorizontal) joylashtirishning eng mashhur usuli qaysi?",
            options: ["text-align: center;", "margin: 0 auto;", "padding: 50%;", "float: center;"],
            answer: "margin: 0 auto;"
        },
        {
            id: 18,
            question: "CSS da padding: 10px 20px 15px; yozilsa, chap tomon (left) padding qanchaga teng?",
            options: ["10px", "20px", "15px", "0px"],
            answer: "20px"
        },
        {
            id: 19,
            question: "transform: scale(1.5); kodi elementga qanday ta'sir qiladi?",
            options: [
                "1.5 gradusga buradi",
                "1.5 pikselga suradi",
                "O'z o'lchamidan 1.5 barobar kattalashtiradi",
                "Shaffofligini oshiradi"
            ],
            answer: "O'z o'lchamidan 1.5 barobar kattalashtiradi"
        },
        {
            id: 20,
            question: "Animatsiyani cheksiz davom ettirish uchun animation-iteration-count ga qanday qiymat beriladi?",
            options: ["forever", "loop", "infinite", "always"],
            answer: "infinite"
        },
        {
            id: 21,
            question: "Ranglarni shaffoflik (transparency) bilan belgilash uchun qaysi format ishlatiladi?",
            options: ["rgb()", "rgba()", "hex", "hsl"],
            answer: "rgba()"
        },
        {
            id: 22,
            question: "width: 200px va padding: 20px bo'lsa (content-box), umumiy kenglik qancha bo'ladi?",
            options: ["200px", "220px", "240px", "180px"],
            answer: "240px"
        },
        {
            id: 23,
            question: "Nega tashqi CSS (External) eng yaxshi usul hisoblanadi?",
            options: [
                "Kodning qayta ishlatilishi va yuklanish tezligi uchun",
                "Ranglarni chiroyliroq chiqaradi",
                "HTML fayl hajmini oshiradi",
                "Faqat shu usulda animatsiya qilish mumkin"
            ],
            answer: "Kodning qayta ishlatilishi va yuklanish tezligi uchun"
        },
        {
            id: 24,
            question: "position: absolute; bo'lgan element kimga nisbatan joylashadi?",
            options: [
                "Har doim body ga nisbatan",
                "Eng yaqin pozitsiyalangan (non-static) ota-onaga nisbatan",
                "Faqat o'zidan oldingi elementga",
                "Brauzer oynasiga"
            ],
            answer: "Eng yaqin pozitsiyalangan (non-static) ota-onaga nisbatan"
        },
        {
            id: 25,
            question: "CSS da @keyframes nimani aniqlash uchun ishlatiladi?",
            options: [
                "Mobil o'lchamlarni",
                "Shrift turlarini",
                "Animatsiya qadamlari va holatlarini",
                "Ranglar palitrasini"
            ],
            answer: "Animatsiya qadamlari va holatlarini"
        }
    ],
    js: [
        {
            id: 1,
            question: "JavaScriptda o'zgaruvchi nima?",
            options: ["Funksiya", "Ma'lumot saqlovchi konteyner", "Operator", "Sikl"],
            answer: "Ma'lumot saqlovchi konteyner"
        },
        {
            id: 2,
            question: "JavaScriptda o'zgaruvchini e'lon qilish uchun qaysi kalit so'zlar mavjud?",
            options: ["var, let, const", "int, string, bool", "define, set", "new, this"],
            answer: "var, let, const"
        },
        {
            id: 3,
            question: "Qaysi kalit so'z orqali e’lon qilingan o'zgaruvchining qiymatini o'zgartirib bo'lmaydi?",
            options: ["var", "let", "const", "dynamic"],
            answer: "const"
        },
        {
            id: 4,
            question: "Quyidagi kod natijasi nima bo'ladi?\nconst x = 10;\nx = 20;",
            options: ["20", "undefined", "x o'zgaradi", "xato (error)"],
            answer: "xato (error)"
        },
        {
            id: 5,
            question: "const bilan massiv e’lon qilinsa, massiv elementini o'zgartirish mumkinmi?",
            options: ["yo'q", "faqat 1 marta", "ha", "faqat push bilan"],
            answer: "ha"
        },
        {
            id: 6,
            question: "Hoisting hodisasi nima?",
            options: ["Kodni optimizatsiya qilish", "O'zgaruvchini yuqoriga ko'tarish", "Funksiyani o'chirish", "Xotira tozalash"],
            answer: "O'zgaruvchini yuqoriga ko'tarish"
        },
        {
            id: 7,
            question: "Qaysi kalit so'z bilan e’lon qilinganda hoisting hodisasi sodir bo'ladi?",
            options: ["let", "const", "var", "arrow"],
            answer: "var"
        },
        {
            id: 8,
            question: "Quyidagi kod natijasi nima bo'ladi?\nconsole.log(a);\nvar a = 5;",
            options: ["5", "undefined", "error", "null"],
            answer: "undefined"
        },
        {
            id: 9,
            question: "Quyidagi kod natijasi nima bo'ladi?\nconsole.log(b);\nlet b = 5;",
            options: ["5", "undefined", "error", "null"],
            answer: "error"
        },
        {
            id: 10,
            question: "Kalit so'zlarning qaysi biri ishlatishda tavsiya etiladi?",
            options: ["hamma joyda var", "faqat var", "let va const", "faqat let"],
            answer: "let va const"
        },
        {
            id: 11,
            question: "Qaysi holatda const ishlatish eng to'g'ri hisoblanadi?",
            options: ["qiymat o'zgaradigan bo'lsa", "doimiy qiymat bo'lsa", "sikl ichida", "har doim"],
            answer: "doimiy qiymat bo'lsa"
        },
        {
            id: 12,
            question: "JavaScriptda nechta asosiy primitive data type mavjud?",
            options: ["5", "6", "7", "8"],
            answer: "7"
        },
        {
            id: 13,
            question: "Quyidagilardan qaysi biri primitive type'ga kiradi?",
            options: ["object", "array", "function", "string"],
            answer: "string"
        },
        {
            id: 14,
            question: "JavaScriptda object bo'lmagan type qaysi?",
            options: ["array", "function", "object", "number"],
            answer: "number"
        },
        {
            id: 15,
            question: "Quyidagilardan qaysi biri string?",
            options: ["123", "true", "\"123\"", "null"],
            answer: "\"123\""
        },
        {
            id: 16,
            question: "Template literal qaysi belgida yoziladi?",
            options: ["' '", "\" \"", "` `", "( )"],
            answer: "` `"
        },
        {
            id: 17,
            question: "JavaScriptda butun va kasr sonlar alohidami?",
            options: ["ha", "yo'q", "faqat integer bor", "faqat float bor"],
            answer: "yo'q"
        },
        {
            id: 18,
            question: "NaN nimani bildiradi?",
            options: ["nol", "xato", "number emas", "undefined"],
            answer: "number emas"
        },
        {
            id: 19,
            question: "Boolean type nechta qiymatga ega?",
            options: ["1", "2", "3", "cheksiz"],
            answer: "2"
        },
        {
            id: 20,
            question: "Quyidagi ifoda natijasi nima?\nBoolean(0)",
            options: ["true", "false", "null", "undefined"],
            answer: "false"
        },
        {
            id: 21,
            question: "undefined nimani bildiradi?",
            options: ["qiymat yo'q", "nol", "xato", "obyekt"],
            answer: "qiymat yo'q"
        },
        {
            id: 22,
            question: "null nima degani?",
            options: ["xato", "qiymat berilmagan", "ataylab bo'sh qiymat", "nol"],
            answer: "ataylab bo'sh qiymat"
        },
        {
            id: 23,
            question: "Quyidagi kod natijasi nima?\nlet x;\nconsole.log(x);",
            options: ["null", "error", "undefined", "0"],
            answer: "undefined"
        },
        {
            id: 24,
            question: "typeof operatori nima qiladi?",
            options: ["qiymatni o'zgartiradi", "turini aniqlaydi", "solishtiradi", "o'chiradi"],
            answer: "turini aniqlaydi"
        },
        {
            id: 25,
            question: "Quyidagi kod natijasi nima?\ntypeof \"hello\"",
            options: ["string", "text", "object", "undefined"],
            answer: "string"
        },
        {
            id: 26,
            question: "Object qanday qavs bilan yaratiladi?",
            options: ["[]", "()", "{}", "<>"],
            answer: "{}"
        },
        {
            id: 27,
            question: "Symbol ma’lumot turi nima uchun ishlatilinadi?",
            options: ["matn saqlash", "noyob qiymat yaratish", "son saqlash", "massiv yaratish"],
            answer: "noyob qiymat yaratish"
        },
        {
            id: 28,
            question: "Quyidagi kod natijasi nima?\ntypeof []",
            options: ["array", "object", "list", "undefined"],
            answer: "object"
        },
        {
            id: 29,
            question: "Quyidagi kod natijasi nima?\ntypeof function(){}",
            options: ["function", "object", "method", "undefined"],
            answer: "function"
        },
        {
            id: 30,
            question: "Quyidagi kod natijasi nima?\n\"5\" + 2",
            options: ["7", "52", "error", "NaN"],
            answer: "52"
        },
        {
            id: 31,
            question: "Quyidagi kod natijasi nima?\n\"5\" - 2",
            options: ["3", "52", "error", "NaN"],
            answer: "3"
        },
        {
            id: 32,
            question: "Qoldiqni qaytaruvchi operator qaysi?",
            options: ["/", "%", "*", "**"],
            answer: "%"
        },
        {
            id: 33,
            question: "Qaysi operator faqat qiymatni tekshiradi?",
            options: ["=", "===", "==", "!="],
            answer: "=="
        },
        {
            id: 34,
            question: "Quyidagi kod natijasi nima?\n5 == \"5\"",
            options: ["true", "false", "error", "undefined"],
            answer: "true"
        },
        {
            id: 35,
            question: "Quyidagilardan qaysi biri mantiqiy AND operatori?",
            options: ["||", "&&", "!", "??"],
            answer: "&&"
        },
        {
            id: 36,
            question: "Quyidagi kod natijasi nima?\ntrue && false",
            options: ["true", "false", "null", "undefined"],
            answer: "false"
        },
        {
            id: 37,
            question: "Quyidagi kod natijasi nima?\n0 && \"hello\"",
            options: ["\"hello\"", "true", "0", "false"],
            answer: "0"
        },
        {
            id: 38,
            question: "Quyidagi kod natijasi nima?\nlet x = 5;\nx += 3;",
            options: ["3", "5", "8", "error"],
            answer: "8"
        },
        {
            id: 39,
            question: "Quyidagilardan qaysi biri falsy qiymat?",
            options: ["\"0\"", "[]", "{}", "0"],
            answer: "0"
        },
        {
            id: 40,
            question: "Quyidagi kod natijasi nima?\nif (\"hello\") { console.log(\"OK\"); }",
            options: ["hech narsa", "error", "OK", "false"],
            answer: "OK"
        },
        {
            id: 41,
            question: "if operatori nima uchun ishlatiladi?",
            options: ["sikl", "shart tekshirish", "funksiya", "massiv"],
            answer: "shart tekshirish"
        },
        {
            id: 42,
            question: "if uchun qaysi sintaksis to'g'ri?",
            options: ["if x > 5", "if (x > 5)", "if x > 5 then", "if {x > 5}"],
            answer: "if (x > 5)"
        },
        {
            id: 43,
            question: "Bir nechta shartni tekshirish uchun qaysi ishlatiladi?",
            options: ["else", "else if", "switch", "while"],
            answer: "else if"
        },
        {
            id: 44,
            question: "switch asosan nima uchun ishlatiladi?",
            options: ["sikl", "ko'p if yozmaslik", "massiv", "funksiya"],
            answer: "ko'p if yozmaslik"
        },
        {
            id: 45,
            question: "switch'da break operatori bo'lmasa nima bo'ladi?",
            options: ["xato", "faqat 1 case", "keyingi case’lar ham bajariladi", "to'xtaydi"],
            answer: "keyingi case’lar ham bajariladi"
        },
        {
            id: 46,
            question: "Sikllar nima uchun ishlatiladi?",
            options: ["shart", "takrorlash", "funksiya", "object"],
            answer: "takrorlash"
        },
        {
            id: 47,
            question: "Shart asosida ishlaydigan sikllar qaysi?",
            options: ["for", "while", "do…while", "hammasi"],
            answer: "hammasi"
        },
        {
            id: 48,
            question: "for siklining to'g'ri sintaksisi qaysi?",
            options: ["for i = 0", "for (let i=0; i<5; i++)", "for i < 5", "loop(i)"],
            answer: "for (let i=0; i<5; i++)"
        },
        {
            id: 49,
            question: "do…while siklining farqi nimada?",
            options: ["tezroq", "kamida 1 marta bajariladi", "faqat boolean", "for o'rnida"],
            answer: "kamida 1 marta bajariladi"
        },
        {
            id: 50,
            question: "break operatori nima qiladi?",
            options: ["qayta boshlaydi", "to'xtatadi", "faqat if", "xato"],
            answer: "to'xtatadi"
        },
        {
            id: 51,
            question: "continue operatori nima qiladi?",
            options: ["to'xtatadi", "boshidan boshlaydi", "joriy iteratsiyani o'tkazadi", "sekinlashtiradi"],
            answer: "joriy iteratsiyani o'tkazadi"
        },
        {
            id: 52,
            question: "Funksiya nima?",
            options: ["data type", "qayta ishlatiladigan kod", "shart", "sikl"],
            answer: "qayta ishlatiladigan kod"
        },
        {
            id: 53,
            question: "Funksiya e’lon qilish kalit so'zi qaysi?",
            options: ["def", "func", "function", "method"],
            answer: "function"
        },
        {
            id: 54,
            question: "Qaysi biri function expression?",
            options: ["function test(){}", "let test = function(){}", "if(){}", "for(){}"],
            answer: "let test = function(){}"
        },
        {
            id: 55,
            question: "Function expression hoisting qilinadimi?",
            options: ["ha", "yo'q", "faqat var", "har doim"],
            answer: "yo'q"
        },
        {
            id: 56,
            question: "Massiv nima?",
            options: ["bitta qiymat", "bir xil tur", "tartibli qiymatlar to'plami", "faqat number"],
            answer: "tartibli qiymatlar to'plami"
        },
        {
            id: 57,
            question: "map va forEach farqi nimada?",
            options: ["map tezroq", "forEach qaytaradi", "map yangi array qaytaradi", "farqi yo'q"],
            answer: "map yangi array qaytaradi"
        },
        {
            id: 58,
            question: "JavaScript single-threaded degani nima?",
            options: ["1 funksiya", "1 call stack", "async yo'q", "DOM yo'q"],
            answer: "1 call stack"
        },
        {
            id: 59,
            question: "Temporal Dead Zone qachon yuz beradi?",
            options: ["var", "let/const oldin murojaat", "funksiya", "global"],
            answer: "let/const oldin murojaat"
        },
        {
            id: 60,
            question: "reduce natijasi nima?\n[1,2,3].reduce((a,b)=>a+b)",
            options: ["6", "5", "error", "undefined"],
            answer: "6"
        }
    ]
};
