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
        strings:["A melhor marcenaria do mundo e estamos prontos para te atender!", "A melhor carpintaria do mundo e estamos prontos para te atender!"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

});

document.write("<h1>Array: "+Array02 +"</h1>");
document.write("<h1>Tamanho: "+Array02.length +"</h1>");


// Define as rotas e suas correspondentes páginas HTML
const routes = {
    '/': 'index.html',
    '/produtos': 'produtos.html',
  };
  
  // Adiciona um listener de eventos para mudança da URL
  window.addEventListener('popstate', () => {
    // Verifica a URL atual
    const path = window.location.pathname;
  
    // Carrega a página HTML correspondente
    const page = routes[path];
    if (page) {
      fetch(page)
        .then(response => response.text())
        .then(html => {
          // Insere o conteúdo da página no elemento com id "app"
          document.getElementById('app').innerHTML = html;
        });
    }
  });
  
  // Função para navegar para uma nova rota
  function navigateTo(path) {
    window.history.pushState(null, null, path);
    // Dispara o evento popstate para carregar a página HTML correspondente
    window.dispatchEvent(new PopStateEvent('popstate'));
  }