let currentPhoto=0;
let current_thumb_color='black';
let background_color='beige';
let image_text="";
let photo_directory="./elemek/";
let pictures_data=[
    {photo:"20090530_145522MiramareKastely.jpg",title:"Miramare Kastély",description:"Ez a kis kastély kedvence pihenő helye volt Sziszinek és ezért a magyar turisták is gyakran látogatják Olaszországi útjaik során. A parti köveken a vízi madarak vannak előnyben."},
    {photo:"20090530_211434Monselice.jpg",title:"Monselice",description:"Kellemes kisváros Velencéhez közel, ahol zarándokhely is található."},
    {photo:"20090531_131020FirenzeUffizi.jpg",title:"Firenze: Uffici képtár",description:"Firenzében található az Uffici Képtár. A bejutáshoz hosszú sorokat kell végigállnia a kiváncsi turistának."},
    {photo:"20090531_140544FirenzePitti.jpg",title:"Firenze: Pitti ",description:"A Pitti-palota olasz reneszánsz műemlék Firenze történelmi központjában, mely 1982 óta az UNESCO világörökség része."},
    {photo:"20090531_143828FirenzeUffizi.jpg",title:"Firenze: Uffici képtár2",description:"Az Uffizi Képtárat 1581-ben alapították Firenze történelmi központjában. Az első gyűjteményeket a Mediciek bőkezű mecenatúrája hozta létre."},
    {photo:"20090531_154650FirenzeKatedralisEsHarangTorony.jpg",title:"Firenzei katedrális a harangtoronnyal",description:"A firenzei dóm elég érdekes neogót homlokzattal rendelkezik, amelynek mintáját a torony is átvette."},
    {photo:"20090601_114756RomaForumRomanum.jpg",title:"Róma: Forum Romanum",description:"A Forum Romanumnál ókori régészeti maradványokat láthatunk."},
    {photo:"20090601_115930RomaRomulusEsRemus.jpg",title:"Róma: Romulus és Remus szobra ljkjgl fghk mfhm klf dk hnjkhnonj r erer h",description:"Rómában központi helyen áll a hagyomány szerinti városalapítók szobra. A történet igazságáról alatta mindenki elmélázhat. db bd h hdbg kdk jjk njkhkjg hejt njehljen ljen lkethlkehlelh eltkhlekt he hek hk"},
    {photo:"20090601_123440RomaPantheon.jpg",title:"Róma: Pantheon",description:"A Pantheonba nem csak az antik világ nagy embereit temették, hanem a XX. század olasz szocialistáit is megtalálhatjuk."},
    {photo:"20090601_130930RomaAngyalvar.jpg",title:"Róma: Angyalvár",description:"A valamikori pápai fellegvár, ma már múzeumként szolgál Rómában."},
    {photo:"20090601_131948VatikanSzentPeterBazilika.jpg",title:"Vatikán: Szent Péter Bazilika",description:"A katolikus egyház központja, a Pápa székhelye egyben a legmagasabb egyházi épület a világon."},
];
let max_picture_number=1;
let max_window_width=1;
let max_window_height=1;
let main_height=1;
let main_reference_height=1;
let main_reference_width=1;
let main_picture_height=1;
let max_main_picture_width=1;
let arrows_height=1;
let right_arrow_height=1;
let left_arrow_height=1;
let title_text_height=1;
let max_title_height=1;
let description_text_height=1;

let container_height=1;
let thumb_nails_height=1;
let thumb_pictures_height=1;
let title_height=1;
let title_font_height="100%";

function main_picture_draw(picture_target) {
     $(".main_picture").css('max-width',max_main_picture_width); //in order to avoid the horizontal overspread of the main picture 
     $(".main_picture").attr('src',photo_directory+picture_target);
};

screen_adjusting();
set_the_things();
load_and_create_thumb_nails();

