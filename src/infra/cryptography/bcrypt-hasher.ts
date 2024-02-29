import { HashComparer } from '@/domain/forum/application/cryptography/hash-comparer'
import { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'
import { compare, hash } from 'bcryptjs'

export class BcryptHasher implements HashGenerator, HashComparer {
  private HASH_SALT_LENGHT = 8

  compare(plainText: string, hash: string): Promise<boolean> {
    return compare(plainText, hash)
  }

  hash(plainText: string): Promise<string> {
    return hash(plainText, this.HASH_SALT_LENGHT)
  }
}
