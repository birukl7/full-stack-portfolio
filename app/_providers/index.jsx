import { BalancerProvider } from './balancer';
import { StyledComponentsRegistry } from './styled-components';
import { ThemeProvider, useTheme } from './theme';

export { ThemeProvider, useTheme };

/** @param {import('react').PropsWithChildren<unknown>} */
export function Providers({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <BalancerProvider>{children}</BalancerProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
