(function (e) {
  function t(t) {
    for (
      var o, r, s = t[0], u = t[1], i = t[2], l = 0, d = [];
      l < s.length;
      l++
    )
      (r = s[l]),
        Object.prototype.hasOwnProperty.call(c, r) && c[r] && d.push(c[r][0]),
        (c[r] = 0);
    for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
    b && b(t);
    while (d.length) d.shift()();
    return a.push.apply(a, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], o = !0, r = 1; r < n.length; r++) {
        var s = n[r];
        0 !== c[s] && (o = !1);
      }
      o && (a.splice(t--, 1), (e = u((u.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = {app: 0},
    c = {app: 0},
    a = [];
  function s(e) {
    return (
      u.p +
      'js/' +
      ({}[e] || e) +
      '.' +
      {
        'chunk-18c1dfdc': '41cfb97c',
        'chunk-23002440': 'bcad7d9e',
        'chunk-25ab6c4f': '84955f29',
        'chunk-2b396476': 'ad558799',
        'chunk-315abc36': 'b6557cbd',
        'chunk-72d682ef': '0ff8c894',
        'chunk-7bdb6dcd': '06ecd263',
      }[e] +
      '.js'
    );
  }
  function u(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = {i: t, l: !1, exports: {}});
    return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.e = function (e) {
    var t = [],
      n = {
        'chunk-18c1dfdc': 1,
        'chunk-23002440': 1,
        'chunk-25ab6c4f': 1,
        'chunk-2b396476': 1,
        'chunk-315abc36': 1,
        'chunk-72d682ef': 1,
        'chunk-7bdb6dcd': 1,
      };
    r[e]
      ? t.push(r[e])
      : 0 !== r[e] &&
        n[e] &&
        t.push(
          (r[e] = new Promise(function (t, n) {
            for (
              var o =
                  'css/' +
                  ({}[e] || e) +
                  '.' +
                  {
                    'chunk-18c1dfdc': 'aa467276',
                    'chunk-23002440': 'ca60ec52',
                    'chunk-25ab6c4f': '3cf9c0d8',
                    'chunk-2b396476': '327e2e50',
                    'chunk-315abc36': '96772172',
                    'chunk-72d682ef': 'ca60ec52',
                    'chunk-7bdb6dcd': 'ca60ec52',
                  }[e] +
                  '.css',
                c = u.p + o,
                a = document.getElementsByTagName('link'),
                s = 0;
              s < a.length;
              s++
            ) {
              var i = a[s],
                l = i.getAttribute('data-href') || i.getAttribute('href');
              if ('stylesheet' === i.rel && (l === o || l === c)) return t();
            }
            var d = document.getElementsByTagName('style');
            for (s = 0; s < d.length; s++) {
              (i = d[s]), (l = i.getAttribute('data-href'));
              if (l === o || l === c) return t();
            }
            var b = document.createElement('link');
            (b.rel = 'stylesheet'),
              (b.type = 'text/css'),
              (b.onload = t),
              (b.onerror = function (t) {
                var o = (t && t.target && t.target.src) || c,
                  a = new Error(
                    'Loading CSS chunk ' + e + ' failed.\n(' + o + ')'
                  );
                (a.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (a.request = o),
                  delete r[e],
                  b.parentNode.removeChild(b),
                  n(a);
              }),
              (b.href = c);
            var f = document.getElementsByTagName('head')[0];
            f.appendChild(b);
          }).then(function () {
            r[e] = 0;
          }))
        );
    var o = c[e];
    if (0 !== o)
      if (o) t.push(o[2]);
      else {
        var a = new Promise(function (t, n) {
          o = c[e] = [t, n];
        });
        t.push((o[2] = a));
        var i,
          l = document.createElement('script');
        (l.charset = 'utf-8'),
          (l.timeout = 120),
          u.nc && l.setAttribute('nonce', u.nc),
          (l.src = s(e));
        var d = new Error();
        i = function (t) {
          (l.onerror = l.onload = null), clearTimeout(b);
          var n = c[e];
          if (0 !== n) {
            if (n) {
              var o = t && ('load' === t.type ? 'missing' : t.type),
                r = t && t.target && t.target.src;
              (d.message =
                'Loading chunk ' + e + ' failed.\n(' + o + ': ' + r + ')'),
                (d.name = 'ChunkLoadError'),
                (d.type = o),
                (d.request = r),
                n[1](d);
            }
            c[e] = void 0;
          }
        };
        var b = setTimeout(function () {
          i({type: 'timeout', target: l});
        }, 12e4);
        (l.onerror = l.onload = i), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (u.m = e),
    (u.c = o),
    (u.d = function (e, t, n) {
      u.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n});
    }),
    (u.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(e, '__esModule', {value: !0});
    }),
    (u.t = function (e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, 'default', {enumerable: !0, value: e}),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          u.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (u.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return u.d(t, 'a', t), t;
    }),
    (u.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = '/'),
    (u.oe = function (e) {
      throw (console.error(e), e);
    });
  var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var d = 0; d < i.length; d++) t(i[d]);
  var b = l;
  a.push([0, 'chunk-vendors']), n();
})({
  0: function (e, t, n) {
    e.exports = n('56d7');
  },
  '07a5': function (e, t, n) {
    'use strict';
    n('9369');
  },
  '17a5': function (e, t, n) {
    e.exports = n.p + 'img/musician.1e9e07ec.png';
  },
  4360: function (e, t, n) {
    'use strict';
    var o = n('5502'),
      r = (n('d3b7'), n('bc3a')),
      c = n.n(r),
      a = n('1da1'),
      s = (n('96cf'), n('a18c')),
      u = c.a.create({baseURL: 'http://localhost:8080/api'});
    (c.a.defaults.withCredentials = !0),
      u.interceptors.response.use(
        function (e) {
          return e;
        },
        (function () {
          var e = Object(a['a'])(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (console.log(t), t.config, 401 !== t.response.status)
                      ) {
                        e.next = 5;
                        break;
                      }
                      return (
                        s['a'].push('/login'),
                        e.abrupt('return', Promise.reject(t))
                      );
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()
      );
    var i = u,
      l = {
        namespaced: !0,
        state: {
          loggedIn: localStorage.getItem('LOGGED_IN') || !1,
          user: localStorage.getItem('USER') || {},
        },
        getters: {
          isLoggedIn: function (e) {
            return e.loggedIn;
          },
        },
        mutations: {
          setUser: function (e, t) {
            localStorage.setItem('USER', t), (e.user = t);
          },
          setLoginStatus: function (e, t) {
            (e.loggedIn = t), localStorage.setItem('LOGGED_IN', t);
          },
          clearState: function (e) {
            localStorage.clear(), (e.loggedIn = !1), (e.user = {});
          },
        },
        actions: {
          login: function (e, t) {
            var n = e.commit;
            return new Promise(function (e, o) {
              i.post('/auth/login', t)
                .then(function (t) {
                  var r = t.data,
                    c = t.status;
                  200 === c
                    ? (n('setUser', r.user), n('setLoginStatus', !0), e(!0))
                    : o('Error: '.concat(c));
                })
                .catch(function (e) {
                  o(e);
                });
            });
          },
          logout: function (e, t) {
            var n = e.commit;
            return new Promise(function (e, o) {
              i.post('/auth/logout', t)
                .then(function (t) {
                  t.data;
                  var r = t.status;
                  200 === r
                    ? (n('clearState'), n('setLoginStatus', !1), e(!0))
                    : o('Error: '.concat(r));
                })
                .catch(function (e) {
                  o(e);
                });
            });
          },
          register: function (e, t) {
            var n = e.commit;
            return new Promise(function (e, o) {
              i.post('/auth/signup', t)
                .then(function (t) {
                  var r = t.data,
                    c = t.status;
                  console.log('Data: ' + r),
                    200 === c
                      ? (n('setUser', r.user), n('setLoginStatus', !0), e(!0))
                      : o('Error: '.concat(c));
                })
                .catch(function (e) {
                  o(e);
                });
            });
          },
          getAuthData: function () {
            return {user: JSON.parse(localStorage.getItem('USER'))};
          },
          regenerateToken: function (e, t) {
            var n = e.commit;
            return (
              console.log('inside regenerateToken'),
              new Promise(function (e, o) {
                i.post('/auth/tokens/refresh', t)
                  .then(function (t) {
                    var r = t.data,
                      c = t.status;
                    console.log(r),
                      200 === c
                        ? (n('setTokens', r), n('setLoginStatus', !0), e(!0))
                        : o(c);
                  })
                  .catch(function (e) {
                    o(e);
                  });
              })
            );
          },
        },
      },
      d = l,
      b = {
        namespaced: !0,
        state: {prevQuery: ''},
        getters: {},
        mutations: {
          setPrevQuery: function (e, t) {
            e.prevQuery = t;
          },
        },
        actions: {
          search: function (e, t) {
            var n = e.commit;
            return new Promise(function (e, o) {
              i.get('/search?query='.concat(t))
                .then(function (r) {
                  var c = r.data,
                    a = r.status;
                  200 === a
                    ? (n('setPrevQuery', t), e(c.results))
                    : (console.log(a), o('Error: '.concat(a)));
                })
                .catch(function (e) {
                  o(e);
                });
            });
          },
          fetchArtists: function () {
            return new Promise(function (e, t) {
              i.get('/artists?count=6')
                .then(function (n) {
                  var o = n.data,
                    r = n.status;
                  200 === r ? e(o.artists) : t('Error: '.concat(r));
                })
                .catch(function (e) {
                  t(e);
                });
            });
          },
          fetchTracks: function (e) {
            return new Promise(function (t, n) {
              !0 === e.sort
                ? i
                    .get('/tracks?sort=1')
                    .then(function (e) {
                      var o = e.data,
                        r = e.status;
                      200 === r ? t(o.tracks) : n('Error: '.concat(r));
                    })
                    .catch(function (e) {
                      n(e);
                    })
                : i
                    .get('/tracks')
                    .then(function (e) {
                      var o = e.data,
                        r = e.status;
                      200 === r ? t(o.tracks) : n('Error: '.concat(r));
                    })
                    .catch(function (e) {
                      n(e);
                    });
            });
          },
        },
      },
      f = b,
      g = {
        namespaced: !0,
        state: {},
        getters: {},
        mutations: {},
        actions: {
          uploadTrack: function (e, t) {
            e.commit;
            return new Promise(function (e, n) {
              i.post('/uploads/tracks/new', t)
                .then(function (t) {
                  var o = t.status,
                    r = t.data;
                  console.log(r), 201 === o ? e(!0) : n('Error: '.concat(o));
                })
                .catch(function (e) {
                  console.log(e), n(e);
                });
            });
          },
        },
      },
      p = g,
      h = {
        namespaced: !0,
        state: {
          showCookieConsent: localStorage.getItem('COOKIE_CONSENT') || !0,
        },
        getters: {
          show_cookie_consent: function (e) {
            return e.showCookieConsent;
          },
        },
        mutations: {
          setConsent: function (e, t) {
            localStorage.setItem('COOKIE_CONSENT', t),
              (e.showCookieConsent = t);
          },
        },
        actions: {},
      },
      v = h;
    t['a'] = Object(o['a'])({
      modules: {auth: d, utils: f, uploads: p, user: v},
    });
  },
  '4ed6': function (e, t, n) {
    'use strict';
    n('cc9b');
  },
  '56d7': function (e, t, n) {
    'use strict';
    n.r(t);
    n('e260'), n('e6cf'), n('cca6'), n('a79d');
    var o = n('7a23');
    function r(e, t, n, r, c, a) {
      var s = Object(o['w'])('Navbar'),
        u = Object(o['w'])('router-view');
      return (
        Object(o['p'])(),
        Object(o['d'])('div', null, [Object(o['g'])(s), Object(o['g'])(u)])
      );
    }
    var c = Object(o['E'])('data-v-3fb0e599');
    Object(o['s'])('data-v-3fb0e599');
    var a = {class: 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'},
      s = {class: 'container-fluid'},
      u = Object(o['g'])(
        'a',
        {class: 'navbar-brand', href: '/'},
        [
          Object(o['g'])('div', {class: 'logo-text'}, [
            Object(o['g'])('h3', null, 'Track Wiz'),
          ]),
        ],
        -1
      ),
      i = Object(o['g'])(
        'button',
        {
          class: 'navbar-toggler',
          type: 'button',
          'data-bs-toggle': 'collapse',
          'data-bs-target': '#navbarSupportedContent',
          'aria-controls': 'navbarSupportedContent',
          'aria-expanded': 'false',
          'aria-label': 'Toggle navigation',
        },
        [Object(o['g'])('i', {class: 'fa fa-bars fw-bold'})],
        -1
      ),
      l = {class: 'collapse navbar-collapse', id: 'navbarSupportedContent'},
      d = {class: 'navbar-nav me-auto mb-2 mb-lg-0 text-monospace'},
      b = {class: 'nav-item'},
      f = Object(o['f'])('HOME'),
      g = {class: 'nav-item'},
      p = Object(o['f'])('SEARCH'),
      h = {class: 'nav-item'},
      v = Object(o['f'])('BROWSE'),
      m = {key: 0, class: 'nav-item'},
      O = Object(o['f'])('PLAYLISTS'),
      j = {key: 0},
      k = {class: 'dropdown'},
      w = Object(o['g'])(
        'button',
        {
          class: 'btn btn-warning dropdown-toggle',
          type: 'button',
          id: 'dropdownMenuButton1',
          'data-bs-toggle': 'dropdown',
          'aria-expanded': 'false',
        },
        ' Account ',
        -1
      ),
      y = {class: 'dropdown-menu', 'aria-labelledby': 'dropdownMenuButton1'},
      S = Object(o['f'])('Profile'),
      E = Object(o['f'])('Playlists'),
      I = Object(o['g'])(
        'li',
        null,
        [Object(o['g'])('hr', {class: 'dropdown-divider'})],
        -1
      ),
      _ = {key: 1},
      C = {class: 'navbar-nav'},
      P = {class: 'nav-item'},
      L = Object(o['f'])('LOGIN'),
      x = {class: 'nav-item'},
      N = Object(o['f'])('SIGNUP');
    Object(o['q'])();
    var T = c(function (e, t, n, r, T, G) {
        var A = Object(o['w'])('router-link');
        return (
          Object(o['p'])(),
          Object(o['d'])('nav', a, [
            Object(o['g'])('div', s, [
              u,
              i,
              Object(o['g'])('div', l, [
                Object(o['g'])('ul', d, [
                  Object(o['g'])('li', b, [
                    Object(o['g'])(
                      A,
                      {class: 'nav-link', 'aria-current': 'page', to: '/'},
                      {
                        default: c(function () {
                          return [f];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  Object(o['g'])('li', g, [
                    Object(o['g'])(
                      A,
                      {class: 'nav-link', to: '/search'},
                      {
                        default: c(function () {
                          return [p];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  Object(o['g'])('li', h, [
                    Object(o['g'])(
                      A,
                      {class: 'nav-link', to: '/browse'},
                      {
                        default: c(function () {
                          return [v];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  e.isLoggedIn
                    ? (Object(o['p'])(),
                      Object(o['d'])('li', m, [
                        Object(o['g'])(
                          A,
                          {class: 'nav-link', to: '/user/playlists'},
                          {
                            default: c(function () {
                              return [O];
                            }),
                            _: 1,
                          }
                        ),
                      ]))
                    : Object(o['e'])('', !0),
                ]),
                e.isLoggedIn
                  ? (Object(o['p'])(),
                    Object(o['d'])('div', j, [
                      Object(o['g'])('div', k, [
                        w,
                        Object(o['g'])('ul', y, [
                          Object(o['g'])('li', null, [
                            Object(o['g'])(
                              A,
                              {class: 'dropdown-item', to: '/user/profile'},
                              {
                                default: c(function () {
                                  return [S];
                                }),
                                _: 1,
                              }
                            ),
                          ]),
                          Object(o['g'])('li', null, [
                            Object(o['g'])(
                              A,
                              {class: 'dropdown-item', to: '/playlists'},
                              {
                                default: c(function () {
                                  return [E];
                                }),
                                _: 1,
                              }
                            ),
                          ]),
                          I,
                          Object(o['g'])('li', null, [
                            Object(o['g'])(
                              'a',
                              {
                                class: 'dropdown-item',
                                onClick:
                                  t[1] ||
                                  (t[1] = Object(o['D'])(
                                    function () {
                                      return (
                                        e.logout && e.logout.apply(e, arguments)
                                      );
                                    },
                                    ['prevent']
                                  )),
                              },
                              'Logout'
                            ),
                          ]),
                        ]),
                      ]),
                    ]))
                  : (Object(o['p'])(),
                    Object(o['d'])('div', _, [
                      Object(o['g'])('ul', C, [
                        Object(o['g'])('li', P, [
                          Object(o['g'])(
                            A,
                            {class: 'nav-link', to: '/login'},
                            {
                              default: c(function () {
                                return [L];
                              }),
                              _: 1,
                            }
                          ),
                        ]),
                        Object(o['g'])('li', x, [
                          Object(o['g'])(
                            A,
                            {class: 'nav-link', to: '/signup'},
                            {
                              default: c(function () {
                                return [N];
                              }),
                              _: 1,
                            }
                          ),
                        ]),
                      ]),
                    ])),
              ]),
            ]),
          ])
        );
      }),
      G = n('5530'),
      A = n('4360'),
      U = n('5502'),
      D = {
        name: 'Navbar',
        data: function () {
          return {};
        },
        computed: Object(G['a'])({}, Object(U['b'])('auth', ['isLoggedIn'])),
      };
    n('eff1');
    (D.render = T), (D.__scopeId = 'data-v-3fb0e599');
    var R = D,
      M = {components: {Navbar: R}};
    M.render = r;
    var B = M,
      W = n('9483');
    Object(W['a'])(''.concat('/', 'service-worker.js'), {
      ready: function () {
        console.log('App is being served from cache by a service worker.');
      },
      registered: function () {
        console.log('Service worker has been registered.');
      },
      cached: function () {
        console.log('Content has been cached for offline use.');
      },
      updatefound: function () {
        console.log('New content is downloading.');
      },
      updated: function () {
        console.log('New content is available; please refresh.');
      },
      offline: function () {
        alert('No Internet Connection'),
          console.log(
            'No internet connection found. App is running in offline mode.'
          );
      },
      error: function (e) {
        console.error('Error during service worker registration:', e);
      },
    });
    var q = n('a18c');
    Object(o['c'])(B).use(A['a']).use(q['a']).mount('#app');
  },
  6248: function (e, t) {
    (t.routeGuard = function (e, t, n) {
      localStorage.getItem('LOGGED_IN') ? n() : n('/login');
    }),
      (t.authGuard = function (e, t, n) {
        localStorage.getItem('LOGGED_IN') ? n('/') : n();
      });
  },
  9369: function (e, t, n) {},
  a18c: function (e, t, n) {
    'use strict';
    n('d3b7'), n('3ca3'), n('ddb0'), n('99af'), n('b0c0');
    var o = n('6c02'),
      r = n('7a23'),
      c = n('17a5'),
      a = n.n(c),
      s = Object(r['E'])('data-v-128bb103');
    Object(r['s'])('data-v-128bb103');
    var u = {class: 'home component'},
      i = Object(r['g'])(
        'div',
        {style: {position: 'relative'}},
        [
          Object(r['g'])('div', {class: 'row'}, [
            Object(r['g'])(
              'div',
              {class: 'col-md-6 text-center align-self-center'},
              [Object(r['g'])('img', {class: 'img-fluid pt-5', src: a.a})]
            ),
            Object(r['g'])(
              'div',
              {class: 'col-md-6 align-self-center p-5 fw-bold text-center'},
              [
                Object(r['g'])(
                  'h1',
                  {class: 'logo-text text-white pt-4'},
                  'Track Wiz'
                ),
                Object(r['g'])(
                  'h5',
                  {class: 'text-white home-text pt-3'},
                  ' Listen To Music that awakens the inner musician in You. '
                ),
              ]
            ),
          ]),
        ],
        -1
      ),
      l = {class: 'text-center'},
      d = Object(r['f'])(' Go to Web Player '),
      b = Object(r['f'])(" Get Track Wiz it's Free "),
      f = Object(r['g'])('hr', {class: 'bg-white'}, null, -1);
    Object(r['q'])();
    var g = s(function (e, t, n, o, c, a) {
        var g = Object(r['w'])('router-link'),
          p = Object(r['w'])('Footer');
        return (
          Object(r['p'])(),
          Object(r['d'])('div', u, [
            i,
            Object(r['g'])('div', l, [
              e.isLoggedIn
                ? (Object(r['p'])(),
                  Object(r['d'])(
                    g,
                    {
                      key: 0,
                      class:
                        'btn btn-outline-danger rounded-pill fw-bold border mb-5 border-danger border-2',
                      to: '/player',
                    },
                    {
                      default: s(function () {
                        return [d];
                      }),
                      _: 1,
                    }
                  ))
                : (Object(r['p'])(),
                  Object(r['d'])(
                    g,
                    {
                      key: 1,
                      class:
                        'btn btn-outline-info rounded-pill fw-bold border mb-5 border-info border-2',
                      to: '/signup',
                    },
                    {
                      default: s(function () {
                        return [b];
                      }),
                      _: 1,
                    }
                  )),
            ]),
            f,
            Object(r['g'])(p),
          ])
        );
      }),
      p = n('5530'),
      h = Object(r['E'])('data-v-8d6a0c2e');
    Object(r['s'])('data-v-8d6a0c2e');
    var v = {class: 'footer bg-dark text-white pt-2 container'},
      m = Object(r['g'])(
        'div',
        {class: 'text-center'},
        [
          Object(r['g'])('a', {class: 'link', href: '/'}, [
            Object(r['g'])('h1', {class: 'logo-text'}, 'Track Wiz'),
          ]),
          Object(r['g'])('p', null, 'Copyright © 2021'),
        ],
        -1
      );
    Object(r['q'])();
    var O = h(function (e, t, n, o, c, a) {
        return Object(r['p'])(), Object(r['d'])('footer', v, [m]);
      }),
      j = {name: 'Footer'};
    n('4ed6');
    (j.render = O), (j.__scopeId = 'data-v-8d6a0c2e');
    var k = j,
      w = n('5502'),
      y = {
        name: 'Home',
        components: {Footer: k},
        data: function () {
          return {
            loggedIn: this.$store.state.auth.loggedIn,
            showCookieConsent: this.$store.state.user.showCookieConsent || !0,
          };
        },
        methods: {},
        computed: Object(p['a'])(
          Object(p['a'])({}, Object(w['b'])('auth', ['isLoggedIn'])),
          Object(w['b'])('user', ['show_cookie_consent'])
        ),
      };
    n('07a5');
    (y.render = g), (y.__scopeId = 'data-v-128bb103');
    var S = y,
      E = n('6248'),
      I = [
        {path: '/', name: 'Home', component: S},
        {
          path: '/login',
          name: 'Login',
          beforeEnter: E['authGuard'],
          component: function () {
            return n.e('chunk-315abc36').then(n.bind(null, 'a55b'));
          },
        },
        {
          path: '/signup',
          name: 'Signup',
          beforeEnter: E['authGuard'],
          component: function () {
            return n.e('chunk-25ab6c4f').then(n.bind(null, '34c3'));
          },
        },
        {
          path: '/search',
          name: 'Search',
          component: function () {
            return n.e('chunk-2b396476').then(n.bind(null, '2d3b'));
          },
        },
        {
          path: '/user/profile',
          name: 'Profile',
          beforeEnter: E['routeGuard'],
          component: function () {
            return n.e('chunk-23002440').then(n.bind(null, 'c66d'));
          },
        },
        {
          path: '/player',
          name: 'Player',
          beforeEnter: E['routeGuard'],
          component: function () {
            return n.e('chunk-7bdb6dcd').then(n.bind(null, 'bf5c'));
          },
        },
        {
          path: '/browse',
          name: 'Browse',
          component: function () {
            return n.e('chunk-72d682ef').then(n.bind(null, 'b210'));
          },
        },
        {
          path: '/tracks/new',
          name: 'Upload',
          beforeEnter: E['routeGuard'],
          component: function () {
            return n.e('chunk-18c1dfdc').then(n.bind(null, '2679'));
          },
        },
      ],
      _ = Object(o['a'])({history: Object(o['b'])('/'), routes: I});
    _.beforeEach(function (e, t, n) {
      (document.title = ''.concat('TRACK WIZ', ' - ').concat(e.name)), n();
    });
    t['a'] = _;
  },
  cc9b: function (e, t, n) {},
  db5d: function (e, t, n) {},
  eff1: function (e, t, n) {
    'use strict';
    n('db5d');
  },
});
//# sourceMappingURL=app.47b2615b.js.map
