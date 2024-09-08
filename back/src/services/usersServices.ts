import IUserDto from "../dto/UserDto";
import { AppDataSource } from "../config/data-source";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/user";
import { createCredentials } from "./credentialsServices";
import bcrypt from "bcryptjs";


export const createUserService = async (userData: IUserDto): Promise<User> => {
  const {name, email, birthdate, nDni, password, username, role} = userData;
   const userRepository = AppDataSource.getRepository(User);
   const user = await userRepository.findOneBy({ email: email })
    if(user){ 
        throw new Error('User already exists');
    }
     
   const formattedBirthdate = new Date(birthdate);
    
    if (isNaN(formattedBirthdate.getTime())) {
      throw new Error("Fecha de nacimiento inválida");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const newUser = userRepository.create({
      name,
      email,
      birthdate: formattedBirthdate,
      nDni,
      vehicles: [],
      appointment: [],
      role
  });
  const usuario = await userRepository.save(newUser);

  await createCredentials({
    userId: usuario.id,
    username,
    password: hashedPassword,
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