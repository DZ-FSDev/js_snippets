document.addEventListener("DOMContentLoaded", DZrtLt);
document.addEventListener("DOMContentLoaded", DZrtLts);
/**
 * 
 * @author DZ-FSDev
 * @version 0.0.1
 */
function DZrtLt(){
    let $elems = document.getElementsByClassName('RainbowCircle');
    
    for(let $elem of $elems){
        let $phrase = $elem.innerHTML.split(' ');
        $elem.style.paddingRight = '30px';
        $elem.style.lineHeight = '30px';
        $elem.innerHTML = '';
        let $delay = 0;

        for(let $word of $phrase){
            let $e = document.createElement('div');
            let $f = document.createElement('span');
            $f.innerHTML = $e.innerHTML = $word + ' ';
            $e.innerHTML += $e.innerHTML;
            $e.style.color = 'transparent';
            $f.style.animationDelay = `${$delay+=0.1}s`;
            //$e.style.position = 'relative';
            $e.appendChild($f);
            $elem.appendChild($e);
        }
    }
}

/**
 * 
 * @author DZ-FSDev
 * @version 0.0.1
 */
function DZrtLts(){
    let $styles = document.createElement('style');
    $styles.type = 'text/css';

    $styles.textContent = 
    `.RainbowCircle div span{
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-name: RainbowCircle;
        position: absolute;
    }
    
    @keyframes RainbowCircle {
        0%   {color:red; transform: rotate(0deg);}
        10%   {color:orange; transform: rotate(2deg);}
        30%   {color:yellowgreen; transform: rotate(4deg);}
        60%   {color:cyan; transform: rotate(16deg);}
        70%   {color:cyan; transform: rotate(-32deg);}
    }`;

    document.head.appendChild($styles);
}