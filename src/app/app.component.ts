import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  public items: MenuItem[];

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.buildMenu();
    this.route.queryParams.subscribe(params => {
      debugger
      if (JSON.stringify(params) !== '{}') {
        // this.router.navigate(['/first-component', { chat_id: params['chat_id'] }]);
        if (params.chat_id) this.router.navigate(['/first-component'], { queryParams: { chat_id: params['chat_id'] } });
        if (params.token) this.router.navigate(['/login'], { queryParams: { token: params['token'] } });
      }
    });
  }
  buildMenu(): void {
    this.items = [{
      label: 'Menu',
      icon: 'pi pi-microsoft',
      items: [
        { label: 'Admin Panel', icon: 'pi pi-shield', routerLink: ['/login'] },
        { label: 'Group', icon: 'pi pi-chart-bar', routerLink: ['/first-component'] }
      ]
    }]
  }
}