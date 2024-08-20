import { environment } from "./src/environments/environments";


// export function getBaseUrl(): string {
//     const env = process.env.environment || 'dev';
//     return config[env].baseUrl;
// }

export function getBaseUrl(): string {
    return `${environment.SCHEMA}://${environment.SUBDOMAIN}.${environment.API_URL}`;
}
