import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from "@angular/material/divider";
import { CategoryService } from '../../services/category';
import { categoryBackgroundColors } from '../../constants/category-colors';
const MODULES = [MatDividerModule]

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [...MODULES],
  template: `
  <section class="flex flex-col gap-4 h-auto mb-4">
    <mat-divider class="h-full opacity-50" vertical />
    <div class="flex flex-wrap justify-center items-center mt-4 px-2 gap-4">
      @for (category of categories(); track category.id) {
        <span class="select-nome opacity-80 hover:opacity-100 cursor-pointer flex items-center justify-center {{categoryBackgroundColors[category.color]}} px-4 py-2 rounded-2xl w-[80px] text-center text-white font-semibold">
          {{category.name}}
        </span>
      }
    </div>
  </section>
  `,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsList {
  private readonly categoryService = inject(CategoryService);
  public categories = this.categoryService.categories;
  public categoryBackgroundColors = categoryBackgroundColors;
}
