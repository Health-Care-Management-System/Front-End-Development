import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserAuthService} from "./user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:8080";

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  )
  constructor(private httpClient:HttpClient,
              private userAuthService:UserAuthService) { }

  // @ts-ignore
  public login(loginData){
    return this.httpClient.post(this.PATH_OF_API + "/authenticate",loginData,{headers:this.requestHeader});
  }

  // @ts-ignore
  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles:any = this.userAuthService.getRoles();

    if(userRoles != null && userRoles){
      for(let i = 0;i<userRoles.length;i++){
        for(let j = 0;j < allowedRoles.length;j++){
          if(userRoles[i].roleName === allowedRoles[j]){
            isMatch = true;
            return isMatch;
          }
          else {
            return isMatch;
          }

        }
      }
    }
  }
}
