import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-folder-dialog',
  templateUrl: './new-folder-dialog.component.html',
  styleUrls: ['./new-folder-dialog.component.scss']
})
export class NewFolderDialogComponent implements OnInit {
  public folderName : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
