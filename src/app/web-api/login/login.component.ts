import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login implements OnInit {
  data: any;
  displayedColumns: string[] = ['first_name', 'last_name', 'points'];
  dataSource: Array<any>;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ServicesService) { }

  // ngOnInit(): void {
  debugger //router get value

  // }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      debugger
      this.apiService.getAccessToAdminPanel(params.token).subscribe((data: any) => {
        this.apiService.fetchData(params.token).subscribe((data: any) => {
          debugger
          data.message.sort((a, b) => b.points - a.points);
          this.dataSource = data.message;
          debugger
        })
      })
    });
  }
}
