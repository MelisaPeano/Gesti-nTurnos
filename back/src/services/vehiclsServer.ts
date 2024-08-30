import { AppDataSource, newVehicle } from "../config/data-source";
import { Vehicle } from "../entities/vehicle";
import { UserRepository } from "../repositories/UserRepository"
import { IVehicleDto } from "../dto/IVehicle";


export const getVehiclesService = async ()=> {
    const vehicle = await newVehicle.find();
    return vehicle;
}


// Acá un ejemplo del uso de query runner
export const createVehicleService = async (vehicle: IVehicleDto) => {
  
    const queryRunner =  AppDataSource.createQueryRunner();
    await queryRunner.connect();

    try {
    await queryRunner.startTransaction();

    const nuevoVehiculo = await newVehicle.create({
        year: vehicle.year,
        brand: vehicle.brand,
        color: vehicle.color,
        model: vehicle.model,
        servicio: []
    })
    await queryRunner.manager.save(nuevoVehiculo);

    const user = await UserRepository.findById(vehicle.userId)

    nuevoVehiculo.user = user;

    await queryRunner.manager.save(nuevoVehiculo);
    await queryRunner.commitTransaction()

    return nuevoVehiculo;

   } catch(error) {
    await queryRunner.rollbackTransaction()
    throw Error ("vehiculo no creado")
   
   } finally {
    await queryRunner.release()

   }
    
}

export const deleteVehicleService = async (id: number): Promise<void> => {
    const vehicle = await newVehicle.delete({id});
    console.log("vehiculo eliminado")

}