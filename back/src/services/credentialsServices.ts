import { AppDataSource } from "../config/data-source";
import ICredentialDto from "../dto/ICredentialsDto";
import { Credential } from "../entities/Credentials";
import { User } from "../entities/user";



export const createCredentials = async (credentialData: ICredentialDto)=> {
    const userRepository = AppDataSource.getRepository(User)
    const credentialRepository = AppDataSource.getRepository(Credential);
    const user = await userRepository.findOne({ where: { id: credentialData.userId }});
        if (!user) {
          throw new Error('Usuario no encontrado');
        }

    const newCredential = new Credential();
    newCredential.username = credentialData.username;
    newCredential.password = credentialData.password;
    newCredential.user = user;
    const savedCredential = await credentialRepository.save(newCredential);
    user.credentialId = savedCredential;
     await userRepository.save(user);

    return savedCredential.id;

}

export const checkcredentials = async (credentialData: ICredentialDto):Promise<number> => {
    const { username , password}  = credentialData;
    const busquedaRepository = AppDataSource.getRepository(Credential)
        const credential = await busquedaRepository.findOne({
            where: { username: credentialData.username },
            relations: ['user']
        });
        if(credential?.password === password) return credential.user.id;
        else return 0;
    }
        
    