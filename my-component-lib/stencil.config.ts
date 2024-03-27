import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'code-duplication-test',
  validatePrimaryPackageOutputTarget: true,
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      isPrimaryPackageOutputTarget: true,
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
