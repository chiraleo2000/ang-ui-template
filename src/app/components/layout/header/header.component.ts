import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ClearDataService } from 'src/app/services/clear-data.service';
import { LoginService } from 'src/app/services/login.service';
import { IUserProfile, User } from 'src/app/services/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() menuOpened = new EventEmitter<boolean>();
    usershow: IUserProfile;
    @Input() menuSlideOpen;
    @Input() defaultMenuOpened;
    innerWidth;
    buttonVisable = true;
    profileSettings = [{ id: "logout", text: 'ออกจากระบบ', icon: 'runner' }]
    menu: any = [
        { value: 1, name: "ออกจากระบบ", icon: "fas fa-sign-out-alt" }
    ];
    constructor(private _clearServ: ClearDataService, private _loginServ: LoginService) { }

    ngOnInit() {
        this.usershow = User.Current;
        this.onWindowResize()
    }

    onDropDownClick(e: any) {
        console.log(e);
        if (e.itemData.id === "logout" || e.itemData.value === 1) {
            this.logout()
        }
    }

    private logout() {
        this._loginServ.logout();
    }


    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 768) {
            this.navMenuSide(false);
            this.menuSlideOpen = false;
        } else {
            this.navMenuSide(true);
            this.menuSlideOpen = true;
        }
        // this.navMenuSide();
    }


    menuOpenedEvent() {
        this.menuSlideOpen = !this.menuSlideOpen;
        this.menuOpened.emit(this.menuSlideOpen);
        this.navMenuSide(this.menuSlideOpen);
    }
    navMenuSide(e) {
        const elementMenuId = document.getElementById('sidebar-menu');
        const elementContent = document.getElementsByClassName('main-panel');
        const elementsidepadding = document.getElementsByClassName('sidebar-wrapper');
        const elementfont = document.getElementsByClassName('font-sidebar-role');

        const elementMenuHtml = elementContent[0] as HTMLElement;
        const elementMenusidePadding = elementsidepadding[0] as HTMLElement;
        const elementfonthtml = elementfont[0] as HTMLElement;
        if (e) {
            this.buttonVisable = true;
            elementMenuHtml.style.paddingLeft = '280px';
            elementMenuId.style.width = '280px';
            elementMenusidePadding.style.padding = '15px';
            elementfonthtml.style.display = "unset"
        }
        else {
            this.buttonVisable = false;
            elementMenuId.style.width = '0px';
            elementMenuHtml.style.paddingLeft = '0px';
            elementMenusidePadding.style.padding = '0px';
            elementfonthtml.style.display = "none"
        }

    }
}
