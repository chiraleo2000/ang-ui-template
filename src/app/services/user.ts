import { InternalCache } from "../common/cache";
import { IRole } from "./role.service";

export class User {
    private static _userInfo: IUserProfile;

    public static get Current(): IUserProfile {
        if (!User._userInfo) {
            const profile: any = InternalCache.Get("profile_oag_dss");
            User._userInfo = profile || undefined;
        }
        return User._userInfo;
    }
    public static SetUser(userinfo: IUserProfile) {
        User._userInfo = userinfo;

        InternalCache.Set("profile_oag_dss", JSON.stringify(userinfo));
    }

    public static Save() {
        InternalCache.Set("profile_oag_dss", JSON.stringify(User._userInfo));
    }

    public static SwitchRole(role: IRole) {
        const profile: IUserProfile = User._userInfo;
        profile.Role = role;
        InternalCache.Set("profile_oag_dss", JSON.stringify(profile));
    }

    public static Clear(): void {
        InternalCache.Delete("profile_oag_dss");
        User._userInfo = undefined;
    }
}

export interface IUserProfile {
    UserId: number;
    UserName: string;
    PersonalId: number;
    FullNameTH: string;
    FirstNameTH: string;
    LastNameTH: string;
    PositionId: number;
    PositionNameTH: string;
    OrganizeId: number;
    OrganizeLevel: number;
    OrganizeRootId: number;
    OrganizeNameTH: string;
    OrganizeNameDetail: string;
    LoginType: string;
    ImageUrl: string;
    LastAccessDateTime: Date;
    UserType: number;
    SecureRegistrar: boolean;
    Role: IRole;
    Roles: IRole[];
}
