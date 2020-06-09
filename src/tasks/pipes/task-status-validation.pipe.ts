import { PipeTransform } from '@nestjs/common';

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: any) {
    value = value.toUpperCase();
    return value;    
  }
}