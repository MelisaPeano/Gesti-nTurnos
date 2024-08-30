import IUserDto from "../dto/UserDto";
import { AppDataSource } from "../config/data-source";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import { createCredentials } from "./credentialsServices";

export const createUserService = async (userData: IUserDto): Promise<User> => {
  const {name, email, birthdate, nDni, password, username} = userData;
   const userRepository = AppDataSource.getRepository(User);

  const formattedBirthdate = new Date(birthdate);
    
    if (isNaN(formattedBirthdate.getTime())) {
      throw new Error("Fecha de nacimiento inválida");
    }
    const newUser = userRepository.create({
      name,
      email,
      birthdate: formattedBirthdate,
      nDni,
      vehicles: [],
      appointment: []
  });
  const usuario = await userRepository.save(newUser);

  await createCredentials({
    userId: usuario.id,
    username,
    password,
  });

  return usuario;
};

export const getUserService = async (): Promise<User[]> => {
   const users = await UserRepository.find();
   return users;
}


export const obtenerUserService = async (id: number): Promise<User | undefined> => {
  const users = AppDataSource.getRepository(User);
    const user = await users.findOne({
     where: { id: id },
    relations: {appointment: true , vehicles: true}
  });
    if (!user) {
      throw new Error('User not found');
     }
     return user;
}
   
export const UserIdService = async (id: number): Promise<number>=> {
   const users = AppDataSource.getRepository(User);
   const user = await users.findOne({ where: { id } });
       if (!user) {
         throw new Error('User not found');
     }
     return user.id;
   
}