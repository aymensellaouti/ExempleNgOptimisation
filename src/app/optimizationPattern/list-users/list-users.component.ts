import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../users.service";

export const fibonnaci = (n: number): number => {
  if (n == 1 || n == 0) {
    return 1;
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
};

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUsersComponent {
  @Input() users: User[] = [];
  fibo(n: number): number {
    const fib = fibonnaci(n);
    console.log(fib);

    return fib;
  }
}
