export const CONTACTS = {
  phone: '+375 (29) 522-39-25',
  phoneHref: 'tel:+375295223925',
  tg: 'https://t.me/ophoto_by',
  inst: 'https://instagram.com/ophoto.by',
  // YCLIENTS — подставим позже:
  bookingUrl: '#booking',
};

export const SERVICES = [
  { id: 'passport', title: 'Комплект на паспорт и документы', price: '35 BYN', time: '15 мин', badge: 'Хит' },
  { id: 'urgent',  title: 'Срочное фото без ретуши',        price: '25 BYN', time: '7 мин',  badge: null },
  { id: 'visa',    title: 'Фото на визу и ВНЖ',              price: '40 BYN', time: '20 мин', badge: null },
  { id: 'portrait',title: 'Бизнес-портрет',                   price: 'от 90 BYN', time: '40 мин', badge: null },
];

export const STEPS = [
  { n: 1, title: 'Выбираете адрес',  text: '12 студий в Минске и пригороде' },
  { n: 2, title: 'Записываетесь онлайн', text: 'Через YCLIENTS за 30 секунд' },
  { n: 3, title: 'Приходите',       text: 'Фотограф сделает 3–5 дублей' },
  { n: 4, title: 'Забираете',        text: 'Печать на месте или PDF на email' },
];

export const LOCATIONS = [
  { city: 'Минск', address: 'пр-т Независимости, 12',  hours: 'Пн–Сб 09:00–21:00', metro: 'Пл. Якуба Коласа' },
  { city: 'Минск', address: 'ул. Немига, 5',           hours: 'Пн–Вс 10:00–20:00', metro: 'Немига' },
  { city: 'Минск', address: 'ТЦ «Дана Молл», 2 этаж',  hours: 'Пн–Вс 10:00–22:00', metro: 'Петровщина' },
];