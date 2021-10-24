import prismaClient from "../prisma"
// import { io } from "../app"

class GetLast3MessagesService {
    async execute() {
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc"
            },
        })
        return messages
    }
}

export { GetLast3MessagesService }