function add(){
    var act = 0;
    var b = 0;

    act = f.ddd.value;
    b = act.charAt(act.length-1);

    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.add.value = act.substring(0, act.length-1);
        f.add.value +='+';
    }else{
        f.add.value +='+';
    }
}

function sub(){
    var act = 0;
    var b = 0;

    act = f.ddd.value;
    b = act.charAt(act.length-1);

    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.add.value = act.substring(0, act.length-1);
        f.add.value +='-';
    }else{
        f.add.value +='-';
    }
}

function di(){
    var act = 0;
    var b = 0;

    act = f.ddd.value;
    b = act.charAt(act.length-1);

    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.add.value = act.substring(0, act.length-1);
        f.add.value +='/';
    }else{
        f.add.value +='/';
    }
}

function mul(){
    var act = 0;
    var b = 0;

    act = f.ddd.value;
    b = act.charAt(act.length-1);

    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.add.value = act.substring(0, act.length-1);
        f.add.value +='*';
    }else{
        f.add.value +='*';
    }
}