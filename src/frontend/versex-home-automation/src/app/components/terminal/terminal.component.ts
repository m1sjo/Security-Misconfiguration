import { Component, HostBinding } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';
import { Log } from 'src/app/models/log.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent {
  public dataSource!: Array<Log>;

  constructor(public logService: LogService, public snackBar: MatSnackBar) {
    this.getAllLogs();
    console.log(this.dataSource);
  }

  getAllLogs(): void {
    this.logService.getAllLogs().subscribe({
      next: (value) => {
        console.log(value);
        this.dataSource = value.logs;
      },
      complete: () => {
        console.log('loaded all Logs')
      },
      error: (err) => {
        console.log(err);
        this.openSnackBarError('Something went wrong', 'OK');
      }
    });
  }

  openSnackBarError(message: string, action: string) {
    this.snackBar.open(message, action,{
      duration: 3000,
      panelClass: ['errorStyle']
    });
  }
}
