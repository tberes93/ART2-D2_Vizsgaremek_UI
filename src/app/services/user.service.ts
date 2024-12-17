import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from '../models/authuser';
import { environment } from '../../environments/environment';
import { AppUser } from '../models/appuser';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }


    getUserData(userId: number) {
        return this.http.get<AppUser>(`${environment.apiUrl}/user/userdata/${userId}`);
    }


    /*
    let localVarPath = `/dontes/kerelem/${this.configuration.encodeParam({name: "rekordAzonosito", value: rekordAzonosito, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
    return this.httpClient.request<DontesTablazatAdatokPageDto>('get', `${this.configuration.basePath}${localVarPath}`,
        {
            context: localVarHttpContext,
            params: localVarQueryParameters,
            responseType: <any>responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        }
    );*/




    getAll() {
        return this.http.get<AuthUser[]>(`${environment.apiUrl}/users`);
    }
}