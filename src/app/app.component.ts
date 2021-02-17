import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (JSON.stringify(params) !== '{}') {
        // this.router.navigate(['/first-component', { chat_id: params['chat_id'] }]);
        this.router.navigate(['/first-component'], { queryParams: { chat_id: params['chat_id'] } });
      }
    });
  }
}