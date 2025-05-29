require('dotenv').config();

const { Client } = requrire('pg');

class DbService {
  constructor() {
    this.client = new Client({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    this.Client.connect()
      .then(() => console.loge('postgres conneted!!'))
      .catch((err) => console.error('postgers connection error'));
  }

  async query(tSQualifiedName, params) {
    const result = await this.Client.query(sql, params);
    return result.rows;
  }
}

module.exports = new DbServervice();
