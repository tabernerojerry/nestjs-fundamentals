import { registerAs } from '@nestjs/config';

// Namespace Configuration
export default registerAs('coffees', () => ({
  foo: 'bar',
}));
