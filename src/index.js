import '../styles.css';
import app from './app.js';

const points = [
  {id: '1',  name: 'Стадион', location: ['44%', '35%'], backgroundColor: '#6ABF4B'},
  {id: '2', name: 'Мост', location: ['66%','23%'], backgroundColor: 'blue'},
  {id: '3', name: 'Парковка', location: ['27%','30%'], backgroundColor: 'blue'},
  {id: '4',  name: 'Университет', location: ['37%', '60%'], backgroundColor: '#6ABF4B'},
  {id: '5', name: 'Бассейн', location: ['58%','56%'], backgroundColor: 'blue'},
  {id: '6',  name: 'Отель', location: ['78%', '57%'], backgroundColor: '#6ABF4B'},
  {id: '7', name: 'Жилой дом', location: ['18%','71%'], backgroundColor: 'blue'},
  {id: '8', name: 'Школа', location: ['44%','73%'], backgroundColor: 'blue'},
  {id: '9',  name: 'Корпус А', location: ['62%', '68%'], backgroundColor: '#6ABF4B'},
  {id: '10', name: 'Корпус Б', location: ['68%','83%'], backgroundColor: 'blue'},
];

app(points);