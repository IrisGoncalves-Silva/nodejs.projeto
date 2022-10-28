import { Injectable } from '@nestjs/common';

@Injectable()
export class DtoregisterService {
async dtoRegisterUser (req) : Promise <string> {
    return `Usuários criado com sucesso!` ;
}

}
