import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'cpf'})
export class CpfPipe implements PipeTransform{
    transform(value:string):string{
        let valorFormatado=value;

        valorFormatado=valorFormatado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4');
        
        return valorFormatado;
    }
}