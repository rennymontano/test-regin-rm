import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment/moment';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.getFormatPrint(value);
  }

  getFormatPrint(value: any): any {
    const auxValue = moment(value, 'YYYY-MM-DD HH:mm:ss')
    const date = moment(value).format('DD-MM-YYYY');
    const hoy = moment().format('DD-MM-YYYY');
    const ayer = moment().subtract(1, 'd').format('DD-MM-YYYY');

    if(hoy === date) {
      return auxValue.format('hh:mm a');
    }
    
    if(ayer === date) {
      return 'Yesterday';
    }

    return auxValue.format('MMM DD');
  }

}
