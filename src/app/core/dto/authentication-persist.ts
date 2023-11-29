export interface AuthenticationPersist {
    gdpr: {
        initial: boolean;
        settings: {
            analytics: boolean;
        };
    };
    authentication: {
        token: string | null;
        refreshToken: string | null;
    };
    i18n: {
        locale: string;
    };
    _persist: {
        version: number;
        rehydrated: boolean;
    };
}
