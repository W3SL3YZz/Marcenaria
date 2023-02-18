$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbarReportei').addClass("sticky");
        }else{
            $('.navbarReportei').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Ao MMS!", "A melhor Marcenaria e Carpintaria!"],
         typeSpeed:100,
         backSpeed:100,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["o Reportei e temos a melhor ferramenta para criar gráficos e dashboards!", "o Reportei e vamos aumentar a produtividade da sua empresa!"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

});

document.write("<h1>Array: "+Array02 +"</h1>");
document.write("<h1>Tamanho: "+Array02.length +"</h1>");