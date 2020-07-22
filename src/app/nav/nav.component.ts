import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NotificationsComponent } from '../notifications/notifications.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {
  @Output() searchCriteria = new EventEmitter<String>()
  searchword:String;
  isCollapsed:Boolean = true;
  @Input() check ;
  smallDialogSubscription:any;
  dialogRef: MatDialogRef<NotificationsComponent, any>;
  isDialogOpen:Boolean = false;
  constructor(
    private dialog : MatDialog,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
  }

  showNotifications(){
    if(!this.isDialogOpen){
      this.isDialogOpen = true;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.hasBackdrop = true;
      dialogConfig.maxHeight = '100vh';
      dialogConfig.maxWidth = '100vw';
      this.dialogRef = this.dialog.open(NotificationsComponent,dialogConfig);
      this.smallDialogSubscription = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe( size => {
          if(size.matches){
            console.log("hi")
            this.dialogRef.updateSize('90%','85%');
            this.dialogRef.updatePosition({top:'20%'});
          } else{
            this.dialogRef.updatePosition({top:'5%', right:'3%'});
            this.dialogRef.updateSize('30%','80%');
          }
        });
      this.dialogRef.afterClosed().subscribe(size => {
        this.smallDialogSubscription.unsubscribe();
        this.isDialogOpen = false;
      })
    } else{
      this.dialogRef.close();
    }
  } 

  closeNotification(){ 
    if(this.isDialogOpen){
      this.dialogRef.close();
    }
  }

  searchPosts(){
    this.searchCriteria.emit(this.searchword);
    console.log(this.searchword);
  }
  
}
