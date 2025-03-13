/*
    1.the user name is between 4 and 25 characters
    2.it must start with a letter
    3.it can only contain letters, number , and underscore charachter
    4. it cannot end with an underscore charachter

    str=u__hello__words123
*/

const str = 'u__hello__words123';

const userNameValidation =(str) => {
  if(str.length >=4 && str.length<= 25
     && (/[a-zA-Z]/).test(str.slice(0,1)) // str.charAt(0)
     && (/^[a-zA-Z0-9_]+$/).test(str) // /^[a-zA-Z0-9_]+$/ is for checking alphanumeric and underscore || /^\w+$/
     && str.slice(-1)!== '_' // str.charAt(str.length-1)!== '_'  || (/[a-zA-Z0-9]/).test(str.slice(str.length-1))); 
  ){
    return true;
  }
  return false;
};

console.log(userNameValidation(str));

/*
(/^[a-zA-Z0-9_]+$/).test(str) => izahi
Regex-in hissə-hissə izahı:
1. ^ (Başlanğıc işarəsi)
Bu simvol müqayisənin mütləq mətnin əvvəlindən başlamalı olduğunu bildirir.
Əgər bu simvol olmasa, mətnin istənilən yerində uyğunluq tapıla bilər.
Məsələn:
^abc → "abcde" uyğun gəlir, amma "xabc" uyğun gəlmir.
2. [a-zA-Z0-9_] (İcazə verilən simvollar)
a-z → Kiçik hərfləri əhatə edir (a-dan z-yə kimi).
A-Z → Böyük hərfləri əhatə edir (A-dan Z-yə kimi).
0-9 → Rəqəmləri əhatə edir (0-dan 9-a kimi).
_ → Alt xətt (underscore) simvoluna icazə verir.
Bu bölmə yalnız bu simvollara icazə verir, başqa heç bir simvol uyğun gəlməyəcək.

3. + (Bir və ya daha çox təkrarlanma)
Bu operator, əvvəlində olan [a-zA-Z0-9_] dəstinə aid simvolların bir və ya daha çox dəfə təkrarlanmasına icazə verir.
Yəni:
a, 1, A, _ – uyğun gəlir (çünki ən azı bir simvol var).
abc123_ABC – uyğun gəlir (çünki simvolların hamısı icazə verilənlərdəndir və ən azı bir dəfə mövcuddur).
Boş sətir ("") uyğun gəlmir, çünki + bir simvol tələb edir.
4. $ (Son işarəsi)
Bu simvol uyğunlaşdırmanın mütləq mətnin sonunda bitməli olduğunu bildirir.
Əgər $ olmasaydı, regex istənilən yerində uyğun gələn bir hissəni tapardı.
Məsələn:
abc$ → "abc" uyğun gəlir, amma "abcde" uyğun gəlmir.
*/