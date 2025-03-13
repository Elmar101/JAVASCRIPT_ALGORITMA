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
Copy
Edit
sentence.replace(/[^a-zA-Z0-9 ]/g, "")
Bu halda yalnız xüsusi simvollar silinəcək, amma rəqəmlər saxlanacaq.
Misal:

javascript
Copy
Edit
let text = "Price: $100! Discount: 20%";
console.log(text.replace(/[^a-zA-Z0-9 ]/g, ""));
Çıxış: "Price 100 Discount 20"

Nəticə
Bu kod yalnız ingilis hərflərini və boşluqları saxlamaq, digər bütün simvolları silmək üçündür.
Əgər rəqəmlər qalmalıdırsa, 0-9 diapazonunu regex-ə əlavə etmək lazımdır.

*/
