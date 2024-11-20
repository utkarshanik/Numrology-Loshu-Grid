let slide_i=0;
slide_img();

function plusSlides(n)
{
    slide_img(slide_i += n)
}

function slide_img()
{
let i;
    let sliderrr= document.getElementsByClassName("img");
    for(i=0;i<sliderrr.length;i++)
    {
    sliderrr[i].style.display = "none";
    }
    slide_i++;

    if(slide_i > sliderrr.length)
        {slide_i=1}
    // if(n<1)
    //     {slide_i=sliderrr.length}

    sliderrr[slide_i-1].style.display="block";
    // slide_i=(slide_i+1) % sliderrr.children.length;
    // sliderrr.style.transform=`translateX(-${slide_i*100}%)`;    
    setTimeout(slide_img,1500);
}
