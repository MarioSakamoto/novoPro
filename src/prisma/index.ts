import {PrismaClient} from '@prisma/client'

const prismaClient = new PrismaClient();

export default prismaClient;
// conseguimos aqui acessar os models do nosso banco de dados, e crud