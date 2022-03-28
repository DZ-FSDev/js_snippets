document.addEventListener("DOMContentLoaded", rsQ);
function rsQ(){
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
