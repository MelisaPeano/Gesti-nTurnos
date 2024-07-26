import IUsers from "../interfaces/IUsers";
import IUserDto from "../dto/userDto";
import { AppDataSource } from "../config/data-source";
import { Vehicle } from "../entities/vehicle";
import { createCredentials } from "./credentialsServices";
import { User } from "../entities/user";
import { getVehiclesService } from "./vehiclsServer";


export const createUserService = async (userData: IUserDto): Promise<User> => {
  const {name, email, birthdate, dni, password, username, vehicls} = userData;
  const userRepository = AppDataSource.getRepository(User);
  const formatedBirthdate = new Date(birthdate);
  if(isNaN(formatedBirthdate.getTime())) {
    throw new Error("invalid birthdate");
  }
  const vehicle = await getVehiclesService(vehicls);
  const newUser = userRepository.create({
      name,
      email,
      birthdate: formatedBirthdate,
      dni,
      vehicles: [],
      appointment: [],
  });
  newUser.vehicles.push(vehicle);
  const usuario = await userRepository.save(newUser);
  await createCredentials({
    id: usuario.id,
    username,
    password
  })
  return usuario;
};

export const getUserService = async (): Promise<User[]> => {
    const users = await AppDataSource.getRepository(User).find();
    return users
}
export const obtenerUserService = async (id: number): Promise<User | undefined> => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ 
        where: {
            id
        },
        relations: {
            appointment: true,
            vehicles: true
        }
    });
    if (!user) {
        throw new Error("user not found");
    }
    return user;

}

export const UserIdService = async (id: number): Promise<number> => {
    const userRepository = AppDataSource.getRepository(User);
    const user= await userRepository.findOne({ 
        where: {
            id
        }
       
    });
    if(!user) {
        throw new Error("user not found");
    }
    return user?.id;
}
export const deleteUserService = async (id: number): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id });
    if (!user) {
        throw new Error("user not found");
    }
    await userRepository.remove(user);
}