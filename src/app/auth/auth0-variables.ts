interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  leeway: number;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'hfSKpj0Q9cyF0wj2UMx7za99E8HGLXzn',
  domain: 'pgadby.eu.auth0.com',
  callbackURL: 'http://localhost:4200/',
  leeway: 1000
};
