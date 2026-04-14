# auth-lib

Angular workspace for an authentication library (`projects/auth`) and a demo application shell.

## Tech stack

- Angular 21
- TypeScript 5.9
- RxJS 7
- ng-packagr (library packaging)

## Workspace structure

- `projects/auth`: reusable auth library
- `src`: demo/host Angular application

## Installation

```bash
npm install
```

## Useful scripts

```bash
# Start demo application
npm start

# Build all configured projects
npm run build

# Build the auth library only
ng build auth

# Run tests
npm test
```

## Auth library overview

Primary service: `Auth` in `projects/auth/src/lib/auth.ts`.

Supported API methods:

- `login`
- `register`
- `logout`
- `forgotPassword`
- `verifyResetCode`
- `resetPassword`
- `changePassword`
- `deleteMyAccount`
- `editProfile`

The service uses endpoints defined in `AuthEndPoint` (`projects/auth/src/lib/enums/auth-endpoint.ts`) with this current base URL:

`https://exam.elevateegy.com/api/v1/auth`

## Clean Architecture (current approach)

The library follows a lightweight layered style aligned with Clean Architecture ideas:

- Contract layer: `AuthAPI` (`projects/auth/src/lib/base/auth-api.ts`) defines the use-case-facing interface.
- Implementation layer: `Auth` (`projects/auth/src/lib/auth.ts`) implements the contract and orchestrates HTTP calls.
- Mapping layer: `AuthApiAdaptor` (`projects/auth/src/lib/adaptor/auth-api-adaptor.ts`) transforms backend payloads into app-friendly shapes.
- Boundary models: DTOs and response interfaces under `projects/auth/src/lib/interfaces` isolate transport details.

This separation keeps application code less coupled to raw API payloads and easier to evolve.

## Abstraction

Abstraction is applied through the `AuthAPI` abstract class:

- Consumers depend on auth behavior (`login`, `register`, etc.) instead of low-level HTTP details.
- The concrete implementation (`Auth`) can change internally without forcing changes in consuming code.
- Adaptors provide an additional abstraction boundary for response shape normalization.

In practice, this supports testability and maintainability by reducing direct dependency on endpoint and payload specifics.

## Library usage example

```ts
import { Injectable, inject } from '@angular/core';
import { Auth } from 'auth';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
	private readonly auth = inject(Auth);

	signIn(email: string, password: string) {
		return this.auth.login({ email, password });
	}
}
```

## Build and publish the library

```bash
ng build auth
cd dist/auth
npm publish
```

## Notes

- The library currently exports `Auth` via `projects/auth/src/public-api.ts`.
- Ensure `HttpClient` is available in the consuming app configuration.
