export const questions = {
  html: [
    {
      id: 1,
      question: "HTML kengaytmasi to'g'ri berilgan qatorni toping?",
      options: [
        "Hyper Type Multi Language",
        "Hyper Type Multiple Language",
        "Hyper Text Markup Language",
        "Home Text Multi Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      id: 2,
      question:
        "inputga malumotni kiritishni shart qilish uchun qaysi atributdan foydalanamiz?",
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
      question:
        "link, meta, style va hokazo kabi bosh teglar qaysi teg ichida joylashishi kerak?",
      options: ["section", "div", "body", "head"],
      answer: "head",
    },
    {
      id: 6,
      question:
        "Web-sahifaning asosiy strukturasini belgilovchi va barcha kodlarni o'z ichiga oluvchi eng katta (ona) teg qaysi?",
      options: ["<body>", "<head>", "<html>", "<structure>"],
      answer: "<html>",
    },
    {
      id: 7,
      question:
        "HTML hujjati qaysi kengaytma (extension) bilan saqlanishi kerak?",
      options: [".txt", ".web", ".html yoki .htm", ".doc"],
      answer: ".html yoki .htm",
    },
    {
      id: 8,
      question:
        "Matnni 'abzas' (yangi xatboshi) ko'rinishida yozish uchun qaysi teg ishlatiladi?",
      options: ["<br>", "<p>", "<text>", "<section>"],
      answer: "<p>",
    },
    {
      id: 9,
      question:
        "Quyidagi sarlavha (heading) teglaridan qaysi biri eng katta o'lchamga ega?",
      options: ["<h6>", "<h3>", "<h2>", "<h1>"],
      answer: "<h1>",
    },
    {
      id: 10,
      question:
        "Matnni qalin (bold) qilib ko'rsatish uchun qaysi teglar ishlatiladi?",
      options: [
        "<b> va <strong>",
        "<i> va <em>",
        "<mark> va <small>",
        "<del> va <ins>",
      ],
      answer: "<b> va <strong>",
    },
    {
      id: 11,
      question:
        "Jadval (table) yaratishda qatorni belgilash uchun qaysi teg ishlatiladi?",
      options: ["<td>", "<th>", "<tr>", "<table>"],
      answer: "<tr>",
    },
    {
      id: 12,
      question:
        "Description List (ta'rif ro'yxati) yaratishda ishlatiladigan asosiy teglar ketma-ketligi qaysi?",
      options: [
        "<ul>, <li>",
        "<ol>, <li>",
        "<dl>, <dt>, <dd>",
        "<list>, <item>",
      ],
      answer: "<dl>, <dt>, <dd>",
    },
    {
      id: 13,
      question:
        "Formada bir nechta elementlarni guruhlash va ularni ramka ichiga olish uchun qaysi teg ishlatiladi?",
      options: ["<fieldset>", "<group>", "<section>", "<div>"],
      answer: "<fieldset>",
    },
    {
      id: 14,
      question:
        "Foydalanuvchi kiritayotgan ma'lumotga qarab 'takliflar ro'yxati'ni (avtomatik to'ldirish varianti) chiqarish uchun qaysi teg ishlatiladi?",
      options: ["<select>", "<datalist>", "<option>", "<details>"],
      answer: "<datalist>",
    },
    {
      id: 15,
      question:
        "HTML5 da hujjat turini e'lon qilish (Doctype) qanday yoziladi?",
      options: [
        "<!DOCTYPE html5>",
        "<!DOCTYPE html>",
        "<doctype html>",
        "<html type='5'>",
      ],
      answer: "<!DOCTYPE html>",
    },
    {
      id: 16,
      question:
        "Brauzer oynasining sarlavhasida (tab qismida) ko'rinadigan matn qaysi teg ichiga yoziladi?",
      options: ["<meta>", "<header>", "<title>", "<h1>"],
      answer: "<title>",
    },
    {
      id: 17,
      question:
        "Havola (link) boshqa sahifada emas, aynan yangi oynada (tab) ochilishi uchun <a> tegiga qanday atribut qo'shish kerak?",
      options: [
        "target='_self'",
        "target='_blank'",
        "target='_new'",
        "window='new'",
      ],
      answer: "target='_blank'",
    },
    {
      id: 18,
      question:
        "Kimyoviy formulalar (masalan, H₂O) yozishda '2' raqamini pastga tushirish uchun qaysi teg ishlatiladi?",
      options: ["<sup>", "<small>", "<down>", "<sub>"],
      answer: "<sub>",
    },
    {
      id: 19,
      question:
        "Jadval katakchalarini birlashtirish haqida: Ikki ustunni (column) bitta qilish uchun qaysi atribut ishlatiladi?",
      options: ["rowspan='2'", "colspan='2'", "merge='col'", "col-merge='2'"],
      answer: "colspan='2'",
    },
    {
      id: 20,
      question:
        "<input type='radio'> ishlatilganda, bir vaqtning o'zida faqat bitta variant tanlanishi uchun nima qilish kerak?",
      options: [
        "Hammasiga required qo'shish kerak",
        "Hammasiga har xil id berish kerak",
        "Hammasiga bir xil name atributini berish kerak",
        "input o'rniga checkbox ishlatish kerak",
      ],
      answer: "Hammasiga bir xil name atributini berish kerak",
    },
    {
      id: 21,
      question:
        "Sahifaga rasm joylashtirishda, agar rasm yuklanmasa, o'rniga matn chiqishi uchun qaysi atribut ishlatiladi?",
      options: ["title", "src", "href", "alt"],
      answer: "alt",
    },
    {
      id: 22,
      question: "HTML izohlari (comments) qanday sintaksis bilan yoziladi?",
      options: [
        "/* Bu izoh */",
        "",
        "// Bu izoh",
        "<comment> Bu izoh </comment>",
      ],
      answer: "",
    },
    {
      id: 23,
      question:
        "Formada ma'lumot jo'natilayotganda qaysi method xavfsizroq hisoblanadi va ma'lumotlar URL manzilida ko'rinmaydi?",
      options: ["GET", "POST", "SUBMIT", "ACTION"],
      answer: "POST",
    },
    {
      id: 24,
      question:
        "Input maydonida foydalanuvchiga nima yozish kerakligini eslatib turuvchi xira matn qaysi atribut orqali qo'yiladi?",
      options: ["value", "name", "text", "placeholder"],
      answer: "placeholder",
    },
    {
      id: 25,
      question:
        "Boshqa bir web-sahifani joriy sahifa ichida (oyna ichida oyna) ko'rsatish uchun qaysi teg ishlatiladi?",
      options: ["<window>", "<iframe>", "<embed>", "<link>"],
      answer: "<iframe>",
    },
    {
      id: 26,
      question:
        "Foydalanuvchi fayl yuklashi uchun input tegining type atributiga qanday qiymat beriladi?",
      options: ["file", "upload", "image", "data"],
      answer: "file",
    },
    {
      id: 27,
      question:
        "Video uchun 'Play', 'Pause' va ovoz boshqarish tugmalari ko'rinishi uchun qaysi atribut shart?",
      options: ["buttons", "autoplay", "manage", "controls"],
      answer: "controls",
    },
  ],
  css: [
    {
      id: 1,
      question: "font-style nima qiladi?",
      options: [
        "Matnga rang beradi",
        "Matnni qalin qiladi",
        "Matnni italic qiladi",
        "Matnga o'lcham beradi",
      ],
      answer: "Matnni italic qiladi",
    },
    {
      id: 2,
      question: "Qaysi qiymat matnni qalin qiladi?",
      options: ["light", "bold", "thin", "small"],
      answer: "bold",
    },
    {
      id: 3,
      question: "Google Fonts ulash uchun qaysi teg ishlatiladi?",
      options: ["<link>", "<script>", "<style>", "<meta>"],
      answer: "<link>",
    },
    {
      id: 4,
      question: "background-image to'g'ri yozilishi qaysi?",
      options: [
        "url('img.jpg')",
        "image('img.jpg')",
        "bg('img.jpg')",
        "src('img.jpg')",
      ],
      answer: "url('img.jpg')",
    },
    {
      id: 5,
      question: "Gradient berish uchun qaysi funksiya ishlatiladi?",
      options: ["color()", "linear-gradient()", "bg-color()", "shade()"],
      answer: "linear-gradient()",
    },
    {
      id: 6,
      question: "background-position: center; nima qiladi?",
      options: [
        "Elemnetni o'ngga suradi",
        "Elemnetni markazga qo'yadi",
        "Elemnetni o'chiradi",
        "Elemnetni kattalashtiradi",
      ],
      answer: "Elemnetni markazga qo'yadi",
    },
    {
      id: 7,
      question: "position: relative nima qiladi?",
      options: [
        "Elementni o'z joyiga nisbatan joylashtiradi",
        "Elementni ekranga yopishadi",
        "Element yo'qoladi",
        "Element fixed bo'ladi",
      ],
      answer: "Elementni o'z joyiga nisbatan joylashtiradi",
    },
    {
      id: 8,
      question: "Flex ishlatish uchun qaysi javob to'g'ri berilgan?",
      options: ["display: flex", "flex: on", "layout: flex", "display: block"],
      answer: "display: flex",
    },
    {
      id: 9,
      question: "justify-content nima qiladi?",
      options: [
        "Elementni vertikal bo'yicha joylashtiradi",
        "Elementni gorizontal bo'yicha joylashtiradi",
        "Elementni rangini o'zgartiradi",
        "Elementni borderini o'zgartiradi",
      ],
      answer: "Elementni gorizontal bo'yicha joylashtiradi",
    },
    {
      id: 10,
      question: "Grid ishlatish uchun qaysi javob to'g'ri berilgan?",
      options: ["display: grid", "grid: on", "layout: grid", "display: flex"],
      answer: "display: grid",
    },
    {
      id: 11,
      question: "gap nima qiladi?",
      options: [
        "Elementga rang beradi",
        "Elementlar orasiga masofa beradi",
        "Elementni o'lchamini o'zgartiradi",
        "Elementni borderini o'zgartiradi",
      ],
      answer: "Elementlar orasiga masofa beradi",
    },
    {
      id: 12,
      question: "CSS variable qanday yoziladi?",
      options: ["$color", "--color", "color-var", "let color"],
      answer: "--color",
    },
    {
      id: 13,
      question: "Variable ishlatish uchun qaysi funksiya ishlatiladi?",
      options: ["use()", "var()", "get()", "call()"],
      answer: "var()",
    },
    {
      id: 14,
      question: "Media query nima uchun ishlatiladi?",
      options: [
        "Saytni animatsiya qilish uchun",
        "Responsive dizayn qilish uchun",
        "Saytni rangini o'zgartirish uchun",
        "Saytni borderini o'zgartirish uchun",
      ],
      answer: "Responsive dizayn qilish uchun",
    },
    {
      id: 15,
      question: "font-weight: 700 nimani bildiradi?",
      options: [
        "Element yupqa bo'ladi",
        "Element qalin bo'ladi",
        "Element italic bo'ladi",
        "Element eng qalin bo'ladi",
      ],
      answer: "Element eng qalin bo'ladi",
    },
    {
      id: 16,
      question: "Google Fonts ishlatishda qaysi property kerak?",
      options: ["font-name", "font-family", "text-font", "style-font"],
      answer: "font-family",
    },
    {
      id: 17,
      question: "background-repeat: no-repeat nima qiladi?",
      options: [
        "Orqa fonni takrorlaydi",
        "Orqa fonni takrorlanishini o'chiradi",
        "Orqa fonni o'chiradi",
        "Orqa fonni kattalashtiradi",
      ],
      answer: "Orqa fonni takrorlanishini o'chiradi",
    },
    {
      id: 18,
      question: "background-size: cover nima qiladi?",
      options: [
        "Orqa fon ekranni kichraytiradi",
        "Orqa fon ekranni to'liq qilib egallaydi",
        "Orqa fon ekranni takrorlaydi",
        "Orqa fon ekranni markazga qo'yadi",
      ],
      answer: "Orqa fon ekranni to'liq qilib egallaydi",
    },
    {
      id: 19,
      question: "position: absolute nimaga nisbatan ishlaydi?",
      options: ["O'z joyiga", "Ota elementga", "Ekranga", "Ishlamaydi"],
      answer: "Ota elementga",
    },
    {
      id: 20,
      question: "align-items: center nima qiladi?",
      options: [
        "Elementni gorizontal bo'yicha markazga joylashtiradi",
        "Elementni vertikal bo'yicha markazga joylashtiradi",
        "Elementni o'ngga qo'yadi",
        "Elementni chapga qo'yadi",
      ],
      answer: "Elementni vertikal bo'yicha markazga joylashtiradi",
    },
    {
      id: 21,
      question: "flex-direction: column nimani bildiradi?",
      options: [
        "Elementni qator bo'yicha joylashtiradi",
        "Elementni ustun bo'yicha joylashtiradi",
        "Elementni grid bo'yicha joylashtiradi",
        "Elementni block bo'yicha joylashtiradi",
      ],
      answer: "Elementni ustun bo'yicha joylashtiradi",
    },
    {
      id: 22,
      question: "Grid dagi 1fr nimani bildiradi?",
      options: ["Pixel", "Foiz", "Fraction", "Auto"],
      answer: "Fraction",
    },
    {
      id: 23,
      question: "CSS variable qayerda e'lon qilinadi?",
      options: ["body ichida", ":root ichida", "html", "div"],
      answer: ":root ichida",
    },
    {
      id: 24,
      question: "position: sticky nima qiladi?",
      options: ["Oddiy", "Scroll paytida yopishadi", "Yo'qoladi", "Absolute"],
      answer: "Scroll paytida yopishadi",
    },
    {
      id: 25,
      question: "display: inline-block nima?",
      options: ["Block + inline", "Faqat inline", "Faqat block", "Flex"],
      answer: "Block + inline",
    },
    {
      id: 26,
      question: "Absolute element parent topilmasa nimaga bog'lanadi?",
      options: ["body ga", "html ga", "viewport ga", "div ga"],
      answer: "viewport ga",
    },
    {
      id: 27,
      question: "Flex'da elementlarni to'liq markazlash uchun nima kerak?",
      options: [
        "justify ishlatiladi",
        "align ishlatiladi",
        "justify + align ikkalasi birga ishlatiladi",
        "gap ishlatiladi",
      ],
      answer: "justify + align ikkalasi birga ishlatiladi",
    },
    {
      id: 28,
      question: "flex-wrap: wrap nima qiladi?",
      options: [
        "Elementni siqadi",
        "Sig'may qolgan elementlarni yangi qatorga o'tkazadi",
        "O'chiradi",
        "Markazlaydi",
      ],
      answer: "Sig'may qolgan elementlarni yangi qatorga o'tkazadi",
    },
    {
      id: 29,
      question: "auto-fill nimani qiladi?",
      options: ["O'chiradi", "Bo'sh joyni to'ldiradi", "Rang beradi", "Margin"],
      answer: "Bo'sh joyni to'ldiradi",
    },
    {
      id: 30,
      question: "linear-gradient(red, blue) nimani bildiradi?",
      options: ["2 rangli gradient", "1 rang", "Rasm", "Xato"],
      answer: "2 rangli gradient",
    },
    {
      id: 31,
      question: "position: fixed + top: 0 nima qiladi?",
      options: [
        "Element pastga tushadi",
        "Element tepada qotib qoladi",
        "Element yo'qoladi",
        "Element markazda bo'ladi",
      ],
      answer: "Element tepada qotib qoladi",
    },
  ],
  js: [
    {
      id: 1,
      question:
        "DOM (Document Object Model) tushunchasiga berilgan eng to'g'ri ta'rifni ko'rsating:",
      options: [
        "Brauzer tomonidan HTML hujjatini tahlil qilishda yaratiladigan ob'ektlar ierarxiyasi",
        "Faqatgina CSS stillarini boshqarish uchun ishlatiladigan JavaScript kutubxonasi",
        "Server bilan ma'lumot almashish uchun ishlatiladigan maxsus protokollardan biri",
        "HTML sahifasidagi matnlarni tahrirlash uchun ishlatiladigan API",
      ],
      answer:
        "Brauzer tomonidan HTML hujjatini tahlil qilishda yaratiladigan ob'ektlar ierarxiyasi",
    },
    {
      id: 2,
      question:
        "getElementsByClassName va querySelectorAll metodlari o'rtasidagi asosiy farq nimada?",
      options: [
        "getElementsByClassName doimiy yangilanib turuvchi HTMLCollection qaytaradi, querySelectorAll esa statik NodeList",
        "querySelectorAll faqat bitta elementni qaytaradi, getElementsByClassName esa barcha elementlarni",
        "getElementsByClassName CSS selektorlari bilan ishlaydi, querySelectorAll esa faqat klasslar bilan",
        "Ularning o'rtasida hech qanday texnik farq mavjud emas",
      ],
      answer:
        "getElementsByClassName doimiy yangilanib turuvchi HTMLCollection qaytaradi, querySelectorAll esa statik NodeList",
    },
    {
      id: 3,
      question: "document.querySelector('.box p') kodi qanday natija beradi?",
      options: [
        "Klassi 'box' bo'lgan element ichidagi barcha <p> teglarini qaytaradi",
        "Klassi 'box' bo'lgan element ichidagi birinchi duch kelgan <p> tegini qaytaradi",
        "Sahifadagi barcha '.box' va barcha 'p' elementlarini yig'adi",
        "Agar element topilmasa, dastur xatolik berib to'xtaydi",
      ],
      answer:
        "Klassi 'box' bo'lgan element ichidagi birinchi duch kelgan <p> tegini qaytaradi",
    },
    {
      id: 4,
      question: "document.getElementById metodi haqida qaysi mulohaza to'g'ri?",
      options: [
        "U bir nechta elementni topishi mumkin, agar ID'lar takrorlangan bo'lsa",
        "U faqat document ob'ektida mavjud bo'lib, ma'lum bir element ichidan qidiruv o'tkazmaydi",
        "U CSS selektorlarini (masalan, #id_name) qabul qiladi",
        "Bu metod har doim HTMLCollection tipidagi ma'lumot qaytaradi",
      ],
      answer:
        "U faqat document ob'ektida mavjud bo'lib, ma'lum bir element ichidan qidiruv o'tkazmaydi",
    },
    {
      id: 5,
      question:
        "innerHTML va textContent xususiyatlari o'rtasidagi asosiy farq nimada?",
      options: [
        "innerHTML faqat matnni o'zgartiradi, textContent esa HTML teglar bilan ishlashga ruxsat beradi",
        "innerHTML xavfsizlik nuqtai nazaridan xavfliroq, chunki u HTML kodini interpretatsiya qiladi",
        "textContent matndagi bo'sh joylarni va CSS orqali yashirilgan matnlarni ko'rsatmaydi",
        "innerHTML faqat o'qish uchun, textContent bilan qiymat yozish mumkin",
      ],
      answer:
        "innerHTML xavfsizlik nuqtai nazaridan xavfliroq, chunki u HTML kodini interpretatsiya qiladi",
    },
    {
      id: 6,
      question:
        "Quyidagi kod bajarilganda nima sodir bo'ladi? element.innerText = '<b>Salom</b>'",
      options: [
        "Sahifada 'Salom' so'zi qalin (bold) shriftda paydo bo'ladi",
        "Sahifada so'zma-so'z '<b>Salom</b>' matni ko'rinadi, teglar ishlamaydi",
        "Brauzer xatolik chiqaradi",
        "Element ichidagi barcha kontent o'chib ketadi va hech narsa ko'rinmaydi",
      ],
      answer:
        "Sahifada so'zma-so'z '<b>Salom</b>' matni ko'rinadi, teglar ishlamaydi",
    },
    {
      id: 7,
      question:
        "innerText va textContent ning ko'rinish (visibility) bo'yicha farqi nimada?",
      options: [
        "innerText CSS'dagi display: none bo'lgan elementlar matnini olmaydi, textContent esa oladi",
        "textContent faqat foydalanuvchiga ko'rinib turgan matnni qaytaradi",
        "Ikkala xususiyat ham CSS stillaridan qat'i nazar bir xil natija beradi",
        "innerText matnni formatlashsiz qaytaradi, textContent esa formatlangan holda",
      ],
      answer:
        "innerText CSS'dagi display: none bo'lgan elementlar matnini olmaydi, textContent esa oladi",
    },
    {
      id: 8,
      question:
        "JS orqali element.style.backgroundColor = 'red' kodi qayerga o'zgarish kiritadi?",
      options: [
        "Tashqi CSS faylidagi .red klassiga",
        "HTML tegining bevosita style atributiga (inline style)",
        "Sahifadagi barcha elementlarning fon rangiga",
        "style tegi ichidagi umumiy qoidalarga",
      ],
      answer: "HTML tegining bevosita style atributiga (inline style)",
    },
    {
      id: 9,
      question: "element.classList.toggle('active') metodining vazifasi nima?",
      options: [
        "Elementga 'active' klassini majburiy ravishda qo'shadi",
        "Agar 'active' klassi bo'lsa uni o'chiradi, bo'lmasa qo'shadi",
        "Elementning barcha klasslarini o'chirib, o'rniga 'active'ni yozadi",
        "'active' klassi bor-yo'qligini tekshirib, true yoki false qaytaradi",
      ],
      answer: "Agar 'active' klassi bo'lsa uni o'chiradi, bo'lmasa qo'shadi",
    },
    {
      id: 10,
      question:
        "Elementning hisoblangan (computed) stillarini olish uchun qaysi funksiya ishlatiladi?",
      options: [
        "element.getStyles()",
        "window.getComputedStyle(element)",
        "element.style.getPropertyValue()",
        "document.css(element)",
      ],
      answer: "window.getComputedStyle(element)",
    },
    {
      id: 11,
      question:
        "Yangi <div> yaratish va unga matn qo'shishning to'g'ri ketma-ketligi qaysi?",
      options: [
        "let d = createElement('div'); d.innerText = 'A';",
        "let d = document.createElement('div'); d.textContent = 'A';",
        "let d = new Div(); d.innerHTML = 'A';",
        "let d = document.add('div'); d.text = 'A';",
      ],
      answer: "let d = document.createElement('div'); d.textContent = 'A';",
    },
    {
      id: 12,
      question:
        "element.append(newChild) va element.appendChild(newChild) o'rtasidagi farq nimada?",
      options: [
        "append bir nechta element yoki matn qo'shishi mumkin, appendChild faqat bitta Node ob'ektini",
        "appendChild elementni boshiga qo'shadi, append esa oxiriga",
        "append metodidan so'ng element qaytariladi, appendChild esa hech narsa",
        "Ularning hech qanday farqi yo'q",
      ],
      answer:
        "append bir nechta element yoki matn qo'shishi mumkin, appendChild faqat bitta Node ob'ektini",
    },
    {
      id: 13,
      question:
        "DOM dan elementni butunlay o'chirib tashlash uchun qaysi metod eng zamonaviy?",
      options: [
        "element.remove()",
        "element.delete()",
        "element.parentElement.removeChild(element)",
        "element.clear()",
      ],
      answer: "element.remove()",
    },
    {
      id: 14,
      question:
        "element.addEventListener('click', func) ning element.onclick = func dan afzalligi?",
      options: [
        "Bitta elementga bir xil turdagi bir nechta hodisa tinglovchilarini biriktirish imkonini beradi",
        "Hodisalarni sekinroq ishlatish orqali xotirani tejaydi",
        "Hodisani faqat bir marta ishlatishni kafolatlaydi",
        "HTML kodining ichida to'g'ridan-to'g'ri yozish imkonini beradi",
      ],
      answer:
        "Bitta elementga bir xil turdagi bir nechta hodisa tinglovchilarini biriktirish imkonini beradi",
    },
    {
      id: 15,
      question: "event.preventDefault() metodining vazifasi nima?",
      options: [
        "Hodisaning yuqori elementlarga tarqalishini (bubbling) to'xtatadi",
        "Brauzerning element uchun standart amalini (masalan, link o'tishi) bekor qiladi",
        "Hodisa tinglovchisini o'chirib tashlaydi",
        "Hodisani darhol asinxron rejimga o'tkazadi",
      ],
      answer:
        "Brauzerning element uchun standart amalini (masalan, link o'tishi) bekor qiladi",
    },
    {
      id: 16,
      question:
        "Event Bubbling (Hodisaning ko'pirishi) tushunchasi nimani anglatadi?",
      options: [
        "Hodisa window elementidan boshlanib, maqsadli elementga qarab harakatlanadi",
        "Hodisa maqsadli elementda sodir bo'lib, bosqichma-bosqich ota-onalariga uzatiladi",
        "Bir vaqtning o'zida barcha elementlarda hodisa sodir bo'lishi",
        "Hodisaning faqat bitta elementda qolib ketishi",
      ],
      answer:
        "Hodisa maqsadli elementda sodir bo'lib, bosqichma-bosqich ota-onalariga uzatiladi",
    },
    {
      id: 17,
      question: "event.stopPropagation() metodi nima uchun xizmat qiladi?",
      options: [
        "Hodisaning brauzer xotirasidan o'chirilishini ta'minlaydi",
        "Hodisaning DOM ierarxiyasi bo'ylab yuqoriga yoki pastga tarqalishini to'xtatadi",
        "Tugmaning bosilishini asinxron qilish uchun ishlatiladi",
        "Faol elementni o'zgartiradi",
      ],
      answer:
        "Hodisaning DOM ierarxiyasi bo'ylab yuqoriga yoki pastga tarqalishini to'xtatadi",
    },
    {
      id: 18,
      question:
        "addEventListener uchinchi parametri { capture: true } bo'lsa nima bo'ladi?",
      options: [
        "Hodisa Bubbling bosqichida ishlaydi",
        "Hodisa Capturing (tutib olish) bosqichida, ya'ni tepadan pastga harakatda ishlaydi",
        "Hodisa o'z-o'zidan bekor qilinadi",
        "Bu xususiyat faqat mobil qurilmalarda ishlaydi",
      ],
      answer:
        "Hodisa Capturing (tutib olish) bosqichida, ya'ni tepadan pastga harakatda ishlaydi",
    },
    {
      id: 19,
      question:
        "localStorage va sessionStorage o'rtasidagi asosiy farq nimada?",
      options: [
        "localStorage ma'lumotlari brauzer yopilgandan keyin ham qoladi, sessionStorage tab yopilishi bilan o'chadi",
        "localStorage faqat matnlarni saqlaydi, sessionStorage esa ob'ektlarni",
        "sessionStorage xotira hajmi bo'yicha localStoragedan ancha kattaroqdir",
        "localStorage ma'lumotlari serverga har bir so'rovda yuboriladi",
      ],
      answer:
        "localStorage ma'lumotlari brauzer yopilgandan keyin ham qoladi, sessionStorage tab yopilishi bilan o'chadi",
    },
    {
      id: 20,
      question: "localStoragega ob'ektni saqlashning to'g'ri usuli qaysi?",
      options: [
        "localStorage.setItem('user', userObekt);",
        "localStorage.setItem('user', JSON.stringify(userObekt));",
        "localStorage.save(userObekt);",
        "localStorage.setItem('user', userObekt.toString());",
      ],
      answer: "localStorage.setItem('user', JSON.stringify(userObekt));",
    },
    {
      id: 21,
      question: "Cookies (kuki) larning asosiy xususiyati va maqsadi nima?",
      options: [
        "Faqat katta hajmdagi rasmlarni saqlash uchun ishlatiladi",
        "Ma'lumotlar HTTP so'rovlari bilan serverga yuboriladi va amal qilish muddati bo'ladi",
        "Ular faqat JavaScript yordamida o'qiladi, server ko'ra olmaydi",
        "Brauzer keshini tozalash uchun ishlatiladigan maxsus fayllar",
      ],
      answer:
        "Ma'lumotlar HTTP so'rovlari bilan serverga yuboriladi va amal qilish muddati bo'ladi",
    },
    {
      id: 22,
      question: "JSON.parse() metodining vazifasi nima?",
      options: [
        "JavaScript ob'ektini JSON formatidagi qatorga aylantirish",
        "JSON formatidagi qatorni JavaScript ob'ektiga aylantirish",
        "Ma'lumotlarni serverga yuborish uchun tayyorlash",
        "JSON faylidagi xatolarni topish va tozalash",
      ],
      answer: "JSON formatidagi qatorni JavaScript ob'ektiga aylantirish",
    },
    {
      id: 23,
      question:
        "Nima uchun JSON formatida funksiyalar yoki undefined saqlash tavsiya etilmaydi?",
      options: [
        "Chunki JSON faqat ma'lumotlar tuzilishini qo'llab-quvvatlaydi; stringify ularni tashlab ketadi",
        "Chunki funksiyalar JSON ichida juda ko'p joy egallaydi",
        "JSON faqat sonlar bilan ishlash uchun yaratilgan",
        "Funksiyalar brauzer xotirasini buzishi mumkin",
      ],
      answer:
        "Chunki JSON faqat ma'lumotlar tuzilishini qo'llab-quvvatlaydi; stringify ularni tashlab ketadi",
    },
    {
      id: 24,
      question: "HTTP protokoli doirasida 'Request' va 'Response' nima?",
      options: [
        "Request – brauzerning serverdan ma'lumot so'rashi, Response – serverning qaytargan natijasi",
        "Request – JS kodi ichidagi xatolik, Response – xatolikni tuzatish",
        "Ikkalasi ham bir xil tushuncha bo'lib, keshda saqlashni bildiradi",
        "Request – foydalanuvchi ma'lumoti, Response – ekran rasmi",
      ],
      answer:
        "Request – brauzerning serverdan ma'lumot so'rashi, Response – serverning qaytargan natijasi",
    },
    {
      id: 25,
      question:
        "HTTP metodlari orasidagi POST va GET ning asosiy farqi nimada?",
      options: [
        "GET ma'lumotlarni olish uchun, POST esa yangi ma'lumot yuborish (yaratish) uchun",
        "POST so'rovlari URL manzilida barcha ma'lumotlarni ko'rsatib yuboradi",
        "GET so'rovining tana qismi (body) bo'ladi, POSTda esa bo'lmaydi",
        "GET xavfsizroq metod hisoblanadi",
      ],
      answer:
        "GET ma'lumotlarni olish uchun, POST esa yangi ma'lumot yuborish (yaratish) uchun",
    },
    {
      id: 26,
      question: "HTTP 404 status kodi nimani anglatadi?",
      options: [
        "Serverda ichki xatolik yuz berdi",
        "So'ralgan resurs topilmadi (Not Found)",
        "So'rov muvaffaqiyatli bajarildi (OK)",
        "Foydalanuvchi tizimga kirmagan",
      ],
      answer: "So'ralgan resurs topilmadi (Not Found)",
    },
    {
      id: 27,
      question: "PUT metodi nima uchun ishlatiladi?",
      options: [
        "Mavjud ma'lumotni butunlay yangilash (almashtirish) uchun",
        "Ma'lumotni o'chirib tashlash uchun",
        "Faqatgina ma'lumotning bir qismini o'zgartirish uchun",
        "Yangilangan keshni tozalash uchun",
      ],
      answer: "Mavjud ma'lumotni butunlay yangilash (almashtirish) uchun",
    },
    {
      id: 28,
      question:
        "JavaScript nega 'Single-threaded' (bir oqimli) til deb ataladi?",
      options: [
        "Chunki u bir vaqtning o'zida faqat bitta amalni bajara oladi",
        "Chunki u faqat bitta kompyuterda ishlay oladi",
        "Chunki unda asinxron kod yozib bo'lmaydi",
        "Chunki u faqat bitta HTML fayliga ulanadi",
      ],
      answer: "Chunki u bir vaqtning o'zida faqat bitta amalni bajara oladi",
    },
    {
      id: 29,
      question: "Promise (Vada) ob'ektining uchta holati (state) qaysilar?",
      options: [
        "Start, Middle, End",
        "Pending (kutilmoqda), Fulfilled (bajarildi), Rejected (rad etildi)",
        "True, False, Null",
        "Loading, Success, Error",
      ],
      answer:
        "Pending (kutilmoqda), Fulfilled (bajarildi), Rejected (rad etildi)",
    },
    {
      id: 30,
      question: "Promise.then() metodi nima uchun ishlatiladi?",
      options: [
        "Xatoliklarni ushlab qolish uchun",
        "Promise muvaffaqiyatli yakunlanganda bajariladigan funksiyani aniqlash uchun",
        "Promiseni darhol to'xtatish uchun",
        "Promiseni o'chiradi",
      ],
      answer:
        "Promise muvaffaqiyatli yakunlanganda bajariladigan funksiyani aniqlash uchun",
    },
    {
      id: 31,
      question: "fetch() funksiyasi qaytaradigan birinchi natija nima bo'ladi?",
      options: [
        "Tayyor JSON ma'lumotlari massivi",
        "Response ob'ekti, undan keyin .json() metodini chaqirish kerak",
        "HTML kodlari to'plami",
        "Xatolik matni",
      ],
      answer: "Response ob'ekti, undan keyin .json() metodini chaqirish kerak",
    },
    {
      id: 32,
      question: "async/await texnologiyasining asosiy maqsadi nima?",
      options: [
        "JavaScriptni ko'p oqimli tilga aylantirish",
        "Asinxron kodni xuddi sinxron kod kabi o'qishli yozish imkonini berish",
        "Barcha operatsiyalarni darhol to'xtatib, serverni kutish",
        "Faqat CSS animatsiyalarni boshqarish",
      ],
      answer:
        "Asinxron kodni xuddi sinxron kod kabi o'qishli yozish imkonini berish",
    },
    {
      id: 33,
      question: "await kalit so'zi qayerda ishlatilishi mumkin?",
      options: [
        "Har qanday funksiya ichida",
        "Faqat async deb e'lon qilingan funksiyalar ichida",
        "Faqat if-else shartlari ichida",
        "Uni ishlatish majburiy emas",
      ],
      answer: "Faqat async deb e'lon qilingan funksiyalar ichida",
    },
    {
      id: 34,
      question:
        "async/await ishlatilganda xatoliklarni qanday ushlash tavsiya etiladi?",
      options: [
        ".then() va .catch() zanjiri orqali",
        "try { ... } catch (error) { ... } bloklari yordamida",
        "if (error) { ... } sharti yordamida",
        "Xatoliklarni ushlashning imkoni yo'q",
      ],
      answer: "try { ... } catch (error) { ... } bloklari yordamida",
    },
    {
      id: 35,
      question: "Promise.all([p1, p2, p3]) metodi qachon natija qaytaradi?",
      options: [
        "Massivdagi barcha promislar muvaffaqiyatli bajarilganda",
        "Massivdagi kamida bitta promise bajarilganda",
        "Faol element o'zgarganda",
        "Ixtiyoriy ravishda 2 soniyadan keyin",
      ],
      answer: "Massivdagi barcha promislar muvaffaqiyatli bajarilganda",
    },
    {
      id: 36,
      question: "API (Application Programming Interface) nima?",
      options: [
        "Bu ma'lumotlar bazasining nomi",
        "Ikki xil dasturning bir-biri bilan muloqot qilishi uchun qoidalar to'plami",
        "Brauzerning kod muharriri",
        "Kompyuterning operatsion tizimi",
      ],
      answer:
        "Ikki xil dasturning bir-biri bilan muloqot qilishi uchun qoidalar to'plami",
    },
    {
      id: 37,
      question:
        "fetch('url', { method: 'POST', body: JSON.stringify(data) }) nima qiladi?",
      options: [
        "URL manzilidan ma'lumotlarni o'chiradi",
        "Ko'rsatilgan URL'ga JSON formatidagi ma'lumotlarni yuboradi",
        "Faqatgina URL'ga ulanishni tekshiradi",
        "Ma'lumotlarni keshga saqlaydi",
      ],
      answer: "Ko'rsatilgan URL'ga JSON formatidagi ma'lumotlarni yuboradi",
    },
    {
      id: 38,
      question:
        "Callback Hell (Kollbek jahannami) muammosi nima bilan hal qilinadi?",
      options: [
        "Ko'proq if shartlari orqali",
        "Promises va Async/Await texnologiyalari orqali",
        "HTML fayllarini ko'paytirish orqali",
        "Sikllarni kamaytirish orqali",
      ],
      answer: "Promises va Async/Await texnologiyalari orqali",
    },
    {
      id: 39,
      question: "response.json() metodi nima qaytaradi?",
      options: [
        "Tayyor JS ob'ektini (lekin u ham Promise bo'ladi)",
        "Matn formatidagi ma'lumotni",
        "Binary (ikkilik) ma'lumotlarni",
        "Faqat status kodini",
      ],
      answer: "Tayyor JS ob'ektini (lekin u ham Promise bo'ladi)",
    },
    {
      id: 40,
      question: "Nima uchun asinxron dasturlash JSda juda muhim?",
      options: [
        "Chunki JS o'yinlar yaratish uchun mo'ljallangan",
        "Uzoq davom etadigan amallar vaqtida interfeys qotib qolmasligi uchun",
        "Chunki u faqat bitta faylda ishlashga ruxsat beradi",
        "Foydalanuvchidan parollarni yashirish uchun",
      ],
      answer:
        "Uzoq davom etadigan amallar vaqtida interfeys qotib qolmasligi uchun",
    },
  ],
};
