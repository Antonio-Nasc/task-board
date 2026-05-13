import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MainList } from '../../components/main-list/main-list';
import { ColorsList } from '../../components/colors-list/colors-list';
import { CategoryService } from '../../services/category';
import { AsyncPipe } from '@angular/common';

const COMPONENTS = [MainList, ColorsList]
const PIPES = [AsyncPipe]

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [...COMPONENTS, ...PIPES],
  template: `
  <div class="flex flex-col justify-between h-full w-full">
    @if (categories$ | async) {
      <app-main-list />
      <app-colors-list />
    }
  </div>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Category {
  private readonly categoryService = inject(CategoryService);
  public categories$ = this.categoryService.getCategories();
}
