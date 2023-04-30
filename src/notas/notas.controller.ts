import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

interface nota {
    id: number;
    titel: string;
    description: string;
}


@Controller('notas')
export class NotasController {
    notas: nota[] = [
        {
            id: 1,
            titel: 'matematica',
            description: 'perdio',
        },
        {
            id: 2,
            titel: 'matematica',
            description: 'perdio',
        },
        {
            id: 3,
            titel: 'matematica',
            description: 'perdio',
        },
    ]

    @Get(':id')
    getnota(@Param('id') id) {
        return this.notas.find((nota) => nota.id === parseInt(id));
    }

    @Get()
    getAllnotas() {
        return this.notas;
    }
}

