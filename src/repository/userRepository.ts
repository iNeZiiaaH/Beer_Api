import client from "../config/database";
import {User} from "../models/user";


class UserRepository {
    async getAll(): Promise<User[]> {
        const result = await client.query("SELECT * FROM Users;");
        return result.rows;
    }

    async getById(id: number): Promise<User | null> {
        const result = await client.query("SELECT * FROM Users WHERE id_user = $1;", [id]);
        return result.rows.length ? result.rows[0] : null;
    }

    async create(user: Partial<User>): Promise<User> {
        const result = await client.query(
            "INSERT INTO Users (first_name, email, password) VALUES ($1, $2, $3) RETURNING *;",
            [user.first_name, user.email, user.password]
        );
        return result.rows[0];
    }

    async update(id: number, user: Partial<User>): Promise<User | null> {
        const result = await client.query(
            "UPDATE Users SET first_name = $1, email = $2, password = $3, updated_at = CURRENT_TIMESTAMP WHERE id_user = $4 RETURNING *;",
            [user.first_name, user.email, user.password, id]
        );
        return result.rows.length ? result.rows[0] : null;
    }

    async delete(id: number): Promise<User | null> {
        const result = await client.query("DELETE FROM Users WHERE id_user = $1 RETURNING *;", [id]);
        return result.rows.length ? result.rows[0] : null;
    }
}

export default new UserRepository();
