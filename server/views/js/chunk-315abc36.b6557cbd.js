(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-315abc36'],
  {
    1111: function (e, t, r) {
      'use strict';
      r('27d3');
    },
    '27d3': function (e, t, r) {},
    a55b: function (e, t, r) {
      'use strict';
      r.r(t);
      var a = r('7a23'),
        c = {class: 'login component'},
        n = {class: 'container p-5'},
        s = Object(a['g'])('h1', {class: 'text-center pt-5 p-3'}, 'LOGIN', -1),
        o = {class: 'container'};
      function i(e, t, r, i, l, d) {
        var b = Object(a['w'])('LoginForm');
        return (
          Object(a['p'])(),
          Object(a['d'])('div', c, [
            Object(a['g'])('div', n, [
              s,
              Object(a['g'])('div', o, [Object(a['g'])(b)]),
            ]),
          ])
        );
      }
      var l = Object(a['E'])('data-v-c61ebdcc');
      Object(a['s'])('data-v-c61ebdcc');
      var d = {class: 'text-danger'},
        b = {class: 'mb-3'},
        p = Object(a['g'])(
          'label',
          {for: 'email', class: 'form-label'},
          'Email address:',
          -1
        ),
        u = {class: 'mb-3'},
        m = Object(a['g'])(
          'label',
          {for: 'password', class: 'form-label'},
          'Password:',
          -1
        ),
        g = {class: 'p-3 pt-5'};
      Object(a['q'])();
      var O = l(function (e, t, r, c, n, s) {
          return (
            Object(a['p'])(),
            Object(a['d'])('form', null, [
              Object(a['g'])('p', d, Object(a['y'])(n.errorMessage), 1),
              Object(a['g'])('div', b, [
                p,
                Object(a['C'])(
                  Object(a['g'])(
                    'input',
                    {
                      type: 'email',
                      'onUpdate:modelValue':
                        t[1] ||
                        (t[1] = function (e) {
                          return (n.email = e);
                        }),
                      class: 'form-control',
                      id: 'email',
                      name: 'email',
                    },
                    null,
                    512
                  ),
                  [[a['A'], n.email]]
                ),
              ]),
              Object(a['g'])('div', u, [
                m,
                Object(a['C'])(
                  Object(a['g'])(
                    'input',
                    {
                      type: 'password',
                      'onUpdate:modelValue':
                        t[2] ||
                        (t[2] = function (e) {
                          return (n.password = e);
                        }),
                      class: 'form-control',
                      id: 'password',
                      name: 'password',
                    },
                    null,
                    512
                  ),
                  [[a['A'], n.password]]
                ),
              ]),
              Object(a['g'])('div', g, [
                Object(a['g'])(
                  'button',
                  {
                    type: 'submit',
                    onClick:
                      t[3] ||
                      (t[3] = Object(a['D'])(
                        function () {
                          return s.login && s.login.apply(s, arguments);
                        },
                        ['prevent']
                      )),
                    class: 'btn btn-primary',
                  },
                  ' Login '
                ),
              ]),
            ])
          );
        }),
        j = {
          name: 'LoginForm',
          data: function () {
            return {email: '', password: '', errorMessage: ''};
          },
          methods: {
            login: function () {
              var e = this;
              this.$store
                .dispatch('auth/login', {
                  email: this.email,
                  password: this.password,
                })
                .then(function (t) {
                  (e.errorMessage = ''), e.$router.push('/');
                })
                .catch(function (t) {
                  console.error(t),
                    (e.errorMessage = 'Login Error: Check Credentials'),
                    e.$router.push('/login');
                });
            },
          },
        };
      r('1111');
      (j.render = O), (j.__scopeId = 'data-v-c61ebdcc');
      var f = j,
        v = {components: {LoginForm: f}};
      v.render = i;
      t['default'] = v;
    },
  },
]);
//# sourceMappingURL=chunk-315abc36.b6557cbd.js.map
