import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent implements OnInit, OnDestroy {
  private timeout: NodeJS.Timeout | undefined;

  constructor(private dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
    this.timeout = setTimeout(() => {
      this.dialogRef.close();
    }, 2000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }
}
