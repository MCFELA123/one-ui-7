import { defineConfig } from 'vite';

export default defineConfig({
  //...
  optimizeDeps: {
    //... 
    include: [
      "@mui/material"
      // include other packages that may broke the build
    ]
 }
});
