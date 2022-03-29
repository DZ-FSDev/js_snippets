document.addEventListener("DOMContentLoaded", DZrcC);
document.addEventListener("DOMContentLoaded", DZrcCs);
/**
 * 
 * @author DZ-FSDev
 * @version 0.0.1
 */
function DZrcC(){
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
            $f.innerHTML = $word + ' ';
            $f.style.animationDelay = `${$delay+=0.1}s`;
            $e.style.position = 'relative';
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
function DZrcCs(){
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
        40%   {color:red; transform: rotate(10deg);}
        70%   {color:red; transform: rotate(20deg);}
    }`;

    document.head.appendChild($styles);
}