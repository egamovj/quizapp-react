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
            question: "HTMLda qatorni bitta pastga tushirish uchun qaysi tegdan foydalanamiz?",
            options: ["hr", "br", "dl", "dt"],
            answer: "br",
        },
        {
            id: 7,
            question: "img tegidagi qaysi atribut rasm ko'rinmasa o'rniga matn chiqaradi?",
            options: ["src", "href", "alt", "data"],
            answer: "alt",
        },
        {
            id: 8,
            question: "HTMLda text ostiga chizish uchun qaysi tegdan foydalanamiz?",
            options: ["u", "i", "del", "sup"],
            answer: "u",
        },
        {
            id: 9,
            question: "Ko'p qatorli matn kiritish maydoni qaysi teg?",
            options: ["div", "input", "placeholder", "textarea"],
            answer: "textarea",
        },
        {
            id: 10,
            question: "Sahifaga rasm joylash uchun qaysi tegdan foydalaniladi?",
            options: ["pic", "img", "gif", "src"],
            answer: "img",
        },
        {
            id: 11,
            question: "Matnni qalin qilish uchun qaysi semantik teg ishlatiladi?",
            options: ["sup", "mark", "strong", "em"],
            answer: "strong",
        }
    ],
    css: [
        {
            id: 1,
            question: "CSS kengaytmasi to'g'ri berilgan qatorni toping?",
            options: [
                "Cascading Style Sheet",
                "Cute Style Sheet",
                "Computer Style Sheet",
                "Codehal Style Sheet",
            ],
            answer: "Cascading Style Sheet",
        },
        {
            id: 2,
            question: "Uzuk chiziqli border qanday yoziladi?",
            options: ["dashed", "solid", "dotted", "textarea"],
            answer: "dashed",
        },
        {
            id: 3,
            question: "Quyidagilardan qaysi biri selector bo'la olmaydi?",
            options: [".title", "h1", "$h1", "#title"],
            answer: "$h1",
        },
        {
            id: 4,
            question: "Nuqtali border qanday yoziladi?",
            options: ["groove", "solid", "dashed", "dotted"],
            answer: "dotted",
        },
        {
            id: 5,
            question: "RGB ranglarini qaysi sonlar orqali berishimiz mumkin?",
            options: ["0-256", "0-255", "0-188", "1-200"],
            answer: "0-255",
        },
        {
            id: 6,
            question: "Matnni katta-kichik qilish uchun qaysi xossa ishlatiladi?",
            options: ["font-weight", "font-style", "font-size", "line-height"],
            answer: "font-size",
        },
        {
            id: 7,
            question: "CSS ni necha xil yo'l bilan HTMLga ulash mumkin?",
            options: ["3", "4", "2", "1"],
            answer: "3",
        },
        {
            id: 8,
            question: "Elementga soya qo'shish uchun qaysi xossa ishlatiladi?",
            options: ["box-shadow", "text-shadow", "border-shadow", "shadow"],
            answer: "box-shadow",
        },
        {
            id: 9,
            question: "Elementning chekkalarini yumaloqlash uchun qaysi xossa?",
            options: ["border-line", "border-radius", "round-border", "curve-border"],
            answer: "border-radius",
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
