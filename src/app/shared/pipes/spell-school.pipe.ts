import { Pipe, PipeTransform } from '@angular/core';
import { SpellSchool } from '../../../shared/interfaces/spell-school.interface';

@Pipe({
  standalone: true,
  name: 'school',
})
export class SpellSchoolPipe implements PipeTransform {
  transform(initial: string, schools: Array<SpellSchool>): string | undefined {
    return schools.find((school) => school.initial === initial)?.name;
  }
}
