module.exports = {
  ci: {
    collect: {
      url: ["https://loja.electrolux.com.br/"],
      startServerCommand: "rails server -e production",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
