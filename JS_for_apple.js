const chooseColor=document.querySelectorAll('.choose_color-btn');
const contentItem=document.querySelectorAll('.content-item');


chooseColor.forEach(function (element){
    element.addEventListener('click',open)
})

function open(event) {
    const target = event.currentTarget; // смотрим по кому нажимаем
    // а именно содержится
    // <button className="choose_color-btn" data-button="color--black">
    //     <img src="images/black_mini.png" alt=""/>
    // </button>
    const button = target.dataset.button;  // выцепляем дата отрибут
    // а именно содержится color--white
    const ContentActive=document.querySelectorAll(`.${button}`);
    // это мы выбираем изоюражения где есть цвет от button
//     NodeList(3) [img.content-item.color--white, img.content-item.color--white, img.content-item.color--white]
//     0
// :
//     img.content-item.color--white
//     1
// :
//     img.content-item.color--white
//     2
// :
//     img.content-item.color--white
//     length
//         :
//         3
//             [[Prototype]]
// :
//     NodeList
    chooseColor.forEach(function (item) {
        item.classList.remove('choose__color-btn--active');
    })
    target.classList.add('choose__color-btn--active');

    contentItem.forEach(function (item) {
        item.classList.remove('content-item__active')
    })

    ContentActive.forEach(function(item){
        item.classList.add('content-item__active')
    })

}