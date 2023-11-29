import {Injectable} from '@angular/core';
import {AuthenticationPersist} from '../dto/authentication-persist';

@Injectable({
    providedIn: 'root'
})
export class TokenStorage {
    private readonly localStorageKey = 'persist:root';

    getAccessToken(): string | null {
        const persist = this.getAuthenticationPersist();
        return persist?.authentication.token || null;
    }

    getRefreshToken(): string | null {
        const persist = this.getAuthenticationPersist();
        return persist?.authentication.refreshToken || null;
    }

    setAccessToken(token: string): void {
        let persist = this.getAuthenticationPersist() || this.createEmptyPersist();
        persist.authentication.token = token;
        this.savePersist(persist);
    }

    setRefreshToken(token: string): void {
        let persist = this.getAuthenticationPersist() || this.createEmptyPersist();
        persist.authentication.refreshToken = token;
        this.savePersist(persist);
    }

    clear(): void {
        localStorage.removeItem(this.localStorageKey);
    }

    private getAuthenticationPersist(): AuthenticationPersist | null {
        const persistString = localStorage.getItem(this.localStorageKey);
        return persistString ? JSON.parse(persistString) : null;
    }

    private savePersist(persist: AuthenticationPersist): void {
        localStorage.setItem(this.localStorageKey, JSON.stringify(persist));
    }

    private createEmptyPersist(): AuthenticationPersist {
        return {
            gdpr: {
                initial: false,
                settings: {
                    analytics: false,
                },
            },
            authentication: {
                token: null,
                refreshToken: null,
            },
            i18n: {
                locale: 'fr',
            },
            _persist: {
                version: -1,
                rehydrated: true,
            },
        };
    }
}
