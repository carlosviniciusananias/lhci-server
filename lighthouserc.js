module.exports = {
  ci: {
    collect: {
      url: ["https://loja.electrolux.com.br/"],
    },
    asserts: {
      "preset": "lighthouse:recommended",
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "http://localhost:9001",
      token: "777d08fe-6ef9-4cd4-980b-6cb690881297" // process.env.LHCI_TOKEN, // 7d378aad1b3844a7a8813ed1eddf3c3e3bf5f0c9f6d0056a97e50ce8e6e3c7ca
    },
  },
};
