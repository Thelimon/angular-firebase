import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  fakeData = [
    {
      name: 'manuel',
      lastName: 'aigiig',
      email: 'fdkfdfs@gmail.com',
      startDate: '2020/2/2001',
    },
    {
      name: 'manuel',
      lastName: 'aigiig',
      email: 'fdkfdfs@gmail.com',
      startDate: '2020/2/2001',
    },
    {
      name: 'manuel',
      lastName: 'aigiig',
      email: 'fdkfdfs@gmail.com',
      startDate: '2020/2/2001',
    },
    {
      name: 'manuel',
      lastName: 'aigiig',
      email: 'fdkfdfs@gmail.com',
      startDate: '2020/2/2001',
    },
    {
      name: 'manuel',
      lastName: 'aigiig',
      email: 'fdkfdfs@gmail.com',
      startDate: '2020/2/2001',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGoToEdit(item: any): void {
    this.navigationExtras.state!.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoToSee(item: any): void {
    this.navigationExtras.state!.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

  onGoToDelete(item: any): void {
    alert('Deleted');
  }
}
