import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'group-panel',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router, private apiService: ServicesService) { }

  displayedColumns: string[] = ['first_name', 'last_name', 'points'];
  dataSource: Array<any>;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.apiService.fetchData(params.chat_id).subscribe((data: any) => {
        data.message.sort((a, b) => b.points - a.points);
        this.dataSource = data.message;
      })
    });
  }

}