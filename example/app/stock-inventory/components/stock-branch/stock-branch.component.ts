import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        
        <input type="text" placeholder="Branch ID" formControlName="branch">

        <div ngxErrors="store.branch">
          <div class="error" ngxError="required" [when]="['dirty', 'touched']">
            Branch ID is required
          </div>
          <div class="error" ngxError="invalidBranch" when="dirty">
            Invalid branch code: 1 letter, 3 numbers
          </div>
          <div class="error" ngxError="unknownBranch" when="dirty">
            Unknown branch, please check the ID
          </div>
        </div>
        
        <input type="text" placeholder="Manager Code" formControlName="code">

        <div ngxErrors="store.code">
          <div class="error" ngxError="required" [when]="['touched']">
            Manager ID is required
          </div>
          <div class="error" [ngxError]="['minlength', 'maxlength']" [when]="['dirty', 'touched']">
            Minlength is 2, max length is 5
          </div>
        </div>

      </div>
    </div>
  `
})
export class StockBranchComponent {
  @Input()
  parent: FormGroup;
}