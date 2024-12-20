import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthStateService } from '../../shared/services/aut-state.service';

export interface Expense {
  id: string;
  title: string;
  paid: boolean;
}

export type ExpenseCreate = Omit<Expense, 'id'>;

const API_URL = 'http://localhost:3000/expenses'; // JSON

@Injectable()
export class ExpenseService {
  private _http = inject(HttpClient);
  private _authState = inject(AuthStateService);

  loading = signal<boolean>(true);

  constructor() {
    console.log(this._authState.currentUser);
  }

  getExpenses(): Observable<Expense[]> {
    this.loading.set(true);
    return this._http.get<Expense[]>(API_URL).pipe(
      tap(() => this.loading.set(false)),
      catchError((error) => {
        this.loading.set(false);
        return throwError(() => error);
      })
    );
  }

  getExpense(id: string): Observable<Expense> {
    return this._http.get<Expense>(`${API_URL}/${id}`);
  }

  create(expense: ExpenseCreate): Observable<ExpenseCreate> {
    return this._http.post<ExpenseCreate>("http://localhost:3000/expenses", expense);
  }

  update(expense: ExpenseCreate, id: string): Observable<Expense> {
    return this._http.put<Expense>(`${API_URL}/${id}`, expense);
  }

  delete(id: string): Observable<void> {
    return this._http.delete<void>(`${API_URL}/${id}`); 
  }
}
