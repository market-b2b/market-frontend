export interface AuthenticationPersist {
    gdpr: {
        initial: boolean;
        settings: {
            analytics: boolean;
        };
    };
    authentication: {
        access_token: string | null;
        refresh_token: string | null;
    };
    i18n: {
        locale: string;
    };
    _persist: {
        version: number;
        rehydrated: boolean;
    };
}
