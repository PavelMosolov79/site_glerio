// lamp.js
export default {
    name: 'lamp',
    title: 'Лампы',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Название лампы',
        type: 'string',
      },
      {
        name: 'article',
        title: 'Артикул',
        type: 'string',
      },
      {
        name: 'href_lamp',
        title: 'Ссылка на лампу',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Фото',
        type: 'image',
      },
    ],
  };
  