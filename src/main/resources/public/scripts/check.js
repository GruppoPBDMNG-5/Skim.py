function checkLongUrl(data) {

    var re = /^(www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if(data.toString().match(re)){
        return true
    } else {
        return false
    }

}

function isABadWord(data) {

    var re = /ahole|anus|ash0le|ash0les|asholes|ass|AssMonkey|Assface|assh0le|assh0lez|asshole|assholes|assholz|asswipe|azzhole|bassterds|bastard|bastards|bastardz|basterds|basterdz|Biatch|bitch|bitches|BlowJob|boffing|butthole|buttwipe|c0ck|c0cks|c0k|CarpetMuncher|cawk|cawks|Clit|cnts|cntz|cock|cockhead|cock-head|cocks|CockSucker|cock-sucker|crap|cum|cunt|cunts|cuntz|dick|dild0|dild0s|dildo|dildos|dilld0|dilld0s|dominatricks|dominatrics|dominatrix|dyke|enema|fuck|fucker|fag|fag1t|faget|fagg1t|faggit|faggot|fagit|fags|fagz|faig|faigs|fart|flippingthebird|fuck|fucker|fuckin|fucking|fucks|FudgePacker|fuk|Fukah|Fuken|fuker|Fukin|Fukk|Fukkah|Fukken|Fukker|Fukkin|g00k|gay|gayboy|gaygirl|gays|gayz|God-damned|h00r|h0ar|h0re|hells|hoar|hoor|hoore|jackoff|jap|japs|jerk-off|jisim|jiss|jizm|jizz|knob|knobs|knobz|kunt|kunts|kuntz|Lesbian|Lezzian|Lipshits|Lipshitz|masochist|masokist|massterbait|masstrbait|masstrbate|masterbaiter|masterbate|masterbates|MothaFucker|MothaFuker|MothaFukkah|MothaFukker|MotherFucker|MotherFukah|MotherFuker|MotherFukkah|MotherFukker|mother-fucker|MuthaFucker|MuthaFukah|MuthaFuker|MuthaFukkah|MuthaFukker|n1gr|nastt|nigger|nigur|niiger|niigr|orafis|orgasim|orgasm|orgasum|oriface|orifice|orifiss|packi|packie|packy|paki|pakie|paky|pecker|peeenus|peeenusss|peenus|peinus|pen1s|penas|penis|penis-breath|penus|penuus|Phuc|Phuck|Phuk|Phuker|Phukker|polac|polack|polak|Poonani|pr1c|pr1ck|pr1k|pusse|pussee|pussy|puuke|puuker|queer|queers|queerz|qweers|qweerz|qweir|recktum|rectum|retard|sadist|scank|schlong|screwing|semen|sex|sexy|Sht|sh1t|sh1ter|sh1ts|sh1tter|sh1tz|shit|shits|shitter|Shitty|Shity|shitz|Shyt|Shyte|Shytty|Shyty|skanck|skank|skankee|skankey|skanks|Skanky|slut|sluts|Slutty|slutz|son-of-a-bitch|tit|turd|va1jina|vag1na|vagiina|vagina|vaj1na|vajina|vullva|vulva|w0p|wh00r|wh0re|whore|xrated|xxx|bch|bitch|blowjob|clit|arschloch|fuck|shit|ass|asshole|btch|b17ch|b1tch|bastard|bich|boiolas|buceta|c0ck|cawk|chink|cipa|clits|cock|cum|cunt|dildo|dirsa|ejakulate|fatass|fcuk|fuk|fux0r|hoer|hore|jism|kawk|l3itch|l3ich|lesbian|masturbate|masterbat|masterbat3|motherfucker|sob|mofo|nazi|nigga|nigger|nutsack|phuck|pimpis|pusse|pussy|scrotum|sht|shemale|shi|sh|slut|smut|teets|tits|boobs|b00bs|teez|testical|testicle|titt|w00se|jackoff|wank|whoar|whore|damn|dyke|fuck|shit|@|amcik|andskota|arse|assrammer|ayir|bi7ch|bitch|bollock|breasts|butt-pirate|cabron|cazzo|chraa|chuj|Cock|cunt|d4mn|daygo|dego|dick|dike|dupa|dziwka|ejackulate|Ekrem|Ekto|enculer|faen|fag|fanculo|fanny|feces|feg|Felcher|ficken|fitt|Flikker|foreskin|Fotze|Fu|fuk|futkretzn|gay|gook|guiena|h0r|h4x0r|hell|helvete|hoer|honkey|Huevon|hui|injun|jizz|kanker|kike|klootzak|kraut|knulle|kuk|kuksuger|Kurac|kurwa|kusi|kyrpa|lesbo|mamhoon|masturbat|merd|mibun|monkleigh|mouliewop|muie|mulkku|muschi|nazis|nepesaurio|nigger|orospu|paska|perse|picka|pierdol|pillu|pimmel|piss|pizda|poontsee|poop|porn|p0rn|pr0n|preteen|pula|pule|puta|puto|qahbeh|queef|rautenberg|schaffer|scheiss|schlampe|schmuck|screw|sht|sharmuta|sharmute|shipal|shiz|skribz|skurwysyn|sphencter|spic|spierdalaj|splooge|suka|b00b|testicle|titt|twat|vittu|wank|wetback|wichser|wop|yed|zabourah/;

    if(data.toString().match(re)) {
        return true
    } else {
        return false
    }

}

function isFull(data) {
    if (document.getElementById("shortLinkLabel").innerHTML == '') {
        document.getElementById("buttonStatistics").style.visibility='hidden'
    } else {
        document.getElementById("buttonStatistics").style.visibility='visible'
    }
}