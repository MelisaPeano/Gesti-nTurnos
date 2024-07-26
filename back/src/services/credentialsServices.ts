import { AppDataSource } from "../config/data-source";
import ICredentialId from "../interfaces/ICredentials";
import { Credential } from "../entities/Credentials";
import { User } from "../entities/user";

export const createCredentials = async (credentialDta: ICredentialId) => {
    const userRepository = AppDataSource.getRepository(User);
    const credentialsRepository = AppDataSource.getRepository(Credential);
    const user = await userRepository.findOneBy({ id: credentialDta.id });
    if (!user) {
        throw new Error("user not found");
    }
    const credential = new Credential();
    credential.username = credentialDta.username;
    credential.password = credentialDta.password;
    credential.user = user;
    const savedCredential = await credentialsRepository.save(credential);
    user.credentialId = savedCredential;

    return savedCredential.id
}

export const checkCredentials = async (credentialDta: ICredentialId): Promise<number> => {
    const {username, password} = credentialDta;
    const busquedaRepository = AppDataSource.getRepository(Credential);
    const busqueda = await busquedaRepository.findOne({
         where: {
             username: credentialDta.username},
             relations: [ 'user' ]
            });
        if(busqueda?.password === credentialDta.password) return busqueda.id 
        else return 0;
}

    