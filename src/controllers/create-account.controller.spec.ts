import { Test, TestingModule } from '@nestjs/testing'
import CreateAccountController from './create-account.controller'
import { beforeEach } from 'node:test'

describe('CreateAccountController', () => {
  let controller: CreateAccountController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateAccountController],
    }).compile()

    controller = module.get<CreateAccountController>(CreateAccountController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
