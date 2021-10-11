import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeI } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employee: EmployeeI;
  employeeForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.employee === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSave(): void {
    console.log('Saved', this.employeeForm.value);
  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      startDate: ['', [Validators.required]],
    });
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }
}
