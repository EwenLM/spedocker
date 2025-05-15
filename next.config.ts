import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpackDevMiddleware: (config: {
      watchOptions: {
        poll: number; // vérifie les fichiers toutes les 1 secondes
        aggregateTimeout: number; // délai de regroupement des changements
      };
    }) => {
    config.watchOptions = {
      poll: 1000,           // vérifie les fichiers toutes les 1 secondes
      aggregateTimeout: 300 // délai de regroupement des changements
    };
    return config;
  },
};

export default nextConfig;
