import { api } from "../api/Axios";
import { User } from "../models/User";

export class UserService {
	async GetById(id: number) {
		try {
			const response = await api.get("User/GetById", {
				params: {
					Id: id,
				},
			});
			return response.data.json() as User;
		} catch (error) {
			console.log(error);
		}
	}

	async GetByTg(tgId: number) {
		try {
			const response = await api.get("User/GetById", {
				params: {
					Id: tgId,
				},
			});
			return response.data.json() as User;
		} catch (error) {
			console.log(error);
		}
	}
}
