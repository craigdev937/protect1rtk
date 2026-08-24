import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
    plugins: [pluginReact()],
    server: {
        port: 6173,
        open: true
    },
    output: {
        assetPrefix: isProd ? "/protect1rtk/" : "auto"
    }
});


