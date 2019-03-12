import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetOverviewComponent } from './bottom-sheet-overview/bottom-sheet-overview.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(
    private bottomSheet: MatBottomSheet
  ) { }

  openBottomSheet(
    
  ): void {
    this.bottomSheet.open(BottomSheetOverviewComponent);
  }

  ngOnInit() {
  }

}
