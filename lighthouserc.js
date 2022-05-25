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
    },
  },
};
