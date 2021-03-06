module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        withCredentials: true,
        credentials: "include",
      },
      "^/assets": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        withCredentials: true,
        credentials: "include",
      },
      "^/streams": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        withCredentials: true,
        credentials: "include",
      },
    },
  },
};
