import {NgModule} from '@angular/core';
import {MenuBarComponent} from '../../shared/components/menu-bar/menu-bar.component';
import {HeadingComponent} from '../../shared/components/heading/heading.component';

const component = [
  MenuBarComponent,
  HeadingComponent
];

@NgModule({
  declarations: [
    ...component
  ],
  exports: [
    ...component
  ],

})
export class SharedCoreModule {
}
