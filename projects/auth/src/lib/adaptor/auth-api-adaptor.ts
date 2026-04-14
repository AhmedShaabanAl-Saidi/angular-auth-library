import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor/adaptor';
import { DeforeAdaptot } from '../interfaces/adaptor/defore-adaptot';

@Injectable({
  providedIn: 'root',
})
export class AuthApiAdaptor implements Adaptor {
  adapt(data: DeforeAdaptot) {
    return {
      message: data.message,
      token: data.token,
      email: data.user.email,
      username: data.user.username,
    }
  }
}
