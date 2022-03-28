document.addEventListener("DOMContentLoaded", DZrsQ);
document.addEventListener("DOMContentLoaded", DZrsQs);
/**
 * 
 * @author DZ-FSDev
 * @version 0.0.1
 */
function DZrsQ(){
    let $elems = document.getElementsByClassName('RainbowSquare');
    
    for(let $elem of $elems){
        let $phrase = $elem.innerHTML.split(' ');
        $elem.style.paddingRight = '30px';
        $elem.style.lineHeight = '30px';
        $elem.innerHTML = '';
        let $delay = 0;

        for(let $word of $phrase){
            let $e = document.createElement('span');
            $e.innerHTML = $word + ' ';
            $e.style.animationDelay = `${$delay+=0.1}s`;
            $elem.appendChild($e);
        }
    }
}

/**
 * 
 * @author DZ-FSDev
 * @version 0.0.1
 */
function DZrsQs(){
    let $styles = document.createElement('style');
    $styles.type = 'text/css';

    $styles.textContent = 
    `.RainbowSquare span{
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-name: RainbowSquare;
        position: relative;
    }
    
    @keyframes RainbowSquare {
        0%   {color:red; left:0px; top:0px;}
        20%  {color:yellow; left:20px; top:0px;}
        40%  {color:greenyellow; left:20px; top:20px;}
        60%  {color:cyan; left:0px; top:20px;}
        80% {color:plum; left:0px; top:10px;}
        99% {color:red; left:0px; top:0px;}
    }`;

    document.head.appendChild($styles);
}