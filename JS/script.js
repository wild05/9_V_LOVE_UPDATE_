// var all_cards = document.querySelector;
// var man_card_img = document.querySelectorAll('.man_card_img');
// var man_card__title = document.querySelectorAll('.man_card__title');
// var wooman_card_img = document.querySelectorAll('.wooman_card_img');
// var wooman_card__title = document.querySelectorAll('.wooman_card__title');
// var wooman_card__title = document.querySelector('.Random_card_img');
// var wooman_card__title = document.querySelector('.Random_card_title');
let woomans_img = [
document.querySelector(".didi_card_img").getAttribute('src'),
document.querySelector(".farik_card_img").getAttribute('src'),
document.querySelector(".seva_card_img").getAttribute('src'),
document.querySelector(".diyanka_card_img").getAttribute('src'),
document.querySelector(".papu_card_img").getAttribute('src'),
document.querySelector(".nastya_card_img").getAttribute('src'),
document.querySelector(".mali_card_img").getAttribute('src'),
document.querySelector(".yawa_card_img").getAttribute('src'),
document.querySelector(".muni_card_img").getAttribute('src'),
document.querySelector(".mali_m_card_img").getAttribute('src'),
document.querySelector(".alina_card_img").getAttribute('src'),
document.querySelector(".katya_card_img").getAttribute('src'),
document.querySelector(".yana_card_img").getAttribute('src'),
document.querySelector(".shaxri_card_img").getAttribute('src'),
document.querySelector(".madi_card_img").getAttribute('src'),
document.querySelector(".vera_card_img").getAttribute('src'),
document.querySelector(".shika_card_img").getAttribute('src'),
document.querySelector(".asisi_card_img").getAttribute('src')
];

let woomans_title = [
    document.querySelector(".didi_card_title").innerHTML,
    document.querySelector(".farik_card_title").innerHTML,
    document.querySelector(".seva_card_title").innerHTML,
    document.querySelector(".diyanka_card_title").innerHTML,
    document.querySelector(".papu_card_title").innerHTML,
    document.querySelector(".nastya_card_title").innerHTML,
    document.querySelector(".mali_card_title").innerHTML,
    document.querySelector(".yawa_card_title").innerHTML,
    document.querySelector(".muni_card_title").innerHTML,
    document.querySelector(".mali_m_card_title").innerHTML,
    document.querySelector(".alina_card_title").innerHTML,
    document.querySelector(".katya_card_title").innerHTML,
    document.querySelector(".yana_card_title").innerHTML,
    document.querySelector(".shaxri_card_title").innerHTML,
    document.querySelector(".madi_card_title").innerHTML,
    document.querySelector(".vera_card_title").innerHTML,
    document.querySelector(".shika_card_title").innerHTML,
    document.querySelector(".asisi_card_title").innerHTML
];
// console.log(womans[Ranmdom(0, 17)]);
let mans_img = [
    document.querySelector(".fazl_card_img").getAttribute('src'),
    document.querySelector(".abbi_card_img").getAttribute('src'),
    document.querySelector(".sancho_card_img").getAttribute('src'),
    document.querySelector(".qaxa_card_img").getAttribute('src'),
    document.querySelector(".xasan_card_img").getAttribute('src'),
    document.querySelector(".xusan_card_img").getAttribute('src'),
    document.querySelector(".donik_card_img").getAttribute('src'),
    document.querySelector(".elik_card_img").getAttribute('src'),
    document.querySelector(".vlad_card_img").getAttribute('src'),
    document.querySelector(".donik_k_card_img").getAttribute('src'),
    document.querySelector(".bexa_card_img").getAttribute('src'),
    document.querySelector(".rus_card_img").getAttribute('src'),
    document.querySelector(".xurka_card_img").getAttribute('src'),
    document.querySelector(".xamid_card_img").getAttribute('src'),
    document.querySelector(".kama_card_img").getAttribute('src'),
    document.querySelector(".wild_card_img").getAttribute('src'),
    document.querySelector(".java_card_img").getAttribute('src'),
    document.querySelector(".shoxa_card_img").getAttribute('src')
];

let mans_title = [
    document.querySelector(".fazl_card_title").innerHTML,
    document.querySelector(".abbi_card_title").innerHTML,
    document.querySelector(".sancho_card_title").innerHTML,
    document.querySelector(".qaxa_card_title").innerHTML,
    document.querySelector(".xasan_card_title").innerHTML,
    document.querySelector(".xusan_card_title").innerHTML,
    document.querySelector(".donik_card_title").innerHTML,
    document.querySelector(".elik_card_title").innerHTML,
    document.querySelector(".vlad_card_title").innerHTML,
    document.querySelector(".donik_k_card_title").innerHTML,
    document.querySelector(".bexa_card_title").innerHTML,
    document.querySelector(".rus_card_title").innerHTML,
    document.querySelector(".xurka_card_title").innerHTML,
    document.querySelector(".xamid_card_title").innerHTML,
    document.querySelector(".kama_card_title").innerHTML,
    document.querySelector(".wild_card_title").innerHTML,
    document.querySelector(".java_card_title").innerHTML,
    document.querySelector(".shoxa_card_title").innerHTML
];
// console.log(mans[Ranmdom(0, 17)]);
// console.log(womans[0]);
// let Random_card_1 = document.querySelector(".Random_card_1");
// let Random_card_2 = document.querySelector(".Random_card_2");
var button = document.querySelector(".Random_button");
button.addEventListener('click', function RanDomCardManWoman() {
    function Random(min = 0, max = 18) {
        let num = Math.floor(Math.random() * (max + 1 - min) + min);
        return num;
    }
    var random__num_one = Random(0, 17);
    var random__num_two = Random(0, 17);
    // var div = document.createElement('div');
    // div.setAttribute(`class="card col-4 card_man"`);
    // var img = element.appendChild(img);
    // img.setAttribute("card_img man_card_img");
    if ( mans_img[16] != woomans_img[16] || mans_title[16] || woomans_title[16]) {
    var mans_Random_title = document.querySelector('.Random_card_title_man');
    var mans_Random_image = document.querySelector('.Random_card_img_man');
    let mans_Random_Old_Img = (mans_Random_image.getAttribute('src'));
    let mans_Random_New_Img = (mans_Random_image.setAttribute('src', mans_img[random__num_one]));
    // document.querySelector('.Random_card_img_man').style.backgroundImage = `${mans_img[random__num_one]}`
    mans_Random_title.innerHTML = mans_title[random__num_one];
    document.querySelector('.Random_card_img_woman').style.backgroundImage = `${woomans_img[random__num_two]}`;
    var womans_Random_title = document.querySelector('.Random_card_title_woman');
    var womans_Random_image = document.querySelector('.Random_card_img_woman');
    let mans_Random_Old_1_Img = (womans_Random_image.getAttribute('src'));
    let mans_Random_New_2_Img = (womans_Random_image.setAttribute('src', woomans_img[random__num_two]));
    womans_Random_title.innerHTML = woomans_title[random__num_two];        
    }
})
// Random_card_1.innerHTML = mans[Ranmdom(0, 17)];
// Random_card_1.innerHTML = womans[Ranmdom(0, 17)];
// let check = 1
// button.addEventListener('click', function stop() {
//     if(check == 1){
//         console.log(check);
//         check = 2
//     }
//     setTimeout(() => {
//         check = 1 
//     }, 20000);
// })