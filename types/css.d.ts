// CSS Module declarations
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Global CSS declarations for side-effect imports
declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// Specific CSS file declarations
declare module "./globals.css";
declare module "../styles/globals.css";
declare module "app/globals.css";