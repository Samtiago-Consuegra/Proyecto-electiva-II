import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotasController } from './notas/notas.controller';
import { SimplesController } from './simples/simples.controller';

@Module({
  imports: [],
  controllers: [AppController, NotasController, SimplesController],
  providers: [AppService],
})
export class AppModule {}
