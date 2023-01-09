import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent {
  public close: boolean;

  constructor() {
    this.close = false;
  }

  public toggle() {
    this.close = !this.close;
  }
}
