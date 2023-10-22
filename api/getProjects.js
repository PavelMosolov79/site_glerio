// api/getProjects.js
const sqlite3 = require('sqlite3');

export default (req, res) => {
  const db = new sqlite3.Database('bd_glerio.db', sqlite3.OPEN_READONLY); // Замените на путь к вашей базе данных SQLite

  const query = 'SELECT NAME, image FROM Project';

  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: 'Ошибка при выполнении запроса к базе данных' });
    } else {
      res.json(rows);
    }
    db.close();
  });
};
