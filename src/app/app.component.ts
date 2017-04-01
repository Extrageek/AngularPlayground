import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _loadedFeature: string;
  public get loadedFeature(): string {
    return this._loadedFeature;
  }
  public set loadedFeature(v: string) {
    this._loadedFeature = v;
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
