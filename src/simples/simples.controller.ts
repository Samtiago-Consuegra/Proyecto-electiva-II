import { Controller, Get, Query } from '@nestjs/common';

@Controller('simples')
export class SimplesController {
    @Get('xyz')
    getpath() {
        return '<center> <h1>Hola a todos :p</h1> </center>';
    }
    @Get()
    getQuery(@Query('pqr') pqr: string) {
        return pqr;
    }
}
