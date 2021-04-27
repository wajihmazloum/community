import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'community';
  visibility = true;
  constructor(private router: Router, private location: Location) {
    this.visibility = false;
 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        // (<HTMLDivElement>document.getElementById('spinner')).hidden = false
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        // (<HTMLDivElement>document.getElementById('spinner')).hidden = true

        if (this.router.url != "/") {
          this.visibility = true
        } else {
          this.visibility = false
        }
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }
  // ngOnInit(): void {
  //   this.auth.onAuthStateChanged((user)=>{
  //     if (user){
  //       (<HTMLImageElement>document.getElementById('logs')).hidden = true;
  //       (<HTMLImageElement>document.getElementById('profile')).hidden = false;
  //     }else{
  //       (<HTMLImageElement>document.getElementById('logs')).hidden = false;
  //       (<HTMLImageElement>document.getElementById('profile')).hidden = true;
  //     }
  //   })
  // }


  backClicked() {
    // // this.location.back();
    // if (this.router.url.includes('/post/')) {
    // //   // this.router.navigate(['/']);
    // //   this.router.routeReuseStrategy.shouldReuseRoute = function() {
    // //     return false;
    // // };
    // // this.router.onSameUrlNavigation = 'reload';
    // // this.router.navigate(['/']);
    // this.router.navigateByUrl('/');
    // } else if (this.router.url == '/account/profile' || this.router.url == "/account/logs") {
    //   this.router.navigate(['/']);
    // }
    // this.router.navigateByUrl('/');
    // this.router.navigate(['/','/'])
    // window.location.href='/'
    window.location.replace('/')

  //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
  //     return false;
  // }
  // this.router.onSameUrlNavigation = 'reload';

  // this.router.navigate(['/']);
  }



}

