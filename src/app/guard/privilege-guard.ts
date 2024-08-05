import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { User } from "../services/user";
import { inject } from "@angular/core";
import { PrivilegeService } from "../services/privilege.service";

export const privilegeGuard: CanActivateFn = async (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {


    const privServ = inject(PrivilegeService);
    const router = inject(Router);
    const r = await privServ.loadMenu(User.Current.Role.RoleId).toPromise();
    if (!r) {
        router.navigate(["/404-menu"]);
        return false;
    }

    const menu = privServ.menu.find(_ => _.MODULE_URL && state.url.toLowerCase().startsWith(_.MODULE_URL.toLowerCase()));
    if (!menu) {
        router.navigate(["/404-menu"]);
        return false;
    }


    // INFO: ตรวจสอบว่าถ้ามีสิทธ์ใดสิทธ์หนึ่งที่เป็น true ให้เข้าได้
    if (
        Object.values(menu.PERMISSION).every(_ => !_)
    )
    {
        router.navigate(["/404-menu"]);
        return false;
    }

    privServ.activeMenuCode = menu.MODULE_CODE;
    return true;
};
