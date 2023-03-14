
// farst action
let navigation = document.querySelector('.navigation');
let close = document.querySelector('.close');

navigation.onclick = function () {
  navigation.classList.add('active');
}

//  普通車アイコンを押したとき
let catalogue = document.querySelector('.catalogue');


catalogue.onclick = function () {

  // !で反転させてactiveがふくまれてなければに変える
  if (!navigation.classList.contains('active')) {
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

  navi11.classList.remove('open11');
  navi12.classList.remove('open12');
  navi13.classList.remove('open13');
  navi14.classList.remove('open14');
  navi15.classList.remove('open15');


  main.classList.remove('slide');

  main.classList.remove('slide2');

  catalogue3.classList.remove('action3');

}

//  軽自動車のアイコンを押したとき
let catalogue3 = document.querySelector('.catalogue3');

catalogue3.onclick = function () {

  if (!navigation.classList.contains('active')) {
    return;
  }
  if (catalogue3.classList.contains('action3')) {
    catalogue3.classList.remove('action3');
  } else {
    catalogue3.classList.add('action3');
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

  navi11.classList.remove('open11');
  navi12.classList.remove('open12');
  navi13.classList.remove('open13');
  navi14.classList.remove('open14');
  navi15.classList.remove('open15');


  main.classList.remove('slide');
  main.classList.remove('slide2');


  catalogue.classList.remove('action');


}


// 普通車アイコンを押した後の動き
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

// CX-3を押したとき
around1.onclick = function (e) {
  e.stopPropagation();

  if (!navi1.classList.contains('open1')) {
    navi1.classList.add('open1');
    main.classList.add('slide');
  } else {
    navi1.classList.remove('open1');
    main.classList.remove('slide');

  }

  detail1.classList.remove('detail1denote1');
  detail1_2.classList.remove('detail1-2denote1-2');

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


// CX-30を押したとき
around2.onclick = function (e) {
  e.stopPropagation();

  if (!navi2.classList.contains('open2')) {
    navi2.classList.add('open2');
    main.classList.add('slide');
  } else {
    navi2.classList.remove('open2');
    main.classList.remove('slide');
  }

  detail2.classList.remove('detail2denote2');
  detail2_2.classList.remove('detail2-2denote2-2');

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

// MX-30を押したとき
around3.onclick = function (e) {
  e.stopPropagation();

  if (!navi3.classList.contains('open3')) {
    navi3.classList.add('open3');
    main.classList.add('slide');
  } else {
    navi3.classList.remove('open3');
    main.classList.remove('slide');
  }

  detail3.classList.remove('detail3denote3');
  detail3_2.classList.remove('detail3-2denote3-2');

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

// CX-5を押したとき
around4.onclick = function (e) {
  e.stopPropagation();

  if (!navi4.classList.contains('open4')) {
    navi4.classList.add('open4');
    main.classList.add('slide');
  } else {
    navi4.classList.remove('open4');
    main.classList.remove('slide');
  }

  detail4.classList.remove('detail4denote4');
  detail4_2.classList.remove('detail4-2denote4-2');

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

// CX-60を押したとき
around5.onclick = function (e) {
  e.stopPropagation();

  if (!navi5.classList.contains('open5')) {
    navi5.classList.add('open5');
    main.classList.add('slide');
  } else {
    navi5.classList.remove('open5');
    main.classList.remove('slide');
  }

  detail5.classList.remove('detail5denote5');
  detail5_2.classList.remove('detail5-2denote5-2');

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

// CX-8を押したとき
around6.onclick = function (e) {
  e.stopPropagation();

  if (!navi6.classList.contains('open6')) {
    navi6.classList.add('open6');
    main.classList.add('slide');
  } else {
    navi6.classList.remove('open6');
    main.classList.remove('slide');
  }

  detail6.classList.remove('detail6denote6');
  detail6_2.classList.remove('detail6-2denote6-2');

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

// MAZDA6を押したとき
around7.onclick = function (e) {
  e.stopPropagation();

  if (!navi7.classList.contains('open7')) {
    navi7.classList.add('open7');
    main.classList.add('slide');
  } else {
    navi7.classList.remove('open7');
    main.classList.remove('slide');
  }

  detail7.classList.remove('detail7denote7');
  detail7_2.classList.remove('detail7-2denote7-2');

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

// MAZDA3を押したとき
around8.onclick = function (e) {
  e.stopPropagation();

  if (!navi8.classList.contains('open8')) {
    navi8.classList.add('open8');
    main.classList.add('slide');
  } else {
    navi8.classList.remove('open8');
    main.classList.remove('slide');
  }

  detail8.classList.remove('detail8denote8');
  detail8_2.classList.remove('detail8-2denote8-2');

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

// MAZDA2を押したとき
around9.onclick = function (e) {
  e.stopPropagation();

  if (!navi9.classList.contains('open9')) {
    navi9.classList.add('open9');
    main.classList.add('slide');
  } else {
    navi9.classList.remove('open9');
    main.classList.remove('slide');
  }

  detail9.classList.remove('detail9denote9');
  detail9_2.classList.remove('detail9-2denote9-2');

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

// ROADSTERを押したとき
around10.onclick = function (e) {
  e.stopPropagation();

  if (!navi10.classList.contains('open10')) {
    navi10.classList.add('open10');
    main.classList.add('slide');
  } else {
    navi10.classList.remove('open10');
    main.classList.remove('slide');
  }

  detail10.classList.remove('detail10denote10');
  detail10_2.classList.remove('detail10-2denote10-2');

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

// 普通車カタログを押したときのイベント
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



// CX-3のカタログを押した時の操作
cataloguemenu1.onclick = function () {
  if (!detail1.classList.contains('detail1denote1')) {
    detail1.classList.add('detail1denote1');
  } else {
    detail1.classList.remove('detail1denote1');
  }

  detail1_2.classList.remove('detail1-2denote1-2');

}

// CX-30のカタログを押した時の操作
cataloguemenu2.onclick = function () {
  if (!detail2.classList.contains('detail2denote2')) {
    detail2.classList.add('detail2denote2');
  } else {
    detail2.classList.remove('detail2denote2');
  }

  detail2_2.classList.remove('detail2-2denote2-2');

}

// MX-30のカタログを押した時の操作
cataloguemenu3.onclick = function () {
  if (!detail3.classList.contains('detail3denote3')) {
    detail3.classList.add('detail3denote3');
  } else {
    detail3.classList.remove('detail3denote3');
  }

  detail3_2.classList.remove('detail3-2denote3-2');

}

// CX-5のカタログを押した時の操作
cataloguemenu4.onclick = function () {
  if (!detail4.classList.contains('detail4denote4')) {
    detail4.classList.add('detail4denote4');
  } else {
    detail4.classList.remove('detail4denote4');
  }

  detail4_2.classList.remove('detail4-2denote4-2');

}

// CX-60のカタログを押した時の操作
cataloguemenu5.onclick = function () {
  if (!detail5.classList.contains('detail5denote5')) {
    detail5.classList.add('detail5denote5');
  } else {
    detail5.classList.remove('detail5denote5');
  }

  detail5_2.classList.remove('detail5-2denote5-2');

}

// CX-8のカタログを押した時の操作
cataloguemenu6.onclick = function () {
  if (!detail6.classList.contains('detail6denote6')) {
    detail6.classList.add('detail6denote6');
  } else {
    detail6.classList.remove('detail6denote6');
  }

  detail6_2.classList.remove('detail6-2denote6-2');

}

// MAZDA6のカタログを押した時の操作
cataloguemenu7.onclick = function () {
  if (!detail7.classList.contains('detail7denote7')) {
    detail7.classList.add('detail7denote7');
  } else {
    detail7.classList.remove('detail7denote7');
  }

  detail7_2.classList.remove('detail7-2denote7-2');

}

// MAZDA3のカタログを押した時の操作
cataloguemenu8.onclick = function () {
  if (!detail8.classList.contains('detail8denote8')) {
    detail8.classList.add('detail8denote8');
  } else {
    detail8.classList.remove('detail8denote8');
  }

  detail8_2.classList.remove('detail8-2denote8-2');

}

// MAZDA2のカタログを押した時の操作
cataloguemenu9.onclick = function () {
  if (!detail9.classList.contains('detail9denote9')) {
    detail9.classList.add('detail9denote9');
  } else {
    detail9.classList.remove('detail9denote9');
  }

  detail9_2.classList.remove('detail9-2denote9-2');

}

// ROADSTERのカタログを押した時の操作
cataloguemenu10.onclick = function () {
  if (!detail10.classList.contains('detail10denote10')) {
    detail10.classList.add('detail10denote10');
  } else {
    detail10.classList.remove('detail10denote10');
  }

  detail10_2.classList.remove('detail10-2denote10-2');

}

// 普通車の主要緒元・装備を押したときの操作
let cataloguemenu1_2 = document.querySelector('.cataloguemenu1-2');
let cataloguemenu2_2 = document.querySelector('.cataloguemenu2-2');
let cataloguemenu3_2 = document.querySelector('.cataloguemenu3-2');
let cataloguemenu4_2 = document.querySelector('.cataloguemenu4-2');
let cataloguemenu5_2 = document.querySelector('.cataloguemenu5-2');
let cataloguemenu6_2 = document.querySelector('.cataloguemenu6-2');
let cataloguemenu7_2 = document.querySelector('.cataloguemenu7-2');
let cataloguemenu8_2 = document.querySelector('.cataloguemenu8-2');
let cataloguemenu9_2 = document.querySelector('.cataloguemenu9-2');
let cataloguemenu10_2 = document.querySelector('.cataloguemenu10-2');

let detail1_2 = document.querySelector('.detail1-2');
let detail2_2 = document.querySelector('.detail2-2');
let detail3_2 = document.querySelector('.detail3-2');
let detail4_2 = document.querySelector('.detail4-2');
let detail5_2 = document.querySelector('.detail5-2');
let detail6_2 = document.querySelector('.detail6-2');
let detail7_2 = document.querySelector('.detail7-2');
let detail8_2 = document.querySelector('.detail8-2');
let detail9_2 = document.querySelector('.detail9-2');
let detail10_2 = document.querySelector('.detail10-2');


// CX-3の主要緒元・装備を押した時の操作
cataloguemenu1_2.onclick = function () {
  if (!detail1_2.classList.contains('detail1-2denote1-2')) {
    detail1_2.classList.add('detail1-2denote1-2');
  } else {
    detail1_2.classList.remove('detail1-2denote1-2');
  }

  detail1.classList.remove('detail1denote1');

}

// CX-30の主要緒元・装備を押した時の操作
cataloguemenu2_2.onclick = function () {
  if (!detail2_2.classList.contains('detail2-2denote2-2')) {
    detail2_2.classList.add('detail2-2denote2-2');
  } else {
    detail2_2.classList.remove('detail2-2denote2-2');
  }

  detail2.classList.remove('detail2denote2');

}

// MX-30の主要緒元・装備を押した時の操作
cataloguemenu3_2.onclick = function () {
  if (!detail3_2.classList.contains('detail3-2denote3-2')) {
    detail3_2.classList.add('detail3-2denote3-2');
  } else {
    detail3_2.classList.remove('detail3-2denote3-2');
  }

  detail3.classList.remove('detail3denote3');

}

// CX-5の主要緒元・装備を押した時の操作
cataloguemenu4_2.onclick = function () {
  if (!detail4_2.classList.contains('detail4-2denote4-2')) {
    detail4_2.classList.add('detail4-2denote4-2');
  } else {
    detail4_2.classList.remove('detail4-2denote4-2');
  }

  detail4.classList.remove('detail4denote4');

}

// CX-60の主要緒元・装備を押した時の操作
cataloguemenu5_2.onclick = function () {
  if (!detail5_2.classList.contains('detail5-2denote5-2')) {
    detail5_2.classList.add('detail5-2denote5-2');
  } else {
    detail5_2.classList.remove('detail5-2denote5-2');
  }

  detail5.classList.remove('detail5denote5');

}

// CX-8の主要緒元・装備を押した時の操作
cataloguemenu6_2.onclick = function () {
  if (!detail6_2.classList.contains('detail6-2denote6-2')) {
    detail6_2.classList.add('detail6-2denote6-2');
  } else {
    detail6_2.classList.remove('detail6-2denote6-2');
  }

  detail6.classList.remove('detail6denote6');

}

// MAZDA6の主要緒元・装備を押した時の操作
cataloguemenu7_2.onclick = function () {
  if (!detail7_2.classList.contains('detail7-2denote7-2')) {
    detail7_2.classList.add('detail7-2denote7-2');
  } else {
    detail7_2.classList.remove('detail7-2denote7-2');
  }

  detail7.classList.remove('detail7denote7');

}

// MAZDA3の主要緒元・装備を押した時の操作
cataloguemenu8_2.onclick = function () {
  if (!detail8_2.classList.contains('detail8-2denote8-2')) {
    detail8_2.classList.add('detail8-2denote8-2');
  } else {
    detail8_2.classList.remove('detail8-2denote8-2');
  }

  detail8.classList.remove('detail8denote8');

}

// MAZDA2の主要緒元・装備を押した時の操作
cataloguemenu9_2.onclick = function () {
  if (!detail9_2.classList.contains('detail9-2denote9-2')) {
    detail9_2.classList.add('detail9-2denote9-2');
  } else {
    detail9_2.classList.remove('detail9-2denote9-2');
  }

  detail9.classList.remove('detail9denote9');

}

// ROADSTERの主要緒元・装備を押した時の操作
cataloguemenu10_2.onclick = function () {
  if (!detail10_2.classList.contains('detail10-2denote10-2')) {
    detail10_2.classList.add('detail10-2denote10-2');
  } else {
    detail10_2.classList.remove('detail10-2denote10-2');
  }

  detail10.classList.remove('detail10denote10');

}

// 軽自動車のアイコンを押した後の動き
let around11 = document.querySelector('.around11');
let around12 = document.querySelector('.around12');
let around13 = document.querySelector('.around13');
let around14 = document.querySelector('.around14');
let around15 = document.querySelector('.around15');


let navi11 = document.querySelector('.navi11');
let navi12 = document.querySelector('.navi12');
let navi13 = document.querySelector('.navi13');
let navi14 = document.querySelector('.navi14');
let navi15 = document.querySelector('.navi15');


// キャロルを押したとき
around11.onclick = function (e) {
  e.stopPropagation();

  if (!navi11.classList.contains('open11')) {
    navi11.classList.add('open11');
    main.classList.add('slide2');
  } else {
    navi11.classList.remove('open11');
    main.classList.remove('slide2');

  }

  detail11.classList.remove('detail11denote11');
  detail11_2.classList.remove('detail11-2denote11-2');

  navi12.classList.remove('open12');
  navi13.classList.remove('open13');
  navi14.classList.remove('open14');
  navi15.classList.remove('open15');


}

// フレアを押したとき
around12.onclick = function (e) {
  e.stopPropagation();

  if (!navi12.classList.contains('open12')) {
    navi12.classList.add('open12');
    main.classList.add('slide2');
  } else {
    navi12.classList.remove('open12');
    main.classList.remove('slide2');

  }

  detail12.classList.remove('detail12denote12');
  detail12_2.classList.remove('detail12-2denote12-2');

  navi11.classList.remove('open11');
  navi13.classList.remove('open13');
  navi14.classList.remove('open14');
  navi15.classList.remove('open15');


}

// フレアワゴンを押したとき
around13.onclick = function (e) {
  e.stopPropagation();

  if (!navi13.classList.contains('open13')) {
    navi13.classList.add('open13');
    main.classList.add('slide2');
  } else {
    navi13.classList.remove('open13');
    main.classList.remove('slide2');

  }

  detail13.classList.remove('detail13denote13');
  detail13_2.classList.remove('detail13-2denote13-2');

  navi11.classList.remove('open11');
  navi12.classList.remove('open12');
  navi14.classList.remove('open14');
  navi15.classList.remove('open15');


}

// フレアクロスオーバーを押したとき
around14.onclick = function (e) {
  e.stopPropagation();

  if (!navi14.classList.contains('open14')) {
    navi14.classList.add('open14');
    main.classList.add('slide2');
  } else {
    navi14.classList.remove('open14');
    main.classList.remove('slide2');

  }

  detail14.classList.remove('detail14denote14');
  detail14_2.classList.remove('detail14-2denote14-2');

  navi11.classList.remove('open11');
  navi12.classList.remove('open12');
  navi13.classList.remove('open13');
  navi15.classList.remove('open15');


}

// スクラムワゴンを押したとき
around15.onclick = function (e) {
  e.stopPropagation();

  if (!navi15.classList.contains('open15')) {
    navi15.classList.add('open15');
    main.classList.add('slide2');
  } else {
    navi15.classList.remove('open15');
    main.classList.remove('slide2');

  }

  detail15.classList.remove('detail15denote15');
  detail15_2.classList.remove('detail15-2denote15-2');

  navi11.classList.remove('open11');
  navi12.classList.remove('open12');
  navi13.classList.remove('open13');
  navi14.classList.remove('open14');
  

}

// 軽自動車カタログを押したときのイベント
let cataloguemenu11 = document.querySelector('.cataloguemenu11');
let cataloguemenu12 = document.querySelector('.cataloguemenu12');
let cataloguemenu13 = document.querySelector('.cataloguemenu13');
let cataloguemenu14 = document.querySelector('.cataloguemenu14');
let cataloguemenu15 = document.querySelector('.cataloguemenu15');

let detail11 = document.querySelector('.detail11');
let detail12 = document.querySelector('.detail12');
let detail13 = document.querySelector('.detail13');
let detail14 = document.querySelector('.detail14');
let detail15 = document.querySelector('.detail15');

// キャロルのカタログを押した時の操作
cataloguemenu11.onclick = function () {
  if (!detail11.classList.contains('detail11denote11')) {
    detail11.classList.add('detail11denote11');
  } else {
    detail11.classList.remove('detail11denote11');
  }

  detail11_2.classList.remove('detail11-2denote11-2');

}

// フレアのカタログを押した時の操作
cataloguemenu12.onclick = function () {
  if (!detail12.classList.contains('detail12denote12')) {
    detail12.classList.add('detail12denote12');
  } else {
    detail12.classList.remove('detail12denote12');
  }
  
  detail12_2.classList.remove('detail12-2denote12-2');

}

// フレアワゴンのカタログを押した時の操作
cataloguemenu13.onclick = function () {
  if (!detail13.classList.contains('detail13denote13')) {
    detail13.classList.add('detail13denote13');
  } else {
    detail13.classList.remove('detail13denote13');
  }

  detail13_2.classList.remove('detail13-2denote13-2');


}

// フレアクロスオーバーのカタログを押した時の操作
cataloguemenu14.onclick = function () {
  if (!detail14.classList.contains('detail14denote14')) {
    detail14.classList.add('detail14denote14');
  } else {
    detail14.classList.remove('detail14denote14');
  }

  detail14_2.classList.remove('detail14-2denote14-2');

}

// スクラムワゴンのカタログを押した時の操作
cataloguemenu15.onclick = function () {
  if (!detail15.classList.contains('detail15denote15')) {
    detail15.classList.add('detail15denote15');
  } else {
    detail15.classList.remove('detail15denote15');
  }

  detail15_2.classList.remove('detail15-2denote15-2');


}

// 軽自動車の主要緒元・装備を押したときの操作
let cataloguemenu11_2 = document.querySelector('.cataloguemenu11-2');
let cataloguemenu12_2 = document.querySelector('.cataloguemenu12-2');
let cataloguemenu13_2 = document.querySelector('.cataloguemenu13-2');
let cataloguemenu14_2 = document.querySelector('.cataloguemenu14-2');
let cataloguemenu15_2 = document.querySelector('.cataloguemenu15-2');

let detail11_2 = document.querySelector('.detail11-2');
let detail12_2 = document.querySelector('.detail12-2');
let detail13_2 = document.querySelector('.detail13-2');
let detail14_2 = document.querySelector('.detail14-2');
let detail15_2 = document.querySelector('.detail15-2');

// キャロルの主要緒元・装備を押した時の操作
cataloguemenu11_2.onclick = function () {
  if (!detail11_2.classList.contains('detail11-2denote11-2')) {
    detail11_2.classList.add('detail11-2denote11-2');
  } else {
    detail11_2.classList.remove('detail11-2denote11-2');
  }

  detail11.classList.remove('detail11denote11');


}

// フレアの主要緒元・装備を押した時の操作
cataloguemenu12_2.onclick = function () {
  if (!detail12_2.classList.contains('detail12-2denote12-2')) {
    detail12_2.classList.add('detail12-2denote12-2');
  } else {
    detail12_2.classList.remove('detail12-2denote12-2');
  }

  detail12.classList.remove('detail12denote12');


}

// フレアワゴンの主要緒元・装備を押した時の操作
cataloguemenu13_2.onclick = function () {
  if (!detail13_2.classList.contains('detail13-2denote13-2')) {
    detail13_2.classList.add('detail13-2denote13-2');
  } else {
    detail13_2.classList.remove('detail13-2denote13-2');
  }

  detail13.classList.remove('detail13denote13');


}

// フレアクロスオーバーの主要緒元・装備を押した時の操作
cataloguemenu14_2.onclick = function () {
  if (!detail14_2.classList.contains('detail14-2denote14-2')) {
    detail14_2.classList.add('detail14-2denote14-2');
  } else {
    detail14_2.classList.remove('detail14-2denote14-2');
  }

  detail14.classList.remove('detail14denote14');


}

// スクラムワゴンの主要緒元・装備を押した時の操作
cataloguemenu15_2.onclick = function () {
  if (!detail15_2.classList.contains('detail15-2denote15-2')) {
    detail15_2.classList.add('detail15-2denote15-2');
  } else {
    detail15_2.classList.remove('detail15-2denote15-2');
  }

  detail15.classList.remove('detail15denote15');


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

  catalogue3.classList.remove('action3');

  navi11.classList.remove('open11');
  navi12.classList.remove('open12');
  navi13.classList.remove('open13');
  navi14.classList.remove('open14');
  navi15.classList.remove('open15');

  main.classList.remove('slide2');



}

/* ピッチインピッチアウトによる拡大縮小を禁止 */
document.documentElement.addEventListener('touchstart', function (e) {
  if (e.touches.length >= 2) { e.preventDefault(); }
}, { passive: false });
/* ダブルタップによる拡大を禁止 */
var t = 0;
document.documentElement.addEventListener('touchend', function (e) {
  var now = new Date().getTime();
  if ((now - t) < 350) {
    e.preventDefault();
  }
  t = now;
}, false);
