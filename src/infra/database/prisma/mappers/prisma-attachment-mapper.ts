import { Attachment } from '@/domain/forum/enterprise/entities/attachment'
import { Prisma } from '@prisma/client'

// mapeia uma classe do prisma para a classe do domínio

export class PrismaAttachmentMapper {
  // static toDomain(raw: PrismaAttachment): Student {
  //   TO DO
  // }

  // mapeia classe de domínio para classe do Prisma

  static toPrisma(
    attachment: Attachment,
  ): Prisma.AttachmentUncheckedCreateInput {
    return {
      id: attachment.id.toString(),
      title: attachment.title,
      url: attachment.url,
    }
  }
}
