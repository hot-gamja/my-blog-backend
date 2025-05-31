const db = require('../db/db/service.js');

const UsersRepository = {
    // 전체 사용자 조회

    anync findAll() {
        return await db.query('SELECT * FROM users');
    },

    // ID로 사용자 조회
    async findByID(id){
        const rows = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return rows[0];
    },

    // 사용자 추가
    async createUser({ username, email, password}) {
        const rows = await db.query(
            `INSERT INTO users (username, email, password, created_at)
            VALUES ($1, $2, $3, NOW()), NOW())
            RETURNING *`,
            [username, email, password]
        );
        return rows[0];
    },

    // 사용자 수정
    async update(id, { username, email, password}) {
        const rows = await db.query(
            `UPDATE users
            SET username = $1,
                email = $2,
                password = $3,
                updated_at = NOW()
            WHERE id = $4
            RETURNING *`,
            [username, email, password, id] 
        );
        return rows[0];
    },

    // 사용자 삭제
}