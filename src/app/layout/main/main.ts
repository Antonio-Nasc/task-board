import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Category } from '../../features/category/view/category/category';
import { MatDividerModule } from '@angular/material/divider';
import { Task } from '../../features/task/view/task/task';

const COMPONENTS = [Category, Task];
const MODULES = [MatDividerModule];
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENTS, ...MODULES],
  template: `
    <div class="h-screen flex w-full border-4 border-blue-700">
      <app-category  class="w-1/4 border-2 border-orange-500" />
      <mat-divider  class="h-full opacity-50"/>
      <app-task  class="w-3/4 border-2 border-green-500" />
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main { }
