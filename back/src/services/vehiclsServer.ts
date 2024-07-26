
import { AppDataSource } from "../config/data-source";
import { Vehicle } from "../entities/vehicle";
import { User } from "../entities/user";
import  IVehicleDto  from "../dto/IVehicle";

export const getVehiclesService = async (data: IVehicleDto): Promise<Vehicle> => {
    const vehicles = await AppDataSource.getRepository(Vehicle)
    const newVehicle = vehicles.create(data)
    const vehicle = await vehicles.save(newVehicle)
    return vehicle
}

export const createNewVehicle = async (data: IVehicleDto): Promise<Vehicle> => {
    const vehicles = await AppDataSource.getRepository(Vehicle)
    const user = await AppDataSource.getRepository(User).findOneBy({id: data.userId})
    if(!user) {
        throw new Error("user not found")
    }
    const newVehicles = new Vehicle()
    newVehicles.marca = data.marca,
    newVehicles.year = data.year
    newVehicles.user = user

    const newVehicle = vehicles.create(data)
    const vehicle = await vehicles.save(newVehicles)
    return vehicle
    
}