import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { AppNoTabUrls, GlobalConstant } from "../shared/constants";
import { Subject } from "rxjs";
import { takeUntil, filter } from "rxjs/operators";
import * as lodash from "lodash";
import { AppMenuService } from "../shared/services/app-menu/app-menu.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
})
export class MainPage {
  isActiveMenu: string = GlobalConstant.menuDailyFocus;
  closed$ = new Subject<any>();
  showTabs: boolean = true;

  constructor(private router: Router, private appMenuServices: AppMenuService) {
    this.appMenuServices.menuTabChange$.subscribe((tabName) => {
      this.isActiveMenu = tabName;
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntil(this.closed$)
      )
      .subscribe((event) => {
        this.showTabs = !lodash.some(AppNoTabUrls, (url) =>
          lodash.includes(event["url"], url)
        );
      });
  }

  ngOnDestroy() {
    this.closed$.next();
  }

  onTabChange(tabName: string) {
    this.isActiveMenu = tabName;
  }
}
