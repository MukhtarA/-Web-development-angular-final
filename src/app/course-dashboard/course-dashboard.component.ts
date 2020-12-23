import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.scss']
})
export class CourseDashboardComponent implements OnInit {
  ngOnInit(): void {}

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Кто создал советский дизайн?', cols: 1, rows: 1, img: 'https://cdn.pixabay.com/photo/2016/08/23/21/17/mountain-1615555__340.jpg', text: 'Сегодня вышел декабрьский выпуск подкаста «Зачем я это увидел?» (который мы делаем совместно с ЮниКредит Банком и Mastercard) — последний в этом сезоне! Спасибо всем вам, что слушали выпуски и даже дослушивали до конца, ставили оценки в подкаст-приложениях и присылали вопросы. Ну и вообще за то, что были с нами в 2020 году — странном году для выставок, музеев, их сотрудников и посетителей.\n' +
              '\n' +
              'Итоги этого года мы попытались кратко обсудить в начале этого выпуска. А основная тема подкаста — это выставка «Вхутемас 100. Школа авангарда», которая открылась в Музее Москвы. Сейчас она, как и почти все музеи в Москве, закрыта на карантин по распоряжению властей, однако должна вновь открыться 15 января; наш подкаст как раз и поможет вам подготовиться к главной выставке зимы.\n' +
              '\n' +
              'А готовиться есть к чему, ведь выставка посвящена не художнику, не объеди­нению, не направлению, периоду или теме в искусстве. Она посвящена учеб­ному заведению — Высшим художественно-техническим мастерским, — а также его преподавателям и студентам, которые в 1920-х годах создали прославленный советский дизайн.'},
          { title: 'Что такое романтизм и как он изменил мир?', cols: 1, rows: 1,img: 'https://cdn.pixabay.com/photo/2017/12/18/09/54/lago-di-limides-3025780__340.jpg', text: 'Лекции и материалы о том, что без Лермонтова и Гофмана, Гойи и Делакруа, Бетховена и Наполеона наша жизнь была бы совсем другой'},
          { title: 'Как атом изменил нашу жизнь?', cols: 1, rows: 1, img: 'https://htstatic.imgsmail.ru/pic_original/4e796414de9fe91c154c132facc4f075/1909909/', text: 'Кто создал советский дизайн? Вхутемас в подкасте «Зачем я это увидел?»'},
          { title: 'Jojo ref', cols: 1, rows: 1, img: 'https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/10/jojo-reference-header.jpg', text: 'Bizarre Adventure themes such as floating or exploding Kanji, posing that covers the face and aesthetic of both the show and manga.'},
        ];
      }

      return [
        { title: 'Кто создал советский дизайн?', cols: 1, rows: 1, img: 'https://cdn.pixabay.com/photo/2016/08/23/21/17/mountain-1615555__340.jpg', text: 'Сегодня вышел декабрьский выпуск подкаста «Зачем я это увидел?» (который мы делаем совместно с ЮниКредит Банком и Mastercard) — последний в этом сезоне!'},
        { title: 'Что такое романтизм и как он изменил мир?', cols: 1, rows: 1,img: 'https://cdn.pixabay.com/photo/2017/12/18/09/54/lago-di-limides-3025780__340.jpg', text: 'Лекции и материалы о том, что без Лермонтова и Гофмана, Гойи и Делакруа, Бетховена и Наполеона наша жизнь была бы совсем другой'},
        { title: 'Как атом изменил нашу жизнь?', cols: 1, rows: 1, img: 'https://htstatic.imgsmail.ru/pic_original/4e796414de9fe91c154c132facc4f075/1909909/', text: 'Кто создал советский дизайн? Вхутемас в подкасте «Зачем я это увидел?»'},
        { title: 'Jojo ref', cols: 1, rows: 1, img: 'https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/10/jojo-reference-header.jpg', text: 'Bizarre Adventure themes such as floating or exploding Kanji, posing that covers the face and aesthetic of both the show and manga.'},
        { title: 'История денег', cols: 1, rows: 1, img: 'https://icdn.lenta.ru/images/2020/02/17/16/20200217163358922/pic_691bdb48eb093fb15b89333ef0ca7dc4.jpg', text: 'Подкаст об истории денег и о том, как они меняют человеческие отношения, а также 10 невероятных историй обогащения, тест о валютах прошлого и твиты о деньгах от Исаака Ньютона и Андрея Тарковского'},
        { title: 'Криминология: как изучают преступность и преступников', cols: 1, rows: 1, img: 'http://geekcity.ru/wp-content/uploads/2014/02/Guardians-of-the-Galaxy-Trailer-Breakdown-Main-Characters.jpg', text: 'Лекции о том, как ученые изучают криминальное поведение, а также краткая история организованной преступности в России, лучшие детективы в одной таблице и всё, что нужно знать о песне «Мурка»'},


      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}


}