function load_and_create_thumb_nails() {
pictures_data.forEach((pict,index) => {
    image_text='<div class="thumbNails"><p class="title" data-index="'+index+'" style="font-size:'+Math.round(title_height/5)+'px">'+pict.title+'</p>';
    image_text=image_text+'<img src="'+photo_directory+pict.photo+'" data-index="'+index+'" alt="'+pict.title+'" class="thumb_pictures" height="'+thumb_pictures_height+'"></div>';
//    console.log(image_text);
    $("container").append(image_text);
    if (index===currentPhoto) {
        $('.thumb_pictures[data-index="'+index+'"]').css('background-color',current_thumb_color);
    } else {
        $('.thumb_pictures[data-index="'+index+'"]').css('background-color',background_color);
    };
});
}

$("container").on('click','.thumb_pictures', function(event) {
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color',background_color);
    currentPhoto=$(event.target).attr('data-index');
    set_the_things();                    
});
$("container").on('click','.title', function(event) {
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color',background_color);
    currentPhoto=$(event.target).attr('data-index');
    set_the_things();                    
});

function set_the_things() {
    if (currentPhoto<0) {currentPhoto=max_picture_number-1} else 
        if (currentPhoto>=max_picture_number) {currentPhoto=0};
    main_picture_draw(pictures_data[currentPhoto].photo);
    $(".title_text").text(pictures_data[currentPhoto].title);
    $(".description_text").text(pictures_data[currentPhoto].description);
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color',current_thumb_color);
};
function screen_adjusting() {
    max_picture_number=pictures_data.length;
    max_window_width=window.innerWidth;
    max_window_height=window.innerHeight;
    main_height=max_window_height*0.8;
    main_reference_height=main_height;
    main_picture_height=main_height;
    max_main_picture_width=Math.round(max_window_width*0.8);
    main_reference_width=Math.round(max_window_width*(0.8-2*0.02))
    arrows_height=main_height;
    arrows_width=(max_window_width*0.1);
    right_arrow_height=arrows_height*0.5;
    left_arrow_height=arrows_height*0.5;
    title_text_height=main_height*0.1;
    description_text_height=main_height*0.2;
    
    container_height=max_window_height-main_height;
    thumb_nails_height=container_height-30; //-30px because of the horizontal scrollbar
    thumb_pictures_height=thumb_nails_height;
    title_height=thumb_nails_height;
/*    $("main").css('height',main_height);*/
/*    $(".main_references").css('height',main_reference_height);*/
    $(".main_picture").css('height',main_picture_height);
/*    $(".arrows").css('height',arrows_height);*/
/*    $("#right_arrow").css('height',right_arrow_height/4);*/
/*    $("#left_arrow").css('height',left_arrow_height/4);*/
/*    $("#right_arrow").css('top',right_arrow_height*0.75);*/
/*    $("#left_arrow").css('top',left_arrow_height*0.75);*/
    $(".title_text").css('height',title_text_height);
    $(".description_text").css('height',description_text_height);
    $(".title_text").css('width',main_reference_width);
    $(".description_text").css('width',main_reference_width);
    $(".title_text").css('top',main_picture_height-title_text_height-description_text_height);
    $(".description_text").css('top',main_picture_height-description_text_height);
/*    $(".title_text").css('left',arrows_width);*/
/*    $(".description_text").css('left',arrows_width);*/
    $(".title_text").css('font-size',(title_text_height/1.3));
    $(".description_text").css('font-size',(description_text_height/3.6));

//    $("container").css('height',container_height);
//    $(".thumbNails").css('height',thumb_nails_height); 
//    $(".thumbNails").css('top',title_height); 
    $('.thumb_pictures').css('height',thumb_pictures_height);
//    $('.title').css('height',title_height); 
//    $(".title").css('overflow-inline',"hidden"); 
    $(".title").css('font-size',Math.round(title_height/3));
    $(".title").css('top',(-title_height));
};
$("#left_arrow").click(() => {
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color',background_color);
    currentPhoto--;
    set_the_things();
});
$("#right_arrow").click(() => {
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color',background_color);
    currentPhoto++;
    set_the_things();
});
window.addEventListener('resize', resizeThingsOnChangeOfWindowSize);
screen.addEventListener('orientationchange',resizeThingsOnChangeOfWindowSize);

function resizeThingsOnChangeOfWindowSize() {
    pictures_data.forEach((pict,index) => {
        $('.thumbNails').remove();
    });
    screen_adjusting();
    set_the_things();
    load_and_create_thumb_nails();
}