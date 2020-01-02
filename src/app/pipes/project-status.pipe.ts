import { Pipe, PipeTransform } from '@angular/core';

const dictionatry = {
	0:'not start',
  1:'in progress',
  2:'finished',
  3:'stopped'
};
@Pipe({
  name: 'projectStatus'
})
export class ProjectStatusPipe implements PipeTransform {
  transform(value: string): string {
    return dictionatry[value];
  }
}
