const value = document.getElementById('textarea');



function f1(e){
    if(textarea.style.fontWeight == 'bold'){
        textarea.style.fontWeight = 'normal';
    }else{
        textarea.style.fontWeight ='bold';
    }
}
function f2(e){
    if(textarea.style.fontStyle == 'italic'){
        textarea.style.fontStyle = 'normal';
    }else{
        textarea.style.fontStyle ='italic';
    }
}
function f3(e){
    if(textarea.style.textDecoration == 'underline'){
        textarea.style.textDecoration = 'none';
    }else{
        textarea.style.textDecoration ='underline';
    }
}
function f4(e){
    textarea.style.textAlign='left';
}
function f5(e){
    
        textarea.style.textAlign='center';
  
}
function f6(e){
    textarea.style.textAlign='right';
}

function f7(e){
    let value = e.value;
    textarea.style.fontSize = value + 'px';
}
function f8(e){
    let value = e.value;
    textarea.style.color = value;
}