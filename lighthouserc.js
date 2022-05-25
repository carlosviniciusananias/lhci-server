module.exports = {
  ci: {
    collect: {
      url: ["https://loja.electrolux.com.br/"],
      startServerCommand: "rails server -e production",
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'uses-rel-preload': 'off',
        'uses-rel-preconnect': 'off',
      },
    },
    upload: {
      target: "temporary-public-storage",
      // target: 'lhci',
      // serverBaseUrl: 'https://your-lhci-server-url.example.com',
      // token: 'Your *build token* goes here', // could also use LHCI_TOKEN variable instead
    },
  },
};
