import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { build$ } from 'protractor/built/element';

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
      if (JSON.stringify(params) !== '{}') {
        // this.router.navigate(['/first-component', { chat_id: params['chat_id'] }]);
        this.router.navigate(['/first-component'], { queryParams: { chat_id: params['chat_id'] } });
      }
    });
  }
  buildMenu(): void {
    this.items = [{
      label: 'Menu',
      icon: 'pi pi-microsoft',
      items: [
        { label: 'Admin Panel', icon: 'pi pi-shield', routerLink: '/second-component' },
        { label: 'Group', icon: 'pi pi-chart-bar', routerLink: ['/first-component'] }
      ]
    }]
  }
}