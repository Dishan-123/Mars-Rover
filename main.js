canvas= document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

rover_width=100;

rover_height=90;

backgroung_image="mars.jpg";

rover_image="rover.png";

rover_x=10;

rover_y=10;

function add()
{background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=backgroung_image;

rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;}



    function uploadBackground()
    {ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);}



    function uploadRover()
    {
        ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
    }

window.addEventListener("keydown",mykeydown);

function mykeydown(e)
{keypress=e.keyCode;
console.log(keypress);

if (keypress=="37")
{
    left();
    console.log("left");
}


if (keypress=="38")
{
    up();
    console.log("top");
}


if (keypress=="39")
{
    right();
    console.log("right");
}

if (keypress=="40")
{
    bottom();
    console.log("bottom");
}
}

function left()
{if (rover_x>=0)
{rover_x=rover_x-10;
uploadBackground();
uploadRover();
}

}

function up()
{
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        uploadBackground();
        uploadRover();
    }
}

function right()
{ if (rover_x<=750)
{
    rover_x=rover_x+10;
uploadBackground();
uploadRover();}

}

function bottom()
{
    if (rover_y<=550)
    {
        rover_y=rover_y+10;

        uploadBackground();
        uploadRover();
    }
}