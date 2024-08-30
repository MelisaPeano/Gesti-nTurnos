import { AppDataSource, newServicio, newVehicle } from "../config/data-source";
import { IServicioDto } from "../dto/servicioDto";
import { Servicio } from "../entities/servicios";
import { ServicioTipo } from "../entities/servicios";
import { Vehicle } from "../entities/vehicle";



export const createService = async (service: IServicioDto): Promise<Servicio | void> => {
    const queryRunner =  await AppDataSource.createQueryRunner();
    await queryRunner.connect();
    try {
        await queryRunner.startTransaction();
        const servicioRepository = queryRunner.manager.getRepository(Servicio);
        const newService = await servicioRepository.create({
            tipo: ServicioTipo.OptionDefault
        })
        const vehicleRepository = queryRunner.manager.getRepository(Vehicle);
        const vehicle = await vehicleRepository.findOneBy({ id: service.vehicleId });

        if (!vehicle) {
            throw new Error("Vehículo no encontrado");
        }
        newService.vehicle = vehicle;
        await queryRunner.manager.save(newService);
        await queryRunner.commitTransaction()
        return newService;
    } catch (error) {
        await queryRunner.rollbackTransaction()
        throw Error ("servicio no creado")
    } finally {
        await queryRunner.release()
    }
}