import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MyTableComponent } from './my-table/my-table.component';
import { MyNavComponent } from './my-nav/my-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        MyTableComponent,
        MyNavComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTabsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
