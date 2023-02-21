
    let navigation = document.querySelector('.navigation');
    console.log(navigation)
    let close = document.querySelector('.close');
    navigation.onclick = function () {
      navigation.classList.add('active');
    }


    //    second action





    //  bookのマークを押したとき
    let catalogue = document.querySelector('.catalogue');


    catalogue.onclick = function () {

      // !で反転させてactiveがふくまれてなければに変える
      if (!navigation.classList.contains('active')  ){
        return;
      }
      // もしactionが含まれていれば
      if (catalogue.classList.contains('action')) {
      // actionをremoveする
        catalogue.classList.remove('action');

      } else {
      //action実行
        catalogue.classList.add('action');
      }

      navi1.classList.remove('open1');
      navi2.classList.remove('open2');
      navi3.classList.remove('open3');
      navi4.classList.remove('open4');
      navi5.classList.remove('open5');
      navi6.classList.remove('open6');
      navi7.classList.remove('open7');
      navi8.classList.remove('open8');
      navi9.classList.remove('open9');
      navi10.classList.remove('open10');
      
      detail1.classList.remove('detail1denote1');
      detail2.classList.remove('detail2denote2');
      detail3.classList.remove('detail3denote3');
      detail4.classList.remove('detail4denote4');
      detail5.classList.remove('detail5denote5');
      detail6.classList.remove('detail6denote6');
      detail7.classList.remove('detail7denote7');
      detail8.classList.remove('detail8denote8');
      detail9.classList.remove('detail9denote9');
      detail10.classList.remove('detail10denote10');

      main.classList.remove('slide');

    }
    // liを押しても巻き戻さないようにする
    let around1 = document.querySelector('.around1');
    let around2 = document.querySelector('.around2');
    let around3 = document.querySelector('.around3');
    let around4 = document.querySelector('.around4');
    let around5 = document.querySelector('.around5');
    let around6 = document.querySelector('.around6');
    let around7 = document.querySelector('.around7');
    let around8 = document.querySelector('.around8');
    let around9 = document.querySelector('.around9');
    let around10 = document.querySelector('.around10');

    // three action
    let main = document.querySelector('.main');

    let navi1 = document.querySelector('.navi1');
    let navi2 = document.querySelector('.navi2');
    let navi3 = document.querySelector('.navi3');
    let navi4 = document.querySelector('.navi4');
    let navi5 = document.querySelector('.navi5');
    let navi6 = document.querySelector('.navi6');
    let navi7 = document.querySelector('.navi7');
    let navi8 = document.querySelector('.navi8');
    let navi9 = document.querySelector('.navi9');
    let navi10 = document.querySelector('.navi10');

    let cataloguemenu1 = document.querySelector('.cataloguemenu1');
    let cataloguemenu2 = document.querySelector('.cataloguemenu2');
    let cataloguemenu3 = document.querySelector('.cataloguemenu3');
    let cataloguemenu4 = document.querySelector('.cataloguemenu4');
    let cataloguemenu5 = document.querySelector('.cataloguemenu5');
    let cataloguemenu6 = document.querySelector('.cataloguemenu6');
    let cataloguemenu7 = document.querySelector('.cataloguemenu7');
    let cataloguemenu8 = document.querySelector('.cataloguemenu8');
    let cataloguemenu9 = document.querySelector('.cataloguemenu9');
    let cataloguemenu10 = document.querySelector('.cataloguemenu10');

    let detail1 = document.querySelector('.detail1');
    let detail2 = document.querySelector('.detail2');
    let detail3 = document.querySelector('.detail3');
    let detail4 = document.querySelector('.detail4');
    let detail5 = document.querySelector('.detail5');
    let detail6 = document.querySelector('.detail6');
    let detail7 = document.querySelector('.detail7');
    let detail8 = document.querySelector('.detail8');
    let detail9 = document.querySelector('.detail9');
    let detail10 = document.querySelector('.detail10');


    around1.onclick = function(e) {
      e.stopPropagation();

      if(!navi1.classList.contains('open1')){
       navi1.classList.add('open1');
       main.classList.add('slide');
      }else{
       navi1.classList.remove('open1');
       main.classList.remove('slide');
      }

      detail1.classList.remove('detail1denote1');

      navi2.classList.remove('open2');
      navi3.classList.remove('open3');
      navi4.classList.remove('open4');
      navi5.classList.remove('open5');
      navi6.classList.remove('open6');
      navi7.classList.remove('open7');
      navi8.classList.remove('open8');
      navi9.classList.remove('open9');
      navi10.classList.remove('open10');

    }

    around2.onclick = function(e) {
      e.stopPropagation();

      if(!navi2.classList.contains('open2')){
       navi2.classList.add('open2');
       main.classList.add('slide');
      }else{
       navi2.classList.remove('open2');
       main.classList.remove('slide');
      }

      detail2.classList.remove('detail2denote2');
      
      navi1.classList.remove('open1');
      navi3.classList.remove('open3');
      navi4.classList.remove('open4');
      navi5.classList.remove('open5');
      navi6.classList.remove('open6');
      navi7.classList.remove('open7');
      navi8.classList.remove('open8');
      navi9.classList.remove('open9');
      navi10.classList.remove('open10');

    }

    around3.onclick = function(e) {
      e.stopPropagation();

      if(!navi3.classList.contains('open3')){
       navi3.classList.add('open3');
       main.classList.add('slide');
      }else{
       navi3.classList.remove('open3');
       main.classList.remove('slide');
      }

      detail3.classList.remove('detail3denote3');

      navi1.classList.remove('open1');
      navi2.classList.remove('open2');
      navi4.classList.remove('open4');
      navi5.classList.remove('open5');
      navi6.classList.remove('open6');
      navi7.classList.remove('open7');
      navi8.classList.remove('open8');
      navi9.classList.remove('open9');
      navi10.classList.remove('open10');

    }

    around4.onclick = function(e) {
      e.stopPropagation();

      if(!navi4.classList.contains('open4')){
       navi4.classList.add('open4');
       main.classList.add('slide');
      }else{
       navi4.classList.remove('open4');
       main.classList.remove('slide');
      }

      detail4.classList.remove('detail4denote4');

      navi1.classList.remove('open1');
      navi2.classList.remove('open2');
      navi3.classList.remove('open3');
      navi5.classList.remove('open5');
      navi6.classList.remove('open6');
      navi7.classList.remove('open7');
      navi8.classList.remove('open8');
      navi9.classList.remove('open9');
      navi10.classList.remove('open10');

    }

    around5.onclick = function(e) {
      e.stopPropagation();

      if(!navi5.classList.contains('open5')){
       navi5.classList.add('open5');
       main.classList.add('slide');
      }else{
       navi5.classList.remove('open5');
       main.classList.remove('slide');
      }

      detail5.classList.remove('detail5denote5');

      navi1.classList.remove('open1');
      navi2.classList.remove('open2');
      navi3.classList.remove('open3');
      navi4.classList.remove('open4');
      navi6.classList.remove('open6');
      navi7.classList.remove('open7');
      navi8.classList.remove('open8');
      navi9.classList.remove('open9');
      navi10.classList.remove('open10');

    }

    around6.onclick = function(e) {
      e.stopPropagation();
      
      if(!navi6.classList.contains('open6')){
       navi6.classList.add('open6');
       main.classList.add('slide');
      }else{
       navi6.classList.remove('open6');
       main.classList.remove('slide');
      }

      detail6.classList.remove('detail6denote6');

      navi1.classList.remove('open1');
      navi2.classList.remove('open2');
      navi3.classList.remove('open3');
      navi4.classList.remove('open4');
      navi5.classList.remove('open5');
      navi7.classList.remove('open7');
      navi8.classList.remove('open8');
      navi9.classList.remove('open9');
      navi10.classList.remove('open10');

    }

    around7.onclick = function(e) {
      e.stopPropagation();

      if(!navi7.classList.contains('open7')){
       navi7.classList.add('open7');
       main.classList.add('slide');
      }else{
       navi7.classList.remove('open7');
       main.classList.remove('slide');
      }

      detail7.classList.remove('detail7denote7');

      navi1.classList.remove('open1');
      navi2.classList.remove('open2');
      navi3.classList.remove('open3');
      navi4.classList.remove('open4');
      navi5.classList.remove('open5');
      navi6.classList.remove('open6');
      navi8.classList.remove('open8');
      navi9.classList.remove('open9');
      navi10.classList.remove('open10');

    }

    around8.onclick = function(e) {
      e.stopPropagation();

      if(!navi8.classList.contains('open8')){
       navi8.classList.add('open8');
       main.classList.add('slide');
      }else{
       navi8.classList.remove('open8');
       main.classList.remove('slide');
      }

      detail8.classList.remove('detail8denote8');

      navi1.classList.remove('open1');
      navi2.classList.remove('open2');
      navi3.classList.remove('open3');
      navi4.classList.remove('open4');
      navi5.classList.remove('open5');
      navi6.classList.remove('open6');
      navi7.classList.remove('open7');
      navi9.classList.remove('open9');
      navi10.classList.remove('open10');

    }

    around9.onclick = function(e) {
      e.stopPropagation();

      if(!navi9.classList.contains('open9')){
       navi9.classList.add('open9');
       main.classList.add('slide');
      }else{
       navi9.classList.remove('open9');
       main.classList.remove('slide');
      }

      detail9.classList.remove('detail9denote9');

      navi1.classList.remove('open1');
      navi2.classList.remove('open2');
      navi3.classList.remove('open3');
      navi4.classList.remove('open4');
      navi5.classList.remove('open5');
      navi6.classList.remove('open6');
      navi7.classList.remove('open7');
      navi8.classList.remove('open8');
      navi10.classList.remove('open10');

    }

    around10.onclick = function(e) {
      e.stopPropagation();

      if(!navi10.classList.contains('open10')){
       navi10.classList.add('open10');
       main.classList.add('slide');
      }else{
       navi10.classList.remove('open10');
       main.classList.remove('slide');
      }

      detail10.classList.remove('detail10denote10');

      navi1.classList.remove('open1');
      navi2.classList.remove('open2');
      navi3.classList.remove('open3');
      navi4.classList.remove('open4');
      navi5.classList.remove('open5');
      navi6.classList.remove('open6');
      navi7.classList.remove('open7');
      navi8.classList.remove('open8');
      navi9.classList.remove('open9');

    }






    cataloguemenu1.onclick = function(){
     if(!detail1.classList.contains('detail1denote1')){
      detail1.classList.add('detail1denote1');
     }else{
      detail1.classList.remove('detail1denote1');
     }
    }

    cataloguemenu2.onclick = function(){
     if(!detail2.classList.contains('detail2denote2')){
      detail2.classList.add('detail2denote2');
     }else{
      detail2.classList.remove('detail2denote2');
     }
    }

    cataloguemenu3.onclick = function(){
     if(!detail3.classList.contains('detail3denote3')){
      detail3.classList.add('detail3denote3');
     }else{
      detail3.classList.remove('detail3denote3');
     }
    }

    cataloguemenu4.onclick = function(){
     if(!detail4.classList.contains('detail4denote4')){
      detail4.classList.add('detail4denote4');
     }else{
      detail4.classList.remove('detail4denote4');
     }
    }

    cataloguemenu5.onclick = function(){
     if(!detail5.classList.contains('detail5denote5')){
      detail5.classList.add('detail5denote5');
     }else{
      detail5.classList.remove('detail5denote5');
     }
    }

    cataloguemenu6.onclick = function(){
     if(!detail6.classList.contains('detail6denote6')){
      detail6.classList.add('detail6denote6');
     }else{
      detail6.classList.remove('detail6denote6');
     }
    }

    cataloguemenu7.onclick = function(){
     if(!detail7.classList.contains('detail7denote7')){
      detail7.classList.add('detail7denote7');
     }else{
      detail7.classList.remove('detail7denote7');
     }
    }

    cataloguemenu8.onclick = function(){
     if(!detail8.classList.contains('detail8denote8')){
      detail8.classList.add('detail8denote8');
     }else{
      detail8.classList.remove('detail8denote8');
     }
    }

    cataloguemenu9.onclick = function(){
     if(!detail9.classList.contains('detail9denote9')){
      detail9.classList.add('detail9denote9');
     }else{
      detail9.classList.remove('detail9denote9');
     }
    }

    cataloguemenu10.onclick = function(){
     if(!detail10.classList.contains('detail10denote10')){
      detail10.classList.add('detail10denote10');
     }else{
      detail10.classList.remove('detail10denote10');
     }
    }







    // closeを押したときに閉じる要素
    close.onclick = function () {
      navigation.classList.remove('active');

      catalogue.classList.remove('action');

      navi1.classList.remove('open1');
      navi2.classList.remove('open2');
      navi3.classList.remove('open3');
      navi4.classList.remove('open4');
      navi5.classList.remove('open5');
      navi6.classList.remove('open6');
      navi7.classList.remove('open7');
      navi8.classList.remove('open8');
      navi9.classList.remove('open9');
      navi10.classList.remove('open10');

      main.classList.remove('slide');

      detail1.classList.remove('detail1denote1');
      detail2.classList.remove('detail1denote2');
      detail3.classList.remove('detail1denote3');
      detail4.classList.remove('detail1denote4');
      detail5.classList.remove('detail1denote5');
      detail6.classList.remove('detail1denote6');
      detail7.classList.remove('detail1denote7');
      detail8.classList.remove('detail1denote8');
      detail9.classList.remove('detail1denote9');
      detail10.classList.remove('detail1denote10');

    }
