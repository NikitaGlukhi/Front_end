import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { tokenNotExpired } from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class AuthService {
  options = {
    languageDictionary: {
      title: 'Post Office'
    },
    theme: {
      logo: 'http://vignette2.wikia.nocookie.net/epicrapbattlesofhistory/images/c/cb/Internet-troll-face-explorer.png/revision/latest?cb=20140216160819',
      primaryColor: '#18ab0c'
    },
    allowShowPassword: true,
    rememberLastLogin: false,
    socialButtonStyle: 'small',
    additionalSignUpFields: [{
      type: 'text',
      name: 'first_name',
      placeholder: 'your first name',
      icon: 'file:///home/nikita_glukhi/Downloads/fax.png',
      validator: function(first_name) {
        return {
          valid: first_name.length >= 4,
          hint: 'Must have 4 or more chars'
        }
      },
    },
      {
        type: 'text',
        name: 'last_name',
        placeholder: 'your last name',
        icon: 'file:///home/nikita_glukhi/Downloads/fax.png',
        validator: function(last_name) {
          return {
            valid: last_name.length >= 3,
            hint: 'Must have 4 or more chars'
          }
        }
      },
      {
        type: 'text',
        name: 'phone_number',
        placeholder: 'your phone number(+380)',
        icon: 'file:///home/nikita_glukhi/Downloads/fax.png',
        validator: function(phone_number) {
          return {
            valid: phone_number.length >= 10,
            hint: 'Must have 10 or more chars'
          }
        }
      },
      {
        type: 'select',
        name: 'gender',
        placeholder: 'choose your gender',
        options: [
          { value: 'm', label: 'male' },
          { value: 'f', label: 'female' }
        ],
        icon: 'https://example.com/assests/location_icon.png',
        prefill: 'us'
      }
    ],
    auth: {
      redirectUrl: environment.auth0.callbackURL,
      responseType: 'token id_token',
      audience: `https://${environment.auth0.domain}/userinfo`,
      params: {
        scope: 'openid profile'
      }
    },
    closable: false
  };

  lock = new Auth0Lock(environment.auth0.clientId, environment.auth0.domain, this.options);

  constructor(private router: Router) {
    this.lock.on('authenticated', (authResult: any) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          throw new Error(error);
        }
        localStorage.setItem('token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.router.navigate(['/']);
      })
    })
  }

  login() {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }

  isAuthenticated() {
    return tokenNotExpired();
  }
}
