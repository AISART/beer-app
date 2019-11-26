import {NgModule} from '@angular/core';
import {MenuBarComponent} from '../../shared/components/menu-bar/menu-bar.component';
import {HeadingComponent} from '../../shared/components/heading/heading.component';
import {JsonFilterByPipe} from '../../libs/pipes/jsonFilterByPipe';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

const component = [
  MenuBarComponent,
  HeadingComponent,
  JsonFilterByPipe
];

@NgModule({
  declarations: [
    ...component
  ],
  exports: [
    ...component
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedCoreModule {
}
