module.exports = {
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      ["@semantic-release/npm", {
        "tarballDir": "release",
        "pkgRoot": "packages/lib"
      }],
      ["@semantic-release/npm", {
        "tarballDir": "release",
        "pkgRoot": "packages/express"
      }],
      ["@semantic-release/npm", {
        "tarballDir": "release",
        "pkgRoot": "packages/fastify"
      }],
      ["@semantic-release/github", {
        "assets": "release/*.tgz"
      }],
      "@semantic-release/git"
    ],
    "preset": "angular"
}