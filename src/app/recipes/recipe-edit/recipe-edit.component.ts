import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  private _editMode: boolean;
  private _id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
       });
  }

  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }

  public get editMode(): boolean {
    return this._editMode;
  }
  public set editMode(v: boolean) {
    this._editMode = v;
  }
}
