import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ContentComponent } from '../content/content.component';
import { TaskviewComponent } from '../taskview/taskview.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatTabsModule,ContentComponent,TaskviewComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
