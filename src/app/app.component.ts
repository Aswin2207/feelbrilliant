import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  asin: string;
  salesrank: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Brilliant Defend - Immune Defense 7 in 1 Immune Support with Elderberry Capsules for Immunity Boost with Selenium and Colostrum Dietary Supplement, 90 Capsules', asin: 'B09RQ6W8SN', salesrank: 349727},
  {position: 2, name: 'PMS & PCOS Relief for Women – Supports Hormonal Balance – Decreases Irritability & Cramping – Corrects Irregular Period & Reduces Hormonal Acne – Vegan & Gluten Free (60 Tablets)', asin: 'B09RQ6TPS7', salesrank: 663631},
  {position: 3, name: 'Brilliant Defend - Immune Defense 7 in 1 Immune Support with Elderberry Capsules for Immunity Boost with Selenium and Colostrum Dietary Supplement, 90 Capsules', asin:'B09RQ6DLBX', salesrank: 77893},
  {position: 4, name: 'PMS & PCOS Relief for Women – Supports Hormonal Balance – Decreases Irritability & Cramping – Corrects Irregular Period & Reduces Hormonal Acne – Vegan & Gluten Free (60 Tablets)', asin: 'B099SFB7XP', salesrank: 122702},
  {position: 5, name: 'Cholesterol Management Supplement – Supports Healthy HDL & LDL Levels – Improves Genetically High Cholesterol – Safe & Natural – Vegan & Gluten Free (90 Tablets)', asin: 'B09RQ6W8SN', salesrank: 542653},
  {position: 6, name: 'PMS & PCOS Relief for Women – Supports Hormonal Balance – Decreases Irritability & Cramping – Corrects Irregular Period & Reduces Hormonal Acne – Vegan & Gluten Free (60 Tablets)', asin: 'B09RQ6TPS7', salesrank: 716111},
  {position: 7, name: 'Brilliant Enhance - Bioavailability & Absorption All-Natural Dietary Capsule – Improves Food Absorption & Optimizes Cell Function - Promotes Nutrient Retention (60 Capsules)', asin: 'B09RQ6DLBX', salesrank: 73932},
  {position: 8, name: 'Cholesterol Management Supplement – Supports Healthy HDL & LDL Levels – Improves Genetically High Cholesterol – Safe & Natural – Vegan & Gluten Free (90 Tablets)', asin: 'B099SFB7XP', salesrank: 179818},
  {position: 9, name: 'PMS & PCOS Relief for Women – Supports Hormonal Balance – Decreases Irritability & Cramping – Corrects Irregular Period & Reduces Hormonal Acne – Vegan & Gluten Free (60 Tablets)', asin: 'B09RQ6TPS7', salesrank: 517275},
  {position: 10, name: 'Brilliant Enhance - Bioavailability & Absorption All-Natural Dietary Capsule – Improves Food Absorption & Optimizes Cell Function - Promotes Nutrient Retention (60 Capsules)', asin: 'B09RQ6W8SN', salesrank: 640380},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild(MatSidenav)
 sidenav!: MatSidenav;
 title = 'mynewapp';
  constructor(private observer: BreakpointObserver) {}
  displayedColumns: string[] = ['position', 'name', 'asin', 'sales rank'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
