import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['warn', 'error'],
    })
  }

  // on module init, it will connect to prisma
  onModuleInit() {
    return this.$connect()
  }

  // on module destroyed, it will disconnect from prisma
  onModuleDestroy() {
    return this.$disconnect()
  }
}
