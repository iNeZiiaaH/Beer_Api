import UserRepository from "../repository/userRepository";
import { User } from "../models/User";

class UserService {
    async getAllUsers(): Promise<User[]> {
        return await UserRepository.getAll();
    }

    async getUserById(id: number): Promise<User> {
        if (isNaN(id)) {
            throw new Error("L'ID de l'utilisateur est invalide.");
        }

        const user = await UserRepository.getById(id);
        if (!user) {
            throw new Error("Utilisateur non trouvé.");
        }

        return user;
    }

    async createUser(userData: Partial<User>): Promise<User> {
        if (!userData.first_name || !userData.email || !userData.password) {
            throw new Error("Le prénom, l'email et le mot de passe sont requis.");
        }

        return await UserRepository.create(userData);
    }

    async updateUser(id: number, userData: Partial<User>): Promise<User> {
        if (isNaN(id)) {
            throw new Error("L'ID de l'utilisateur est invalide.");
        }

        const updatedUser = await UserRepository.update(id, userData);
        if (!updatedUser) {
            throw new Error("Utilisateur non trouvé.");
        }

        return updatedUser;
    }

    async deleteUser(id: number): Promise<User> {
        if (isNaN(id)) {
            throw new Error("L'ID de l'utilisateur est invalide.");
        }

        const deletedUser = await UserRepository.delete(id);
        if (!deletedUser) {
            throw new Error("Utilisateur non trouvé.");
        }

        return deletedUser;
    }
}

export default new UserService();
