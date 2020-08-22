
var sign = "X";
var disp = document.getElementById("result");

function press(num)
{
   var show = document.getElementById('p'+num).innerText = sign;
    //console.log(show);
    signO();
    win_check();
    disp.innerHTML="<center>"+ sign + " Turn "+"</center>";
    
}

function signO()
{
    if(sign == "X")
    {
        sign = "O";
    }
    else
    {
        sign = "X";
    }
}
function box_value(no)
{
    return document.getElementById('p'+no).innerText;
}
function check_box(a,b,c,s)
{
    if(box_value(a)==s && box_value(b)==s && box_value(c)==s)
    {
        return true;
    }else
    {
        return false;
    }
}
function win_check()
{
    if(check_box(1,2,3, sign) || check_box(4,5,6, sign) || check_box(7,8,9, sign) ||check_box(1,4,7, sign) || check_box(2,5,8, sign) ||
    check_box(3,6,9, sign) || check_box(1,5,9, sign) || check_box(3,5,7, sign))
    {
        alert("win game");
        disp.innerHTML = "<center>" + sign + " win the game" + "</center>";
        
        throw ("Game End");
    } else
    {
        if(box_value(1)!="" && box_value(2)!="" && box_value(3)!="" && box_value(4)!="" && box_value(5)!="" &&
        box_value(6)!="" && box_value(7)!="" && box_value(8)!="" && box_value(9)!="")
        {
            alert("Game Tie");
            disp.innerHTML = "<center>" + " Game Tie" + "</center>";
             throw("its a Tie");
        }
    }
    
}
