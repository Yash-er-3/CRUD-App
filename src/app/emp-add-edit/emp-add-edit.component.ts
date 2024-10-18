import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  standalone: true,
  imports: [MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatFormField,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClient
  ],
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.scss'
})

export class EmpAddEditComponent {
  empForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: DialogRef<EmpAddEditComponent>) {
    this.empForm = this._fb.group({
      firstName: '',
      lastname: '',
      Address: ''
    })
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert("Employee added successfully");
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }
}
