import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    return jwtDecode<JwtPayload>(token);
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    if (token) {
      return true;
    }
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    this.isTokenExpired(token);
    return false;
  }

  getToken(): string {
    // TODO: return the token
    const activeUser = localStorage.getItem('token') || '';
    return activeUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('token', idToken);
    // TODO: redirect to the home page
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('token');
    // TODO: redirect to the login page
    window.location.assign('/login'); 
  }
}

export default new AuthService();
