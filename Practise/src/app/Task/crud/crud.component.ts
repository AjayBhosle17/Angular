import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  categories:Category[]=[
    new Category(1,'Electronics',4),
    new Category(2,'Books',5),
    new Category(3,'sports',5)

  ]

  newCategory: Category = new Category(0, '', 0);
  isEditing = false;
  editIndex: number | null = null;

  addCategory() {
    if (!this.newCategory.name.trim() || this.newCategory.rating < 1 || this.newCategory.rating > 5) return;
    
    if (this.isEditing && this.editIndex !== null) {
      this.categories[this.editIndex] = { ...this.newCategory };
      this.isEditing = false;
    } else {
      this.newCategory.id = this.categories.length + 1;
      this.categories.push({ ...this.newCategory });
    }
    this.newCategory = new Category(0, '', 0);
  }

  editCategory(index: number) {
    this.newCategory = { ...this.categories[index] };
    this.isEditing = true;
    this.editIndex = index;
  }

  deleteCategory(index: number) {
    this.categories.splice(index, 1);
  }
}
