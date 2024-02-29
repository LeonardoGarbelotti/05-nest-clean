import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { UserPayload } from './jwt.strategy'

// cria um decorator de uma Request com parametros

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()

    return request.user as UserPayload
  },
)
