import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppMenuService {
  private subjectMenuTabChange = new Subject<any>();
  menuTabChange$ = this.subjectMenuTabChange.asObservable();

  menuTabChange(tabName: string) {
    this.subjectMenuTabChange.next(tabName);
  }
}
