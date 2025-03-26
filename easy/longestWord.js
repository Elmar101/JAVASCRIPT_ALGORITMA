/*
    Longest Word in sentence

    1. ignore punctuation and assume sen will not be empty
*/
const sentence = "fun&!! tim....!e ...";
const longestWord = (sentence) => {
  const arr = sentence
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .sort((a, b) => b.length - a.length);
  return arr[0];
};

console.log(longestWord(sentence));

function longestWordReduce(sen) { 
  return sen.match(/w+/g).reduce((item, next) => item.length >= next.length ? item : next);  
}
console.log(longestWordReduce(sentence)); // time
  








/*

Bu JavaScript kodu aşağıdakı şəkildə işləyir:

sentence.replace(/[^a-zA-Z ]/g, "")
Kodun Açıq izahı
Bu kod sentence adlı bir mətnin (string) daxilində olan yalnız ingilis hərflərini (a-z, A-Z) və boşluqları ( ) saxlamaq və 
digər bütün simvolları silmək üçün istifadə olunur.

Kodun Hissə-Hissə Təhlili
1. .replace(...) — Mətni dəyişdirmək üçün
replace(pattern, replacement) metodu verilmiş şablona (pattern) uyğun gələn hissələri tapır və onları göstərilən yeni dəyərlə (replacement) əvəz edir.
Burada **şablon (pattern) [^a-zA-Z ] adlı **regexdir.
2. /[^a-zA-Z ]/g — Regex açıq izahı
/ ... / → Bu regular expression (regex) başlanğıcı və sonunu göstərir.

[^a-zA-Z ] → Bu ifadə ^ işarəsi ilə başlayır, bu da "İnkaretmə" (Negation) deməkdir.

a-z → Kiçik ingilis hərflərinə icazə verir.
A-Z → Böyük ingilis hərflərinə icazə verir.
Boşluq ( ) → Boşluqlara da icazə verir.
[^...] → Bütün bu simvolların əksinə olanları tapır və hədəf seçir.
Yəni, rəqəmlər (0-9), durğu işarələri (.,!?@# və s.), xüsusi simvollar (&*%$ və s.) və başqa hər şey uyğun gələcək və dəyişdiriləcək.
g (global flag) → Bu bütün uyğun gələn halları tapıb dəyişdirməyə imkan verir.

Əgər g olmasa, yalnız ilk uyğunluq dəyişdirilərdi.
3. "" (Boş string) — Əvəzetmə (Replacement)
Regex-in tapdığı bütün uyğunsuz simvollar "" ilə əvəz edilir, yəni silinir.
Misallar
İlkin Mətni (sentence)	Nəticə (sentence.replace(...))	İzah
"Hello, World!"	"Hello World"	, və ! silindi.
"JavaScript123 is awesome!?"	"JavaScript is awesome"	123, !, ? silindi.
"C# & Java are cool!"	"C Java are cool"	#, &, ! silindi.
"Rock&Roll 4ever!"	"RockRoll ever"	&, 4 və ! silindi.
"I love pizza 🍕!!!"	"I love pizza "	🍕 və !!! silindi.
İstifadə Halları
Bu kod əsasən mətnin içindəki xüsusi simvolları və rəqəmləri təmizləmək üçün istifadə olunur. Aşağıdakı hallarda işə yaraya bilər:

İstifadəçi mətnindən rəqəmləri və xüsusi simvolları silmək (məsələn, textarea daxilində).
Natural dil emalı (NLP) üçün təmiz mətn əldə etmək (məsələn, sentiment analizi üçün).
Sadəcə sözlər və boşluqlarla işləmək üçün mətn formatlamaq.
Əgər rəqəmləri də saxlamaq istəsək?
Rəqəmləri saxlamaq üçün 0-9-u icazə verilən simvollara əlavə edə bilərik:

javascript
sentence.replace(/[^a-zA-Z0-9 ]/g, "")
Bu halda yalnız xüsusi simvollar silinəcək, amma rəqəmlər saxlanacaq.
Misal:

javascript
let text = "Price: $100! Discount: 20%";
console.log(text.replace(/[^a-zA-Z0-9 ]/g, ""));
Çıxış: "Price 100 Discount 20"

Nəticə
Bu kod yalnız ingilis hərflərini və boşluqları saxlamaq, digər bütün simvolları silmək üçündür.
Əgər rəqəmlər qalmalıdırsa, 0-9 diapazonunu regex-ə əlavə etmək lazımdır.

Regex ifadəsi olan /\w+/g-ni bir daha sadə və aydın şəkildə izah edim.

Regex ifadəsinin tərkibi:
/ və / - Regex ifadəsini başlatır və bitirir.

\w - Bu xüsusi simvol "word character" (söz simvolu) adlanır və aşağıdakı simvolları ifadə edir:

Böyük və kiçik hərflər: A-Z, a-z

Rəqəmlər: 0-9

Alt xətt: _

Yəni, \w deməkdir: [A-Za-z0-9_]
Edit
[A-Za-z0-9_] Bu o deməkdir ki, söz simvolu hər hansı bir hərf, rəqəm və ya alt xətt ola bilər.

+ - Kvantifikator olub bildirir ki:

Bir və ya daha çox dəfə uyğun gələn simvolları tap.

g (global flag) - Regex ifadəsinin qlobal axtarış etməsini təmin edir:

Yəni, uyğun gələn bütün hissələri tapır, təkcə birinci uyğunluğu deyil.

Misal üzərində izah:
javascript
const text = "Salam dünya_123! Nece işlər?";
const result = text.match(/\w+/g);
console.log(result);
Nəticə:
["Salam", "dünya_123", "Nece", "işlər"]
İzah:
"Salam" - Bütün hərflərdən ibarət olduğu üçün \w+ ilə uyğun gəlir.

"dünya_123" - Həm hərflər, həm rəqəmlər, həm də alt xətt (_) olduğu üçün tam uyğun gəlir.

"Nece" - Yenə də hərflərdən ibarət olduğu üçün uyğun gəlir.

"işlər" - Unicode hərfləri də \w ilə uyğun gəlir.

"!" və "?" - Bu simvollar uyğun gəlmir, çünki onlar söz simvolu deyil.



*/
