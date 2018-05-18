import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MyTableComponent } from './my-table/my-table.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { MyNavComponent } from './my-nav/my-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        MainNavComponent,
        MyTableComponent,
        MyCompComponent,
        MyNavComponent
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
