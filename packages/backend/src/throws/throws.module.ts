import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { ThrowsService } from './throws.service';

@Module({
  providers: [ThrowsService, PrismaService],
  exports: [ThrowsService],
})
export class ThrowsModule {}
