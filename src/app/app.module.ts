import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RTableRow }   from './RTable/RTableRow/RTableRow';
import { RTable }   from './RTable/RTable';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ RTable, RTableRow ],
    bootstrap:    [ RTable ]
})
export class AppModule { }