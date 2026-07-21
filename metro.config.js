const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Block Metro's file watcher from crawling GCS-related packages that create
// temporary build dirs during install (google-logging-utils, etc.).
// Without this, FallbackWatcher throws ENOENT when those temp dirs are deleted.
config.resolver = {
  ...config.resolver,
  blockList: [
    /.*\/google-logging-utils.*_tmp.*/,
    /.*\/@google-cloud\/.*/,
    /.*\/google-auth-library\/.*/,
    /.*\/gcp-metadata\/.*/,
    /.*\/google-gax\/.*/,
    /.*\/long\/.*/,
  ],
};

module.exports = config;
