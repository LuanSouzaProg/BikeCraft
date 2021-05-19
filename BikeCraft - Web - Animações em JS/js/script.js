if(window.SimpleSlide){

    new SimpleSlide({
        slide:"quote",  // nome do atributo data-slide="Digitar o nome desejado".
        time:5000       //tempo de transição dos slides.  Obs : 5000 == 5 sec
    });
    new SimpleSlide({
        slide:"portfolio",
        time:5000,
        nav:true    //Deixa a navegação verdadeira
    });
}

if(window.SimpleAnime){

    new SimpleAnime();
}