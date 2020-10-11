import { registerAs } from '@nestjs/config';

// Namespace Configuration
export const coffeesConfig = registerAs('coffees', () => ({
  foo: 'bar',
}));
