// project.js
import lamp from './lamp'; // Импорт схемы для ламп

export default {
  name: 'project',
  title: 'Проекты',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название проекта',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Фото',
      type: 'image',
    },
    {
      name: 'video',
      title: 'Видео',
      type: 'file', // Используйте тип "file" для загрузки видео
      options: {
        accept: '.mp4,.avi,.mov', // Укажите допустимые форматы видео
      },
    },
    {
      name: 'place',
      title: 'Место',
      type: 'string',
      options: {
        list: [
          { title: 'улица', value: 'street' },
          { title: 'помещение', value: 'room' },
        ],
        initialValue: 'street',
      },
    },
    {
      name: 'data',
      title: 'Дата начала и окончания проекта',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Адрес проекта',
      type: 'string',
    },
    {
      name: 'activity',
      title: 'Тип объекта',
      type: 'string',
      options: {
        list: [
          { title: 'Производство и промышленность', value: 'shop' },
          { title: 'Офисы и магазины', value: 'production' },
          { title: 'ЖКХ и прочее строительство', value: 'hcs' },
        ],
        initialValue: 'street',
      },
    },
    {
      name: 'lamps',
      title: 'Лампы',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'lamp',
              title: 'Лампа',
              type: 'reference',
              to: [{ type: 'lamp' }],
            },
            {
              name: 'quantity',
              title: 'Количество',
              type: 'number',
            },
          ],
        },
      ],
    },    
    {
      name: 'photo',
      title: 'Дополнительные фото',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'path',
              title: 'Фото',
              type: 'image',
            },
          ],
        },
      ],
      initialValue: 'none',
    },
    {
      name: 'tasks',
      title: 'Задачи проекта',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Описание проекта',
      type: 'text',
      initialValue: 'none',
    },
  ],
};
