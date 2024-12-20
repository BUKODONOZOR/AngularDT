import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService, Expense } from '../../data-access/expense.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './expense-list.component.html',
  providers: [ExpenseService],
})
export default class ExpenseListComponent {
  private _expenseService = inject(ExpenseService);
  private _router = inject(Router);

  expenses = signal<Expense[]>([]);
  loading = signal(false);

  
  isModalOpen = false; 
  selectedExpense: Expense | null = null; 

  constructor() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.loading.set(true);
    this._expenseService.getExpenses().subscribe({
      next: (expenses: Expense[]) => {
        this.expenses.set(expenses);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error al cargar gastos:', error);
        this.loading.set(false);
      },
    });
  }

  navigateToCreateExpense() {
    this._router.navigateByUrl('/expenses/new');
  }

  deleteExpense(id: string) {
    if (confirm('¿Estás seguro de que deseas borrar esta tarea?')) {
      this.loading.set(true);
      this._expenseService.delete(id).subscribe({
        next: () => {
          this.expenses.set(this.expenses().filter(expenses => expenses.id !== id));
          this.loading.set(false);
        },
        error: (error) => {
          console.error('Error al borrar tarea:', error);
          this.loading.set(false);
        }
      });
    }
  }

  openEditModal(expense: Expense) {
    this.selectedExpense = { ...expense }; 
    this.isModalOpen = true;
  }
  
  closeEditModal() {
    this.isModalOpen = false;
    this.selectedExpense = null; 
  }
  
  saveExpense() {
    if (this.selectedExpense) {
      this._expenseService.update(this.selectedExpense, this.selectedExpense.id).subscribe({
        next: (updatedExpense) => {
          const updatedExpenses = this.expenses().map(expense =>
            expense.id === updatedExpense.id ? updatedExpense : expense
          );
          this.expenses.set(updatedExpenses);
          this.closeEditModal(); 
        },
        error: (error) => {
          console.error('Error al guardar tarea:', error);
        }
      });
    }
  }
  

}
