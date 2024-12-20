import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpenseCreate, ExpenseService } from '../../data-access/expense.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './expense-form.component.html',
  providers: [ExpenseService , CommonModule],
})
export default class ExpenseFormComponent {
  private _formBuilder = inject(FormBuilder);
  private _expenseService = inject(ExpenseService);
  private _router = inject(Router);

  loading = signal(false);

  form = this._formBuilder.group({
    title: this._formBuilder.control('', Validators.required),
    paid: this._formBuilder.control(false, Validators.required),
  });

  async submit() {
    if (this.form.invalid) return;
  
    try {
      this.loading.set(true);
  
      const { title, paid } = this.form.value;
      const expense: ExpenseCreate = {
        title: title || '',
        paid: !!paid,
      };
  
      console.log('Enviando tarea:', expense);
  
      await this._expenseService.create(expense).toPromise(); 
      this._router.navigateByUrl('/expenses');
    } catch (error) {
      console.error('Error al guardar la tarea:', error);
    } finally {
      this.loading.set(false);
    }
  }
  
}
