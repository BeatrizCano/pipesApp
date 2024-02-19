import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'beatriz';
  public nameUpper: string = 'BEATRIZ';
  public fullName: string = 'bEatRIZ cAnO';

  public customDate: Date = new Date();
}
